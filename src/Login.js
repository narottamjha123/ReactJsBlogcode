import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { UserData } from './user';

function Login()
{
    let  [Name, setName] = useState("");
    let  [Email , setEmail] = useState("");
    let [Saveduser,setUser] = useState(UserData);

    function SaveEnable()
    {

            if(Name.length > 0 && Email.length > 0)
            {
            let userVal = Saveduser ;
            let x = userVal.filter((x) =>  (x.Email == Email));
            let y = x.filter((z) => z.Name == Name);
                  if(y.length > 0 ) {
                  return true ;
                  }
            }
            return false;
    }

    function onChangeData(event)
    {
          event.Field == "Name" ? setName(event.event.currentTarget.value) : setEmail(event.event.currentTarget.value);
    }

    function Reset()
    {
        setName("");
        setEmail("");
    }
    return (
          
        <>
    <div id="form-div">
    <form class="form" id="form1">
      
      <p class="name">
        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" value = {Name} placeholder="Name" id="Title"onChange={(e) => onChangeData({event : e , Field : "Name"})} />
      </p>
      
      <p class="email">
        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="Categorized" value = {Email} placeholder="Email" onChange={(e) => onChangeData({event : e , Field : "Email"})} />
      </p>
    
       
      
      {SaveEnable() ?
      
      <Link to = {`/AllBlog?User=${Name}?Email=${Email}`}>
      <button type="button" class="btn btn-warning">Submit</button>
      </Link>

       : <button type="button" class="btn btn-warning" disabled>Submit</button>}
      <button type="button" class="btn btn-dark" onClick={Reset}>Reset</button>

    </form>
  </div>
  </>
    );
}

export default Login;