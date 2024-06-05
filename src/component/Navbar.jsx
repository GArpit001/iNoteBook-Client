import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { myContext } from '../context/context'
import "../App.css"
import PRO from "../assets/img/LOG.png"
import LOGO from "../assets/img/iNoteBook LOGO.jpg"
import Payload from './Payload'
import Box from './Box'


const Navbar = () => {

    const userDetail = useContext(myContext)
    const { users, getUserDetail, name } = userDetail
    // console.log(users)

    const [show, setShow] = useState(false)






    // const ref = useRef(null)

    let location = useLocation()

    useEffect(() => {
        // console.log(location.pathname)
    }, [location])



    // const logOut = () => {

    //     // console.log("Are You Sure to Logout.")
    //     // let out = confirm("Are You Sure to Logout.")

    //     // if (out) {
    //     //     // console.log("OUT")
    //     // }

    //     localStorage.removeItem("token")


    // }

    const logout = () => {
        setShow(true)
    }

    useEffect(() => {

        getUserDetail()
    }, [])






    const openBox = async () => {
        getUserDetail()

        // ref.current.click()


    }

    const onChange = () => {
        console.log("DOne")
    }

    const [img, setImg] = useState("LOG.png")



    return (


        <>
            <nav className=" border-gray-200 bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <div className='text-white navLogo'>
                        <img src={LOGO} className="h-8" alt="Flowbite Logo" />
                    </div>

                    <ul className=" navLi  flex-row gap-8 font-medium  rounded-lg ">
                        <li>
                            <Link to="/" className={`block py-2 px-3  ${location.pathname === "/" ? "text-blue-700" : "text-white"} rounded md:bg-transparent  md:p-0 `} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`block py-2 px-3  ${location.pathname === "/about" ? "text-blue-700" : "text-white"} rounded md:bg-transparent  md:p-0 `}>About</Link>
                        </li>
                        <li>
                            <Link to="/service" className={`block py-2 px-3  ${location.pathname === "/service" ? "text-blue-700" : "text-white"} rounded md:bg-transparent md:p-0 `}>Services</Link>
                        </li>
                    </ul>

                    <div className="navButton   mt-3  ">

                        {

                            localStorage.getItem('token') ?
                                <div className="relative flex phone ">
                                    <div className='text-white navLogo2'>
                                        <img src={LOGO} className="h-8" alt="Flowbite Logo" />
                                    </div>
                                    <div>

                                    <button className='bg-blue-500 text-white mx-3 px-[14px] py-[7px] rounded-3xl showBtn' onClick={() => { openBox() }}>
                                        {name.slice(0, 1).toUpperCase() || users.fname.slice(0, 1).toUpperCase()}
                                    </button>
                                    <div className=" mainProfile absolute right-6 top-[52px]  modal   bg-slate-400 rounded-2xl ">
                                        <div className='content'>


                                            <div className="p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                <div className="photo flex flex-col justify-between items-center ">

                                                    <h3 className="text-lg pb-5 font-semibold text-gray-900 dark:text-black">
                                                        Account Details
                                                    </h3>

                                                    <div className='upload'>
                                                        <img src={PRO} className='w-[100px] h-[100px] relative rounded-full' alt="" />


                                                    </div>
                                                </div>


                                            </div>
                                            <form className="p-4 md:p-5">
                                                <div className="grid gap-4 mb-4 grid-cols-2">
                                                    <div className="col-span-2">
                                                        <label htmlFor="editTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ACCOUNT HOLDER'S NAME</label>
                                                        <input type="text" name="editTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={users.fname} onChange={onChange} autoComplete="off" />
                                                    </div>
                                                    <div className="col-span-2 ">
                                                        <label htmlFor="editdescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ACCOUNT HOLDER'S EMAIL</label>
                                                        <input type="text" name="editdescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={users.email} onChange={onChange} autoComplete="off" />
                                                    </div>

                                                    <div className="col-span-2">
                                                        <label htmlFor="editTag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ACCOUNT HOLDER'S  PASSWORD</label>
                                                        <input type="password" name="editTag" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={users.password} onChange={onChange} />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <button className='bg-blue-500 showBtn text-white mx-2 px-[12px] py-[6px] rounded-lg' onClick={logout} role='button' >LOGOUT </button>


                                    {show ? <Box show={show} setShow={setShow} /> : ""}

                                    </div>





                                </div> :
                                <div className="relative  md:block">
                                    <Link className='bg-blue-500 text-white mx-2 px-[12px] py-[7px] rounded-lg' role='button' to="/login">Login</Link>
                                    <Link className='bg-blue-500 text-white mx-2 px-[12px] py-[7px] rounded-lg' role='button' to="/signup">Sign Up</Link>
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </>


    )
}

export default Navbar
