import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { myContext } from '../context/context'
import "../App.css"
import PRO from "../assets/img/LOG.png"
import LOGO from "../assets/img/iNoteBook LOGO.jpg"


const Navbar = () => {

    const userDetail = useContext(myContext)
    const { users, getUserDetail, name } = userDetail
    // console.log(users)






    // const ref = useRef(null)

    let location = useLocation()

    useEffect(() => {
        // console.log(location.pathname)
    }, [location])



    const logOut = () => {
        localStorage.removeItem("token")
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

        // <>
        //     <nav className="bg-white border-gray-200 dark:bg-gray-900">
        //         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //                 <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        //             <div className="flex md:order-2">
        //                 <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
        //                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        //                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        //                     </svg>
        //                     <span className="sr-only">Search</span>
        //                 </button>
        //                 {

        //                     localStorage.getItem('token') ?
        //                         <div className="relative hidden md:block">
        //                             <button className='bg-blue-500 text-white mx-3 px-[14px] py-[7px] rounded-3xl showBtn' onClick={() => { openBox() }}>
        //                                 {name.slice(0, 1).toUpperCase() || users.fname.slice(0, 1).toUpperCase()}
        //                             </button>
        //                             <div className=" mainProfile absolute right-6 top-[52px]  modal w-[350px] bg-slate-400 rounded-2xl ">
        //                                 <div className='content'>


        //                                     <div className="p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        //                                         <div className="photo flex flex-col justify-between items-center ">

        //                                             <h3 className="text-lg pb-5 font-semibold text-gray-900 dark:text-black">
        //                                                 Account Details
        //                                             </h3>

        //                                             <div className='upload'>
        //                                                 <img src={PRO} className='w-[100px] h-[100px] relative rounded-full' alt="" />


        //                                             </div>
        //                                         </div>


        //                                     </div>
        //                                     <form className="p-4 md:p-5">
        //                                         <div className="grid gap-4 mb-4 grid-cols-2">
        //                                             <div className="col-span-2">
        //                                                 <label htmlFor="editTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ACCOUNT HOLDER'S NAME</label>
        //                                                 <input type="text" name="editTitle" id="editTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={users.fname} onChange={onChange} autoComplete="off" />
        //                                             </div>
        //                                             <div className="col-span-2 ">
        //                                                 <label htmlFor="editdescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ACCOUNT HOLDER'S EMAIL</label>
        //                                                 <input type="text" name="editdescription" id="editdescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={users.email} onChange={onChange} autoComplete="off" />
        //                                             </div>

        //                                             <div className="col-span-2">
        //                                                 <label htmlFor="editTag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ACCOUNT HOLDER'S  PASSWORD</label>
        //                                                 <input type="password" name="editTag" id="editTag" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={users.password} onChange={onChange} />
        //                                             </div>
        //                                         </div>




        //                                     </form>



        //                                 </div>
        //                             </div>


        //                             <Link className='bg-blue-500 text-white mx-2 px-[12px] py-[6px] rounded-lg' role='button' to="/login" onClick={logOut}>LOGOUT </Link>
        //                         </div> :
        //                         <div className="relative hidden md:block">
        //                             <Link className='bg-blue-500 text-white mx-2 px-[12px] py-[7px] rounded-lg' role='button' to="/login">Login</Link>
        //                             <Link className='bg-blue-500 text-white mx-2 px-[12px] py-[7px] rounded-lg' role='button' to="/signup">Sign Up</Link>
        //                         </div>

        //                 }

        //                 <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        //                     <span className="sr-only">Open main menu</span>
        //                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        //                     </svg>
        //                 </button>
        //             </div>
        //             <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        //                 <div className="relative mt-3 md:hidden">
        //                     <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        //                         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        //                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        //                         </svg>
        //                     </div>
        //                     <input type="text" id="search-navbar2" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
        //                 </div>
        //                 <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        //                     <li>
        //                         <Link to="/" className={`block py-2 px-3 text-white ${location.pathname === "/" ? "text-blue-700" : ""} rounded md:bg-transparent  md:p-0 `} aria-current="page">Home</Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/about" className={`block py-2 px-3 text-white ${location.pathname === "/about" ? "text-blue-700" : ""} rounded md:bg-transparent  md:p-0 `}>About</Link>
        //                     </li>
        //                     <li>
        //                         <Link to="/service" className={`block py-2 px-3 text-white ${location.pathname === "/service" ? "text-blue-700" : ""} rounded md:bg-transparent md:p-0 md:light:text-blue-500`}>Services</Link>
        //                     </li>


        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </>


        <>
            <nav className=" border-gray-200 bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <div className='text-white navLogo'>
                    <img src={LOGO} className="h-8" alt="Flowbite Logo" />
                    </div>

                    <ul className=" navLi flex flex-row gap-8 font-medium  rounded-lg ">
                        <li>
                            <Link to="/" className={`block py-2 px-3  ${location.pathname === "/" ? "text-blue-700" : "text-white"} rounded md:bg-transparent  md:p-0 `} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`block py-2 px-3  ${location.pathname === "/about" ? "text-blue-700" : "text-white"} rounded md:bg-transparent  md:p-0 `}>About</Link>
                        </li>
                        <li>
                            <Link to="/service" className={`block py-2 px-3  ${location.pathname === "/service" ? "text-blue-700" : "text-white"} rounded md:bg-transparent md:p-0 md:light:text-blue-500`}>Services</Link>
                        </li>
                    </ul>

                    <div className="navButton   mt-3  ">

                        {

                            localStorage.getItem('token') ?
                                <div className="relative flex  ">
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
                                    <Link className='bg-blue-500 text-white mx-2 px-[12px] py-[6px] rounded-lg' role='button' to="/login" onClick={logOut}>LOGOUT </Link>
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
