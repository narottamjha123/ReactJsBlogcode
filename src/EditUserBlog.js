import React, { useState }  from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';
import './App.css';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';

function EditBlog(props)
{
   

    let Url = window.location.href.split('?');
    let Name = Url[1].split('=')[1];
    let Email = Url[2].split('=')[1];
    let Id =  Url.length > 3 ? Url[3].split('=')[1] : "-1";
    let x =   props && props.BlogData ? props.BlogData.filter((x) => x.blogData.ID == Id) : [];
    console.log(x);
    let  [Title, setTitle] = useState(x && x.length > 0 ? x[0].blogData.Title : "");
    let  [Content , setContent] = useState(x && x.length > 0 ? x[0].blogData.Content : "");
    let  [Categorized, setCategorized] = useState(x && x.length > 0 ? x[0].blogData.Categorized : "");
    let  [ID, setID] = useState(Id);
    let  [NameofUser, setName] = useState(Name);
    let  [EmailOfUser, setEmail] = useState(Email);
    let  [currentData,setCurrentData] = useState(x[0].blogData);

    function onChangeData(event)
    {
        event.Field == "Title" ? setTitle(event.event.target.value) : 
        
        (event.Field == "content" ? setContent(event.event.target.value) : setCategorized(event.event.target.value));
    }

    function SubmitData()
    {
      let id = ID +1;
      setID(prevID => prevID +1);
      props.EditToBlogHandler({ID : ID, Title : Title , Content 
        : Content, Categorized : Categorized, Like : currentData.Like, DisLike : currentData.DisLike, userLike: currentData.userLike, userDisLike : currentData.userDisLike,user : {NameofUser},Email : {EmailOfUser}});
      
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

export default EditBlog