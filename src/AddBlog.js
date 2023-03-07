import React, { useState }  from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';
import './App.css';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';

function AddBlog(props)
{
  let Url = window.location.href.split('?');
  let Name = Url[1].split('=')[1];
  let Email = Url[2].split('=')[1];
  let  [Title, setTitle] = useState("");
  let  [Content , setContent] = useState("");
  let  [Categorized, setCategorized] = useState("");
  let  [ID, setID] = useState(0);
  let  [NameofUser, setName] = useState(Name);
  let  [EmailOfUser, setEmail] = useState(Email);
    // Id == "-1" ? Reset() : "";

    function onChangeData(event)
    {
        event.Field == "Title" ? setTitle(event.event.target.value) : 
        
        (event.Field == "content" ? setContent(event.event.target.value) : setCategorized(event.event.target.value));
    }

    function SubmitData()
    {
      let id = ID +1;
      setID(prevID => prevID +1);
      let z = Math.random().toFixed(6)
      props.addToBlogHandler({ID : z, Title : Title , Content 
        : Content, Categorized : Categorized, Like : 0 , DisLike : 0, userLike: [], userDisLike : [] , user : {NameofUser},Email : {EmailOfUser}});
      
    }

    function Reset()
    {
      setTitle("");
      setContent("");
      setCategorized("");
    }

    return (
          
        <>
    <div className ="TopNavigation">
      Back To Index
    </div>
    <div id="form-main">
    <div id="form-div">
      <p className="name">
        <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Title" id="Title" value = {Title} onChange={(e) => onChangeData({event : e , Field : "Title"})}/>
      </p>
      
      <p className="email">
        <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="Categorized" placeholder="Categorized" value = {Categorized} onChange={(e) => onChangeData({event : e , Field : "Categorized"})} />
      </p>
      
      <p className="text">
        <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="content" value = {Content} onChange={(e) => onChangeData({event : e , Field : "content"})}></textarea>
      </p>
      
      <Link to = {`/AllBlog?User=${NameofUser}?Email=${EmailOfUser}`}>
        <button type="button" className="btn btn-warning" onClick={SubmitData}>Submit</button>
        </Link>
        <button type="button" className="btn btn-secondary Secondary" onClick={Reset}>Reset</button>
  </div>
  </div>
  </>
    );
}

export default AddBlog