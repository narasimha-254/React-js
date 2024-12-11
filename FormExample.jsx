import React, { useState } from 'react'

const FormExample = () => {
    const [username,setUsername]=useState("")
    const [newname,setNewname]=useState('')

    const changeValue =(e)=>{
        setUsername(e.target.value)
    }
    const submitValue = (e)=>{
        e.preventDefault();
        setNewname(username)
    }
  return (
    <div className='formSection'>
        <h1>Hello, {newname}</h1>
        {/* Normal method */}
        {/* <input type='text' className='inputBox' placeholder='Enter Your Name' onChange={changeValue}/>
        <br />
        <button className="submitBtn"onClick={submitValue} >Submit</button> */}

        {/* here we are using form */}
        <form onSubmit={submitValue}>
        <input type='text' className='inputBox' placeholder='Enter Your Name' onChange={changeValue}/>
        <br /> <br />
        <button className="submitBtn" type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default FormExample