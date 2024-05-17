import React from 'react'

import NoteCards from './NoteCards'

const Notes = (props) => {
 


    return (
        <div className="notes max-w-6xl my-7 mx-auto">

            <h1 className='text-[25px] mb-5 font-bold' >Your Note</h1>

            {/* <div className="no flex gap-8 flex-wrap">
                {
                    getNote.notes.map((val) => {
                        return (


                            <div key={val._id} className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex max-w-sm">
                                <div className="note">


                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{val.title}</h5>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{val.description}</p>
                                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                        {val.tag}

                                    </a>
                                </div>

                                <div className="icon flex gap-5 self-end">
                                    <i className="text-yellow-600 cursor-pointer fa-solid fa-pen-to-square"></i>
                                    <i className="text-red-600 cursor-pointer fa-solid fa-trash"></i>
                                </div>
                            </div>

                        )
                    })
                }
            </div> */}
            <NoteCards showAlert={props.showAlert}/>
        </div>
    )
}

export default Notes
