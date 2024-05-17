import React from "react";
import { useState } from "react";
import { myContext } from './context'
import { useRef } from "react";



const NoteState = (props) => {

  const [name, setName] = useState("")




  const host = "https://inotebook-backend-8r9c.onrender.com" 

  const [notes, setNotes] = useState([]);
  const [users, setUser] = useState({ email: "", fname: "" })




  // // Get User //

  const getUserDetail = async () => {
    const responce = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
    });

    const json = await responce.json();
    // console.log(json);
    setUser(json)
  };




  // GET All Notes //

  const getNotes = async () => {
    const responce = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      
      },
    });

    const json = await responce.json();
    setNotes(json);
    // console.log(notes);
  };

  // Add a Note  //

  const AddNote = async (title, description, tag) => {
    try {

      const responce = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
          
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const resNote = await responce.json();
      // console.log("Adding a note");
      setNotes(notes.concat(resNote));



    }
    catch (err) {
      console.error({ error: err.message })
    }
  };

  // Delete Note //

  const deleteNote = async (id) => {
    const responce = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
       
      },
    });

    let res = await responce.json()
    // console.log(res);



    const newNote = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNote);
  };

  // Edit Note //

  const editNote = async (id, title, description, tag) => {

    const responce = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      
      },
      body: JSON.stringify({ title, description, tag })
    })

    const json = await responce.json()
    // console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))



    // Logic to edit in client //

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index]
      if (element._id === id) {
        newNotes[index].title = title,
          newNotes[index].description = description,
          newNotes[index].tag = tag
        break;
      }


    }

    setNotes(newNotes)


  }

  return (
    <myContext.Provider value={{ notes, editNote, AddNote, deleteNote, getNotes, users, setUser, getUserDetail, name, setName }}>
      {props.children}
    </myContext.Provider>
  );
};

export default NoteState;
