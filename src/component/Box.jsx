import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

const Box = (props) => {

    const history = useNavigate()

    const {show , setShow} = props

    const logout = ()=>{
        localStorage.removeItem("token")
        setShow(false)
        setTimeout(()=>{
            history("/login")

        },1000)
    }

    const not = () =>{
        setShow(false)
        history("/")

    }

 


    return (


        <div className=" bg-[#18181b8f] out absolute  w-screen h-[45rem] px-6 py-6 flex justify-center items-center">

            <div className='border border-black rounded-xl cont  bg-slate-600'>

                <h1 className='text-[#ffc400] text-center text-lg font-bold'>
                    Are You Sure to Logging out
                </h1>
                <div className="mt-3 text-white">
                    <button className='bg-green-500 mr-3 p-2 border border-slate-600 rounded-xl hover:bg-green-600 hover:border-black font-medium' onClick={logout} >Yes I am Sure</button>
                    <button className='bg-red-500 px-11 p-2 border border-slate-600 rounded-xl hover:bg-red-600 hover:border-black font-medium' onClick={not}>No</button>

                </div>
            </div>
        </div>
    )
}

export default Box
