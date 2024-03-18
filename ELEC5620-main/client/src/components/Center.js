import {Link, useLocation} from "react-router-dom";
import history from "../history/History";
import User from "../assets/img/agents/images.png";
import React from "react";
import House from "./House";

const Center = () => {

    const location = useLocation();
    const uid = location.state.uid;
    const usertype = location.state.usertype;
    console.log(uid);

    const Center = async () => {
        if (usertype == 0){
            history.push({pathname:'/user-center/'+uid}, {uid:uid});
            history.go(0)
        }else{
            history.push({pathname:'/landlord-center/'+uid}, {uid:uid});
            history.go(0)
        }
    }

    return (
        <header className='mb-12 mx-auto'>
            <div className='container mx-auto flex justify-between items-center'>
                <p className='hover:text-violet-900 text-xl font-bold lg:text-[16px] '>Welcome back, user, come to center to view the appointment</p>
                <div className='flex items-center gap-6'>
                    <button
                        className='bg-violet-700 hover:bg-violet-800 text-white px-5 py-3 rounded-lg transition'
                        type='submit' onClick={Center}>
                        Personal Center
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Center;
