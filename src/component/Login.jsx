import React, { useContext, useRef, useState } from 'react'
import { useForm } from "react-hook-form"

import { useNavigate, Link } from 'react-router-dom'
import { myContext } from '../context/context'
// import LOGIN from "../assets/img/LOG.png"
import Footer from "../component/Footer"
import LOGIN from "../assets/img/in.svg"


import "../App.css"
import Payload from './Payload'

const Login = (props) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    const deley = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, d * 1000)
        })
    }

    const username = useContext(myContext)
    const { name, setName } = username
    // console.log(name)



    const history = useNavigate()

    const [login, setLogin] = useState({ email: "", password: "" })

    // const rememberCheck = useRef(null)




    const onSubmit = async (e) => {
        // e.preventDefault()
        // console.log("Login Successfully")

        await deley(2)


        // const responce = await fetch("http://localhost:2110/api/auth/login", {
        const responce = await fetch("https://inotebook-backend-8r9c.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: login.email, password: login.password }),

        })

        const json = await responce.json()
        // console.log(json)

        if (json.success) {
            const userName = login.email.split("@")
            // console.log(userName)
            setName(userName[0])
            // console.log(name)


            props.showAlert(`${userName[0].toUpperCase()} Welcome back your account`)
            localStorage.setItem("token", json.authToken)
            history("/home")  /// history("/")
        }
        else {
            props.showAlert("INVALID CREDENTIALS")

        }

    }


    const onChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }




    return (

        <>


            {/* // <div className='flex w-full px-[3rem] py-[1.8rem] bg-slate-100 '> */}
            <div className=' fullPage relative '>
             


                {/* <div className="image w-1/2 bg-[url('./assets/img/login.png')] bg-no-repeat  bg-top "> */}
                <div className="image max-w-1/2 pt-24 ">
                    <img src={LOGIN} title='LOGO' className='w-[700px] h-[480px] ' alt="" />

                </div>

                {
                    isSubmitting && <Payload/>
                }


                <div className='loginForm w-full max-w-lg m-auto pt-16 '>



                    <form onSubmit={handleSubmit(onSubmit)} id="formin" className=" w-[80%]  border border-slate-900 p-[2rem] py-[3rem]  rounded-md" title='LOGIN FORM' >

                        <h1 className=' logHead  font-medium text-black  mb-5 text-center underline'>
                            Login to Continue to iNotebook
                        </h1>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-xl font-medium text-white-900 light:text-black">Your email</label>
                            <input type="email"  {...register("email", { required: { value: 'true', message: "Email should be must ..." } })} className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-black dark:placeholder-gray-400  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" value={login.email} onChange={onChange} />

                            {
                                errors.email && (<div className='text-red-600'>{errors.email.message}</div>)
                            }
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-xl font-medium text-white-900 light:text-black">Your Password</label>
                            <input type="password" id="password" {...register("password", { required: { value: 'true', message: "Password should be must" }, minLength: { value: 5, message: "Password has been min. 5 character" } })} className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Password" value={login.password} onChange={onChange} />
                            {
                                errors.password && (<div className='text-red-600'>{errors.password.message}</div>)
                            }
                        </div>




                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >LOGIN</button>
                    </form>

                    <div className=' text-center w-[80%] bg-gray-100 border border-slate-300 p-[0.5rem] text-black rounded-lg mt-4'>
                        New To iNoteBook ? <Link to="/signup" className='text-blue-700 font-bold'> Create a account → </Link>
                    </div>

                </div>


            </div>
            <Footer />
        </>


    )
}

export default Login
