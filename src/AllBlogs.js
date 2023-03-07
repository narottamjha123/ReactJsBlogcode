import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { UpdownButton } from '@lyket/react';
import {useNavigate} from 'react-router-dom';

function AllBlog(props)
{
    console.log("All",props.BlogData);
    const navigate = useNavigate();

    let Name = window.location.href.split('?')[1].split('=')[1];
    let Email = window.location.href.split('?')[2].split('=')[1];
    


    let [AllBlog,setAllBlog] = useState(props.BlogData);
    let [CurrentBlog,setCurrentBlog] = useState(props.BlogData.length > 0 ? props.BlogData[0].blogData : {});
    let [NextEnable ,setNext] = useState(true);
    let [PrevEnable ,setPrev] = useState(false);
    let [index,setIndex] = useState(0);
    let [NameofUser, setName] = useState(Name);
    let [EmailOfUser, setEmail] = useState(Email);
    let [Like ,setLike] = useState(props.BlogData.length > 0 ? props.BlogData[0].blogData.Like : 0);
    let [Dislike ,setDisLike] = useState(props.BlogData.length > 0 ? props.BlogData[0].blogData.DisLike : 0);
    let [userLiked ,setuserLiked] = useState(props.BlogData.length > 0 ? props.BlogData[0].blogData.userLike : 0);
    let [userDisLiked ,setuserDisLiked] = useState(props.BlogData.length > 0 ? props.BlogData[0].blogData.userDisLike : 0);

   

    function next(AllBlogData,indexval)
    {
           let AllBlog = AllBlogData.AllBlog;
           let indexNo = indexval.index;
           setCurrentBlog(AllBlog.length > 0 ? AllBlog[indexNo+1].blogData : {});
           setIndex(prev=> prev+1);
           setPrev(true);
           if(indexNo == AllBlog.length-2)
           {
                  setNext(false);
           }

    }
    function prev(AllBlogData,indexval)
    {
           let AllBlog = AllBlogData.AllBlog;
           let indexNo = indexval.index;
           setCurrentBlog(AllBlog[indexNo-1].blogData);
           setIndex(prev=> prev-1);
           setNext(true);
           if(indexNo == 1)
           {
                  setPrev(false);
           }

    }

    function myBlog(data)
    {
      let mYdATA = data;
      let Val = []
      let x = false;
      mYdATA.forEach((x) => {
             if((x.blogData.Email.EmailOfUser == EmailOfUser) && (x.blogData.user.NameofUser == NameofUser)){
             console.log(x);
             Val.push(x);
             }
      });
      console.log("val",Val);
      console.log(data);
      navigate(`/MyBlog?User=${NameofUser}?Email=${EmailOfUser}`, {state : {val : Val}});
    }
    function like()
    {
          let x = CurrentBlog.userLike;
          let y = CurrentBlog.userDisLike;
          let index1 = x.length > 0 ? x.indexOf(Email) : -1;
          let index2 = y.length > 0 ? y.indexOf(Email) : -1;
          let RunningBlog = CurrentBlog;
          let li = CurrentBlog.Like;
          let di = CurrentBlog.DisLike;

          //if user already like
          if(index1 != -1){
          setLike(prev => prev -1);
          li = li-1;
          x[index1] = -1;
          setuserLiked(x);
          }

          //if user don't like and also don't dislike
          if(index1 == -1 && index2 == -1){
            setLike(prev => prev +1);
            li = li+1;
            x.push(Email);
            setuserLiked(x);
          }

          //if user don't like but already dislike
          if(index1 == -1 && index2 != -1){
            setLike(prev => prev +1);
            x.push(Email);
            y[index2] = -1;
            setDisLike(prev => prev-1);
            li = li+1;
            di = di-1;
            setuserLiked(x);
            setuserDisLiked(y);
          }
          RunningBlog.Like = li;
          RunningBlog.DisLike = di;
          RunningBlog.userLike = x;
          RunningBlog.userDisLike = y;

          setCurrentBlog(RunningBlog);
          
          props.EditToBlogHandler({ID : CurrentBlog.ID, Title : CurrentBlog.Title , Content 
            : CurrentBlog.Content, Categorized : CurrentBlog.Categorized, Like : li, DisLike : di,userLike : x, userDisLike : y,user : {NameofUser : CurrentBlog.user.NameofUser},Email : {EmailOfUser : CurrentBlog.Email.EmailOfUser}});


    }
    function dislike()
    {
      let x = CurrentBlog.userLike;
      let y = CurrentBlog.userDisLike;
      let index1 = x.length > 0 ? x.indexOf(Email) : -1;
      let index2 = y.length > 0 ? y.indexOf(Email) : -1;
      let RunningBlog = CurrentBlog;
      let li = CurrentBlog.Like;
      let di = CurrentBlog.DisLike;

      //if user dislike
      if(index2 != -1){
         setDisLike(prev => prev -1);
         di = di-1;
         y[index2] = -1;
         setuserDisLiked(y);
      }

      //if user don't like and also don't dislike
      if(index1 == -1 && index2 == -1){
        setDisLike(prev => prev +1);
        di = di +1;
        y.push(Email);
        setuserDisLiked(y);
      }

      //if user don't dislike but already like
      if(index2 == -1 && index1 != -1){
        setLike(prev => prev -1);
        li = li-1;
        y.push(Email);
        x[index1] = -1;
        di = di + 1;
        setDisLike(prev => prev+1);
        setuserLiked(x);
        setuserDisLiked(y);
      }
          RunningBlog.Like = li;
          RunningBlog.DisLike = di;
          RunningBlog.userLike = x;
          RunningBlog.userDisLike = y;
          
          setCurrentBlog(RunningBlog);

      props.EditToBlogHandler({ID : CurrentBlog.ID, Title : CurrentBlog.Title , Content 
         : CurrentBlog.Content, Categorized : CurrentBlog.Categorized, Like : li, DisLike : di, userLike : x, userDisLike : y, user : {NameofUser : CurrentBlog.user.NameofUser},Email : {EmailOfUser : CurrentBlog.Email.EmailOfUser}});
    }
    return (
       <>
      <div className="Blog d-flex flex-column">
      <div class ="TopNavigation d-flex flex-row">
            <Link to = "/">
            <button class="btn btn-warning Button" >Back To Home</button>
            </Link>
             <div style ={{marginLeft: '230px'}}>
             <button type="button" class="btn btn-success Button" style = {{borderRadius:'300px', marginLeft:'200px'}} onClick={() => myBlog(props.BlogData)}>MY Blog</button>
            </div>
       </div>
       <div className='Text'>
          <span className = "TextVal">{"Title "}</span> {CurrentBlog.Title}
       </div>

       <div className='Text'>
       <span className = "TextVal">{"Categorized "}</span> {CurrentBlog.Categorized}
       </div>

       <div className='Text'>
       <span className = "TextVal">{"content "}</span> {CurrentBlog.Content}
       </div>

       <div className="d-flex mt-3 ml-5">
                {NextEnable ? <button type="button" className="btn btn-warning" onClick={() => next({AllBlog},{index})}>Next</button>
                : <button type="button" className="btn btn-warning"disabled>Next</button>}
                {PrevEnable ? <button type="button" className="btn btn-dark ml-3" style = {{marginLeft: '10px'}}  onClick={() => prev({AllBlog},{index})}>Previous</button>
                :<button type="button" className="btn btn-dark ml-3"  style = {{marginLeft: '10px'}} disabled>Previous</button>}

      {CurrentBlog.ID != undefined ? <div style = {{marginLeft : '350px'}}>
              <button type="button" className="btn btn-warning"  onClick={like}>{`like-${CurrentBlog.Like != undefined ? CurrentBlog.Like : 0}`}</button> 
              <button type="button" className="btn btn-dark ml-3" style = {{marginLeft: '10px'}} onClick={dislike}>{`Dislike-${CurrentBlog.DisLike != undefined ? CurrentBlog.DisLike : 0}`}</button>
       </div> : <></>}
       </div>
      
     
      
        
    </div>
    </>
    )
}

export default AllBlog;