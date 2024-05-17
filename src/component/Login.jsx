import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../context/context'
import LOGIN from "../assets/img/LOG.png"
// import LOGIN from "./assets/img/LoginSVG/svg"
import "../App.css"

const Login = (props) => {

    const username = useContext(myContext)
    const { name, setName } = username
    // console.log(name)



    const history = useNavigate()

    const [login, setLogin] = useState({ email: "", password: "" })

    // const rememberCheck = useRef(null)




    const handleLogin = async (e) => {
        e.preventDefault()
        // console.log("Login Successfully")
        

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
            history("/")
        }
        else {
            props.showAlert("INVALID CREDENTIALS")

        }

    }


    const onChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

  


    return (

        // <div className='flex w-full px-[3rem] py-[1.8rem] bg-slate-100 '>
        <div className='flex'>

            {/* <div className="image w-1/2 bg-[url('./assets/img/login.png')] bg-no-repeat  bg-top "> */}
            <div className="image w-1/2  ">
                <img src={LOGIN} title='LOGO' className='w-full h-full ' alt="" />

            </div>


            <div className='loginForm w-full max-w-lg m-auto '>




                <form className=" w-[80%]  border border-slate-300 p-[2rem] py-[3rem] dark:bg-gray-100 rounded-md" title='LOGIN FORM' onSubmit={handleLogin}>

                    <h1 className='text-xl font-medium text-white-900 light:text-black mb-5 text-center underline'>
                        Login to Continue to iNotebook
                    </h1>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-xl font-medium text-white-900 light:text-black">Your email</label>
                        <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" value={login.email} onChange={onChange} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-xl font-medium text-white-900 light:text-black">Your password</label>
                        <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Password" value={login.password} onChange={onChange} required />
                    </div>

                    {/* <div className="mb-5 flex items-center">
                        <input type="checkbox" ref={rememberCheck} onChange={onChange} />
                        <label htmlFor="password" className="ml-4 text-white-900 light:text-black">Remember This Password</label>
                    </div> */}


                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >LOGIN</button>
                </form>

            </div>

        </div>

    )
}

export default Login
