import React, { useState, useEffect, useRef, useContext } from 'react'
import { myContext } from '../context/context'
import { useNavigate } from 'react-router-dom'
import "../App.css"

const NoteCards = (props) => {

    const history = useNavigate()


    const getNote = useContext(myContext)

    const { notes, editNote, deleteNote, getNotes } = getNote
    // console.log(notes)
    // console.log(users.email)


    const [note, setNote] = useState({ id: "", editTitle: "", editdescription: "", editTag: "" })


    useEffect(() => {
        if (localStorage.getItem("token")) {
            getNotes()
            // getUserDetail()
        } else {
            history("/login")
        }
    }, [])

    const deleteNotes = (id) => {
        // console.log("Delete NOte " , id)
        deleteNote(id)
        props.showAlert("Delete Note Successfully ✔")
    }

    const ref = useRef(null)
    const closeRef = useRef(null)

    const upDateNote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, editTitle: currentNote.title, editdescription: currentNote.description, editTag: currentNote.tag })

    }




    const handleClick = (e) => {
        // console.log("Updateing Note ... ", note)
        e.preventDefault()
        editNote(note.id, note.editTitle, note.editdescription, note.editTag)
        closeRef.current.click()

        props.showAlert("Edit Note Successfully ✔")


    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }






    return (
        <div className="no flex gap-8 mx-auto  flex-wrap ">



            <button data-modal-target="crud-modal" ref={ref} data-modal-toggle="crud-modal" className="hidden  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button>

            <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Edit Model
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="editTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input type="text" name="editTitle" id="editTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={note.editTitle} onChange={onChange} autoComplete="off" />
                                </div>
                                <div className="col-span-2 ">
                                    <label htmlFor="editdescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input type="text" name="editdescription" id="editdescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={note.editdescription} onChange={onChange} autoComplete="off" />
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="editTag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
                                    <input type="text" name="editTag" id="editTag" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" value={note.editTag} onChange={onChange} />
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-green-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-red-700 dark:focus:ring-blue-800" disabled={note.editTitle.length < 5} onClick={handleClick}>

                                Update Note
                            </button>

                            <button type="button" ref={closeRef} className="hidden " data-modal-toggle="crud-modal">

                                <span className="sr-only ">Close modal</span>
                            </button>

                        </form>
                    </div>
                </div>
            </div>



            {
                notes.length === 0 && (<div>NO Notes here </div>)
            }

            <div className="cards" title='Your Notes is Here'>
                {/* <div className="flip-card"> */}

                {
                    notes.map((val) => {
                        return (


                            <div key={val._id} className=" justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-600 dark:border-gray-700 flex max-w-[350px]">
                                <div className="note">


                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight  text-black" title='Title' >{val.title}</h5>

                                    <p className="mb-3 font-normal text-white" title='Description'>{val.description}</p>

                                    <p className="inline-flex text-white font-medium items-center  hover:underline" title='Tag'>
                                        {val.tag}

                                    </p>
                                </div>

                                <div className="icon flex gap-5 self-end">
                                    <i className="text-yellow-300 cursor-pointer fa-solid fa-pen-to-square" title='Update_Note' onClick={() => { upDateNote(val) }}></i>
                                    <i className="text-red-600 cursor-pointer fa-solid fa-trash" title='Delete_Note' onClick={() => { deleteNotes(val._id) }} ></i>
                                </div>
                            </div>


                            // CARD 1 //

                            // <div key={val._id} className="  p-6 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 flex max-w-[350px] card red">
                            //     <div className="note">

                            //     <h5 className="mb-2 text-3xl font-semibold tracking-tight  ">{val.title}</h5>

                            //     <p className="mb-3 font-medium text-xl">{val.description}</p>

                            //     <p className="mb-3 font-medium text-xl">{val.tag}</p>

                            //     </div>
                            //     <div className="icon flex gap-5 self-end">
                            //         <i className="text-yellow-300 text-xl cursor-pointer fa-solid fa-pen-to-square" onClick={() => { upDateNote(val) }}></i>
                            //         <i className="text-red-600 text-2xl cursor-pointer fa-solid fa-trash" onClick={() => { deleteNotes(val._id) }} ></i>
                            //     </div>
                            // </div>


                            // // CARD 2 //

                            // <div className="flip-card-inner">
                            //     <div className="flip-card-front">
                            //         <p className="title">FLIP CARD</p>
                            //         <p>Hover Me</p>
                            //     </div>
                            //     <div className="flip-card-back">
                            //         <p className="tip">{val.title}</p>
                            //         <p className="second-text">{val.description}</p>
                            //         <p className="second-text">{val.tag}</p>
                            //     </div>
                            // </div>



                        )
                    })
                }
            </div>


        </div>

    )
}

export default NoteCards
