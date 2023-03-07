import { ADD_TO_BLOG , REMOVE_TO_BLOG, EDIT_TO_BLOG } from "../Constant"

const initialState = {
    blogData : []
}

 function BlogItem(state = [], action)
{
      switch(action.type)
      {
                 case ADD_TO_BLOG : 
                    //console.log("red...",action);
                    return [
                        ...state,
                        {blogData : action.data}
                    ]
                    break;
                    case REMOVE_TO_BLOG : 
                    console.log("red...",action.data);
                    console.log(state);
                    let val = [];
                    // let x = state.for((x.blogData = (x.ID.ID != action.data.ID.ID)));

                    state.forEach((x) => {
                             if(x.blogData.ID != action.data.ID)
                             {
                                val.push(x);
                             }
                    })

                    console.log(val);

                    return val
                    break;
                    case EDIT_TO_BLOG :


                        console.log("edit...",action.data);
                        console.log(state);

                        let val1 = [];
                        // let x = state.for((x.blogData = (x.ID.ID != action.data.ID.ID)));
    
                        state.forEach((x) => {
                                 if(x.blogData.ID != action.data.ID)
                                 {
                                    val1.push(x);
                                 }
                                 else{
                                    val1.push({blogData : action.data});
                                 }
                        })
                        return val1;
                    break;

                 default :
                 return state
      }
      
}

export default BlogItem;