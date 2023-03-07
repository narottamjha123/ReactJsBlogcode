import React , { useState }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link ,useLocation} from 'react-router-dom';

function MyBlog(props)
{
      let Name = window.location.href.split('?')[1].split('=')[1];
      let Email = window.location.href.split('?')[2].split('=')[1];
      const location = useLocation();
      console.log("lllll",props);
      let data = props.BlogData;
      let myData = data.filter((x) => x.blogData.Email.EmailOfUser == Email);
      console.log("my",myData);
      console.log(props);

      let [CurrentBlog ,setCurrentBlog] = useState(myData.length > 0 ? myData[0].blogData : {});
      let [AllBlog,setAllBlog] = useState(myData);
      let [NextEnable ,setNext] = useState(true);
      let [PrevEnable ,setPrev] = useState(false);
      let [index,setIndex] = useState(0);


      function next(AllBlogData,indexval)
      {
             let AllBlog = AllBlogData.AllBlog;
             let indexNo = indexval.index;
             setCurrentBlog(AllBlog[indexNo+1].blogData);
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
      function DeLETE()
      {
         console.log("lll",AllBlog);
         console.log(CurrentBlog);

         let val = [];
         // let x = state.for((x.blogData = (x.ID.ID != action.data.ID.ID)));
         let deleteBlog = CurrentBlog;

         AllBlog.forEach((x) => {
                  if(x.blogData.ID != CurrentBlog.ID)
                  {
                     val.push(x);
                  }
         });

         
         setAllBlog(val);
         setCurrentBlog(val.length > 0 ? val[0].blogData : {});
         props.removeToBlogHandler(CurrentBlog);
       
      }

      return (
         <>

        <div class="Blog">
        <div class ="TopNavigation d-flex flex-row">
         <Link to =  "/">
            <button class="btn btn-warning Button">Back To Home</button>
         </Link>
             <div style ={{marginLeft: '220px'}}>
            <Link to = {`/AddBlog?User=${Name}?Email=${Email}`}>
             <button type="button" class="btn btn-success Button" style = {{borderRadius:'30px'}}>Add New Post</button>
             </Link>
             
             <Link to = {`/EditBlog?User=${Name}?Email=${Email}?ID=${CurrentBlog.ID}`}>
             {CurrentBlog.ID != undefined ? <button type="button" class="btn btn-warning Button" style = {{borderRadius:'30px'}}>Edit</button> : <></>}
            </Link>

            <Link to = {`/AllBlog?User=${Name}?Email=${Email}`}>
             <button type="button" class="btn btn-success Button" style = {{borderRadius:'30px'}}>All Blog</button>
             </Link>

                  {/* <Link to = {`/MyBlog?User=${Name}?Email=${Email}`}>  */}
                 <button type="button" class="btn btn-danger Button" style = {{borderRadius:'30px'}} onClick = {DeLETE}>DeLETE</button>
                 {/* </Link> */}
            </div>
       </div>
        <div class = 'd-flex flex-column'>
         <div class='Text'>
            <span class = "TextVal">{"Title "}</span> {CurrentBlog.Title}
         </div>

         <div class='Text'>
         <span class = "TextVal">{"Categorized "}</span> {CurrentBlog.Categorized}
         </div>

         <div class='Text'>
         <span class = "TextVal">{"Content "}</span> {CurrentBlog.Content}
         </div>
         </div>

         <div class="d-flex mt-3 ml-5">

{NextEnable ? <button type="button" className="btn btn-warning" onClick={() => next({AllBlog},{index})}>Next</button>
                : <button type="button" className="btn btn-warning"disabled>Next</button>}
                {PrevEnable ? <button type="button" className="btn btn-dark ml-3" style = {{marginLeft: '10px'}}  onClick={() => prev({AllBlog},{index})}>Previous</button>
                :<button type="button" className="btn btn-dark ml-3"  style = {{marginLeft: '10px'}} disabled>Previous</button>}
         </div>
          
      </div>
      </>
      )
}

export default MyBlog;