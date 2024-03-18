import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {housesData} from "../data";
// import components
import Agent from "../assets/img/agents/agent1.png";
import axios from "axios";
import history from "../history/History";


export default class LandlordCenter extends Component {

    state = {
        usertype: "1",
        uid: "1",
        username: "",
        email:"",
        housesData: [],
        appointmentLandlord: [],
        appointmentProcessed: [],
    }

    constructor() {
        super();
        const urlParams = new URL(window.location.href);
        const pathname = urlParams?.pathname;
        console.log("pathname:", pathname);
        const array = pathname.split('/');
        const paramid = array[2];
        this.state.uid = paramid;
        this.showLandlordInfo();
        this.showLandlordHouse();
        this.showLandlordAppointment();
        this.showLandlordProcessed();
    }

    showLandlordInfo = async () => {
        axios
            .get("http://localhost:8090/landlord/", {
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


    showLandlordHouse = async () => {
        axios
            .get("http://localhost:8090/house/landlord", {
                params: {
                    id: this.state.uid,
                },
            })
            .then((res) => {
                if (res.data.code === 200) {
                    console.log("res.data.data:" + res.data.data);
                    this.setState({housesData: res.data.data})
                } else {
                }
            });
    }


    showLandlordAppointment = async () => {
        axios
            .get("http://localhost:8090/appointment/landlordWait", {
                params: {
                    id: this.state.uid,
                },
            })
            .then((res) => {
                if (res.data.code === 200) {
                    console.log("res.data.data:" + res.data.data);
                    this.setState({appointmentLandlord: res.data.data})
                } else {
                }
            });
    }

    showLandlordProcessed = async () => {
        axios
            .get("http://localhost:8090/appointment/landlord", {
                params: {
                    id: this.state.uid,
                },
            })
            .then((res) => {
                if (res.data.code === 200) {
                    console.log("res.data.data:" + res.data.data);
                    this.setState({appointmentProcessed: res.data.data})
                } else {
                }
            });
    }

    acceptAppointment = async (appointmentid) => {
        console.log(appointmentid)
        axios
            .get("http://localhost:8090/appointment/accept", {
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

    rejectAppointment = async (appointmentid) => {
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
                        <img src={Agent} height="250" width="250" alt="profile"></img>
                    </div>
                    <div>
                        <div className='font-bold text-2xl'>{this.state.username}</div>
                        <br/>
                        <p>email address : {this.state.email}</p><br/>
                    </div>
                </div>

                <div className=' font-bold text-1xl'><span className="text-violet-600 italic">
                House</span></div>
                <br/>

                <table className="rounded border-collapse border-2 border-violet-600">
                    <thead>
                    <th className="border border-violet-600 p-2 italic">House ID</th>
                    <th className="border border-violet-600 p-2 italic">House Name</th>
                    <th className="border border-violet-600 p-2 italic">City</th>
                    <th className="border border-violet-600 p-2 italic">Address</th>
                    </thead>
                    <tbody>
                    {this.state.housesData.map((houses)=>(
                            <tr key={houses.id}>
                                <td className="border border-violet-600 text-center">{houses.id}</td>
                                <td className="border border-violet-600 text-center">{houses.name}</td>
                                <td className="border border-violet-600 text-center">{houses.country}</td>
                                <td className="border border-violet-600 text-center">{houses.address}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>

                <br/>
                <br/>
                <br/>

                <div className='font-bold text-1xl'><span className="text-violet-600 italic">
                Waiting for processing Appointment</span></div>
                <br/>

                <table className="rounded border-collapse border-2 border-violet-600">
                    <thead>
                    <th className="border border-violet-600 p-2 italic">Appointment ID</th>
                    <th className="border border-violet-600 p-2 italic">House Name</th>
                    <th className="border border-violet-600 p-2 italic">User Name</th>
                    {/*<th className="border border-violet-600 p-2 italic">State</th>*/}
                    <th className="border border-violet-600 p-2 italic">Accept Appointment</th>
                    <th className="border border-violet-600 p-2 italic">Reject Appointment</th>
                    </thead>
                    <tbody>
                    {this.state.appointmentLandlord.map((appointment)=>(
                            <tr key={appointment.id}>
                                <td className="border border-violet-600 text-center">{appointment.id}</td>
                                <td className="border border-violet-600 text-center">{appointment.houseName}</td>
                                <td className="border border-violet-600 text-center">{appointment.userName}</td>
                                {/*<td className="border border-violet-600 text-center">{appointment.astate}</td>*/}
                                <td className="border border-violet-600 text-center">
                                    <button className="bg-violet-600 hover:bg-violet-900 text-white rounded p-1"
                                            type={"submit"} onClick={()=> this.acceptAppointment(appointment.id)}>
                                        Accept
                                    </button>
                                </td>
                                <td className="border border-violet-600 text-center">
                                    <button className="bg-violet-600 hover:bg-violet-900 text-white rounded p-1"
                                            type={"submit"} onClick={()=> this.rejectAppointment(appointment.id)}>
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>


                <br/>
                <br/>
                <br/>

                <div className='font-bold text-1xl'><span className="text-violet-600 italic">
                Processed Appointment</span></div>
                <br/>

                <table className="rounded border-collapse border-2 border-violet-600">
                    <thead>
                    <th className="border border-violet-600 p-2 italic">Appointment ID</th>
                    <th className="border border-violet-600 p-2 italic">House Name</th>
                    <th className="border border-violet-600 p-2 italic">User Name</th>
                    <th className="border border-violet-600 p-2 italic">Cancel Appointment</th>
                    </thead>
                    <tbody>
                    {this.state.appointmentProcessed.map((appointment)=>(
                            <tr key={appointment.id}>
                                <td className="border border-violet-600 text-center">{appointment.id}</td>
                                <td className="border border-violet-600 text-center">{appointment.houseName}</td>
                                <td className="border border-violet-600 text-center">{appointment.userName}</td>
                                {/*<td className="border border-violet-600 text-center">{appointment.astate}</td>*/}
                                <td className="border border-violet-600 text-center">
                                    <button className="bg-violet-600 hover:bg-violet-900 text-white rounded p-1"
                                            type={"submit"} onClick={()=> this.rejectAppointment(appointment.id)}>
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
