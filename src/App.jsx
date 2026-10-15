import { useState } from 'react';

function App() {
  const [form,setForm]=useState([]);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpass,setConfirmpass]=useState("");
  const [error,setError]=useState("");

  function ValidateForm(){
    if(!name.trim()){
      return "name is required";
    }
    if(!email.trim()){
      return "Email is required";
    }
    if(!email.includes("@")){
      return "Invalid Email Address";
    }
    if(password.length< 8){
      return "Password must contain 8 characters"
    }
  }

  function add(){
    ValidationError = ValidateForm();
    if(ValidationError){
      setError(ValidationError);
      return ;
    }

    const newForm ={
      name:name,
      email:email,
      password:password,
      confirmpass:confirmpass
    };

    setForm((prev)=>[...prev,newForm]);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmpass("");
    setError("");
  }
  filteredform= form.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
     <h2>Form Validation</h2>
    <input 
    type="text"
    name="name"
    placeholder="Enter Name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    required/>

  <br /><br />

   
    <input 
    type="email"
    name="email"
    placeholder="Enter Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    required
    />
    <br /><br/>
  
    <input 
    type="text"
    name="password"
    placeholder="Enter password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    required
    />
     
    <input 
    type="text"
    name="confirmpass"
    placeholder="Enter Confirm Password"
    value={confirmpass}
    onChange={(e)=>setConfirmpass(e.target.value)}
    required/>

    <br/><br/>
    <button onClick ={add}>Submit Form</button>

    {filteredform.map((item)=>(
      <div key={item._id}>
        <p>Name :{item.name}</p>
        <p>Email:{item.email}</p>
        <hr/>
      </div>
    ))}
    </>  
    
  )
}

export default App;
