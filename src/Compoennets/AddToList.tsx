import React, {useState, useEffect} from 'react'
import {Istate as Props} from '../App'

interface Iprops {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList = ({people, setPeople} : Iprops) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    }) 

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
   } 

   const handleClick = ()=> {
    if (!input.name || !input.age) 
    return;
    
    setPeople([
        ...people,
        {
            name: input.name,
            age: parseInt(input.age),
            img: input.img ,
            notes: input.note
        }
    ])
        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        })
   }


   useEffect(() => {
   }, [input])
    
  return (
    <div className="AddToList">
    <input 
        type="text"
        className="AddToList-input"
        name="name"
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
    />
    <input 
        type="text"
        className="AddToList-input"
        name="age"
        placeholder="Age"
        value={input.age}
        onChange={handleChange}

    />
    <input 
        type="text"
        className="AddToList-input"
        name="img"
        placeholder="Image Url"
        value={input.img}
        onChange={handleChange}

    />
    <textarea
        className="AddToList-input"
        name="note"
        placeholder="Note"
        value={input.note}
        onChange={handleChange}

    />
    <button
        className="AddToList-btn"
        onClick={handleClick}
    >
        Add to List
    </button>
</div>
  )
}

export default AddToList