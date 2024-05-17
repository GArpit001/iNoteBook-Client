import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'



const Home = (props) => {


    return (
        <div className="main  " >
            <div className="container max-w-6xl mx-auto mt-[2rem]  ">
                <h1 className='text-[25px]  font-bold mb-4' >Add a Note</h1>
                <AddNote showAlert={props.showAlert} />
            </div>
            <Notes showAlert={props.showAlert} />


        </div >
    )
}

export default Home





