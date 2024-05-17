import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../context/context'
import SIGN_UP from "../assets/img/sign.png"

const SignUp = (props) => {

    const userDetail = useContext(myContext)

    const { user, setUser } = userDetail

    console.log(user)

    const history = useNavigate()

    const [signup, setSignup] = useState({ fname: "", lname: "", email: "", password: "" })

    setUser(signup)

    const { fname, lname, email, password } = signup

    const createAccount = async (e) => {


        e.preventDefault()
        console.log("Account Create Successfully")

        // const responce = await fetch("http://localhost:2110/api/auth/createuser", {
            const responce = await fetch("https://inotebook-backend-8r9c.onrender.com/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fname: fname, lname: lname, email: email, password: password }),
        })

        const json = await responce.json()
        // console.log(json)
        if (json.success) {
            props.showAlert(`${fname} You have successfully create your account`)
            history("/signup")
        }
        else {
            props.showAlert("Please fill the detail again")

        }

    }

    const onChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }



    return (

        <div className='flex px-[15px]'>

            {/* <div className="image w-1/2 bg-[url('./assets/img/login.png')] bg-no-repeat  bg-top "> */}
            <div className="image w-1/2  ">
                <img src={SIGN_UP} title='LOGO' className='pl-[50px] w-[600px] h-[480px] ' alt="" />

            </div>


            <div className='signuoForm w-full max-w-lg m-auto  '>


                <form className="max-w-md  bg-gray-100 border border-slate-300 p-[2rem] text-black rounded-lg" title='SIGNUP FORM' onSubmit={createAccount} >

                    <h1 className='text-xl font-medium text-white-900 light:text-black mb-5 text-center underline'>
                        Create a Account on iNoteBook
                    </h1>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="fname" id="fname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={signup.fname} onChange={onChange} />
                            <label htmlFor="fname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="lname" id="lname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={signup.lname} onChange={onChange} />
                            <label htmlFor="lname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>

                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={signup.email} onChange={onChange} />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={signup.password} onChange={onChange} />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={onChange} />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Create Account</button>

                </form>

            </div>
        </div >

    )
}

export default SignUp
