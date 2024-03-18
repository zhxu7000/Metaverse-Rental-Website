import React, {Component} from 'react';

// import components
import {BiArea, BiBath, BiBed} from "react-icons/bi";
import {Link} from "react-router-dom";
import axios from "axios";

import Image from "../assets/img/house-banner.png";

import history from '../history/History';


export default class SignIn extends Component {

    constructor() {
        super();
        this.state={
            usertype: "",
            username:"",
            password:""
        }
    }

    Login = async () => {
        const usertype = this.state.usertype;
        console.log("send usertype:" + usertype);
        axios
            .get("http://localhost:8090/Login/doLogin", {
                params: {
                    usertype: this.state.usertype,
                    username: this.state.username,
                    password: this.state.password
                },
            })
            .then((res) => {
                console.log(res.data.code)
                if(res.data.code === 200){
                    console.log("res.data.data:" + res.data.data);
                    history.push({pathname:"/home"}, {uid:res.data.data.id, usertype:this.state.usertype});
                    history.go(0)
                } else {
                }
            });
    }

    changeHandle = (e) =>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    usertypeHandle(e){
        let val = e.target.value
        this.setState({
            usertype:val
        })
    }

    render() {
        const {username, password} = this.state;
        let {usertype}=this.state;
        return (
            <div className='container mx-auto max-w-[1000px] min-h-[500px] mb-14'>
                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <div className='mb-8'>
                                <img src={Image} height="500" width="500" alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
                        <div className='flex justify-center gap-x-4 mb-8'>
                            <div>
                                <div className='font-bold text-[36px] text-center'>Sign In</div>
                                <Link to='' className='text-violet-700 text-sm'>
                                    Please select your user type!
                                </Link>
                            </div>
                        </div>
                        <form className='flex flex-col gap-y-4'>
                            <div className='flex justify-center gap-x-2'>
                                <input
                                    className='text-sm outline-none'
                                    name='usertype' value='0' type='radio'
                                    onChange={this.usertypeHandle.bind(this)} checked={usertype==="0"}
                                /> I'm a tenant
                                <input
                                    className='text-sm outline-none'
                                    name='usertype' value='1' type='radio'
                                    onChange={this.usertypeHandle.bind(this)} checked={usertype==="1"}
                                /> I'm a landlord
                            </div>
                            <input
                                className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
                                type='text' name='username' value={username}
                                onChange={this.changeHandle}
                                placeholder='Username*'
                            />
                            <input
                                className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
                                type='password' name='password' value={password}
                                onChange={this.changeHandle}
                                placeholder='Password*'
                            />
                            <br/>
                            <div className='flex gap-x-2'>
                                <Link
                                    className='border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition text-center'
                                    to={'/signup'}>
                                    Create Account
                                </Link>
                            </div>
                        </form>
                        <br/>
                        <button
                            className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
                            type='submit' onClick={this.Login}>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        );
    };

}

