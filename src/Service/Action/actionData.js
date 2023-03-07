import { ADD_TO_BLOG , REMOVE_TO_BLOG,EDIT_TO_BLOG } from "../Constant"
export const addToBlog = (data) => {
      //console.warn("action",data);
      return {
        type : ADD_TO_BLOG,
        data : data
      }
}

export const RemoveToBlog = (data) => {
  console.warn("reaction",data);
  return {
    type : REMOVE_TO_BLOG,
    data : data
  }
}

export const EditToBlog = (data) => {
  console.warn("reaction",data);
  return {
    type : EDIT_TO_BLOG,
    data : data
  }
}