
import React, { useState } from 'react';

import './App.css';

function App() {

  const [useData, setUseData] = useState({
    firstName :'',
    lastName :'',
    email :'',
    mobile:'',
    textarea:''
  })
  const submitdata= async (event)=>{
     event.preventDefault();
     const {firstName,lastName,email,mobile,textarea} = useData;

     if(firstName && lastName && email && mobile&& textarea){

    

    const res = await fetch('https://signup-29eef-default-rtdb.firebaseio.com/userDataRecord.json',

   { method : "post",
    headers : {
      "Content-Type" :"application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      mobile,
      textarea
    })
  }
    )

    if(res){
      setUseData({
        firstName :'',
        lastName :'',
        email :'',
        mobile:'',
        textarea:''
      })
      alert("Your Data has been submitted successfully..");
    }
    else{
      alert("Please fill Data Properly!!");
    }
  }
  else{
    alert("Please fill Data Properly!!");
  }
  }

  let name ,value;
 const postUserData = (event)=>{
   name= event.target.name;
   value=event.target.value;
   setUseData({...useData,[name]:value});
 }
  return (
    <div className="App">
      <h1>Sign Up Form</h1>
      <div className='container'>
        <form className='form' method='post'>
          <label for="FirstName">First Name</label>
          <input 
          type='text'
          placeholder="Enter first name"
          name='firstName'
          value={useData.firstName}
          onChange={postUserData}
          />
          
          
          <label for="LastName" >Last Name</label>
          <input 
          type='text'
          placeholder="Enter Last name"
          name='lastName'
          value={useData.lastName}
          onChange={postUserData}
          />
 
          <label for="email" >Email</label>
          <input type='text' 
          placeholder="Enter Email"
          name='email'
          value={useData.email}
          onChange={postUserData}
          />

          <label for="mobile" >Number</label>
          <input type='text' placeholder="+91.."
          name='mobile'
           value={useData.mobile}
           onChange={postUserData}
          />
          
          <label for="textarea"> Why are you here?</label>
          <textarea  name='textarea' value={useData.textarea}  onChange={postUserData}></textarea>
          <button onClick={submitdata}>Submit</button>



        </form>
      </div>
    </div>
  );
}

export default App;
