import React, {Component} from 'react';
import {createSearchParams, Link, useLocation, useParams} from "react-router-dom";
// import components
import User from "../assets/img/agents/images.png";
import axios from "axios";
import history from "../history/History";

export default class UserCenter extends Component {

    state = {
        usertype: "0",
        uid: 1,
        username:"",
        email:"",
        appointmentData: [],
        aid: "",
    }

    constructor() {
        super();
        const urlParams = new URL(window.location.href);
        const pathname = urlParams?.pathname;
        console.log("pathname:", pathname);
        const array = pathname.split('/');
        const paramid = array[2];
        this.state.uid = paramid;
        this.showUserInfo();
        this.showUserAppointment();
    }

    showUserInfo = async () => {
        axios
            .get("http://localhost:8090/User/", {
                params: {
                    id: this.state.uid,
                },
            })
            .then((res) => {
                if (res.data.code === 200) {
                    console.log("res.data.data:" + res.data.data);
                    this.setState({username: res.data.data.username});
                    this.setState({email: res.data.data.email})
                } else {
                }
            });
    }


    showUserAppointment = async () => {
        axios
            .get("http://localhost:8090/appointment/user", {
                params: {
                    id: this.state.uid,
                },
            })
            .then((res) => {
                if (res.data.code === 200) {
                    this.setState({appointmentData: res.data.data})
                } else {
                }
            });
    }

    cancelAppointment = async (appointmentid) => {
        console.log(appointmentid)
        axios
            .get("http://localhost:8090/appointment/cancel", {
                params: {
                    id: appointmentid,
                },
            })
            .then((res) => {
                if(res.data.code === 200){
                    history.go(0)
                } else {
                }
            });
    }


    render() {
        return (
            <div className='container mx-auto max-w-[900px] min-h-[500px] mb-14'>


                <div className='flex items-center gap-x-20 mb-14'>
                    <div className='place-content-center'>
                        <img src={User} height="250" width="250" alt="profile"></img>
                    </div>
                    <div>
                        <div className='font-bold text-2xl'>{this.state.username}</div>
                        <br/>
                        <p>email address : {this.state.email}</p><br/>
                    </div>
                </div>
                <div className=' font-bold text-1xl'><span className="text-violet-600 italic">
                Appointment List</span></div>
                <br/>

                <table className="rounded border-collapse border-2 border-violet-600">
                    <thead>
                    <th className="border border-violet-600 p-2 italic">Appointment ID</th>
                    <th className="border border-violet-600 p-2 italic">House Name</th>
                    <th className="border border-violet-600 p-2 italic">Landlord Name</th>
                    {/*<th className="border border-violet-600 p-2 italic">State</th>*/}
                    <th className="border border-violet-600 p-2 italic">Cancel Appointment</th>
                    </thead>
                    <tbody>
                    {this.state.appointmentData.map((appointment)=>(
                            <tr key={appointment.id}>
                                <td className="border border-violet-600 text-center">{appointment.id}</td>
                                <td className="border border-violet-600 text-center">{appointment.houseName}</td>
                                <td className="border border-violet-600 text-center">{appointment.landlordName}</td>
                                {/*<td className="border border-violet-600 text-center">{appointment.astate}</td>*/}
                                <td className="border border-violet-600 text-center">
                                    <button className="bg-violet-600 hover:bg-violet-900 text-white rounded p-1"
                                            type={"submit"} onClick={()=> this.cancelAppointment(appointment.id)}>
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        );
    };

}
