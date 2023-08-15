import React from 'react'
import { useState } from 'react'
const InputTodo = () =>{

    const [description,setDescription] = useState("");
    console.log(description)

    const onSubmitForm = async(e) =>{

        e.preventDefault();

        try{
            const body = {description};
            const response = await fetch("http://localhost:5000/todos",{
                method:"Post",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(body)
            });

         window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
       <>
            <h1 className='text-center mt-5'> Pern Todo list</h1>

            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type='text'
                       className='form-control' 
                       value={description} 
                       onChange={e=>(setDescription(e.target.value))}/>
                <button className='btn btn-success'> Add this todo</button>
            </form>
       </>
    )
}
export default InputTodo
