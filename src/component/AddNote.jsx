import React, { useContext, useState } from 'react'
import { myContext } from '../context/context'
import "../App.css"


const AddNote = (props) => {


    const context = useContext(myContext)
    const { AddNote, showAlert } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        AddNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Note has been successfully Addedd ✔")


    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <form className="max-w-6xl  bg-slate-200 p-[20px] rounded-lg ]">
            <div className="mb-5 ">
                <label htmlFor="title" className="block mb-2 text-xl font-medium text-white-900 light:text-black">TITLE</label>
                <input type="text" id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Title" value={note.title} onChange={onChange} minLength={5} required />

            </div>
            <div className="mb-5">


                <label htmlFor="description" className="block mb-2 text-xl font-medium text-white-900 light:text-black">DESCRIPTION</label>
                <input type="text" id="description" name='description' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Description" value={note.description} onChange={onChange} required />
            </div>
            <div className="mb-5">


                <label htmlFor="tag" className="block mb-2 text-xl font-medium text-white-900 light:text-black">TAG</label>
                <input type="text" id="tag" name='tag' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Tag" value={note.tag} onChange={onChange} required />
            </div>
            <button type="submit" disabled={note.title.length < 5 || note.description.length < 5} onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add Note</button>
        </form>
    )
}

export default AddNote
