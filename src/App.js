import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import HomeContainer from './containers/HomeContainer';
import AllBlogContainer from './containers/AllBlogContainer';
import MyBlogContainer from './containers/MyBlogContainer';
import EditBlogContainer from './containers/EditBlogContainer';

function App(props) {
  return (
   
  <BrowserRouter>

  <Routes>
  <Route path = '/MyBlog' element = {<MyBlogContainer/>}/>
  <Route path = '/AddBlog' element = {<HomeContainer/>}/>
  <Route path = '/' element = {<Login/>}/>
  <Route path = '/AllBlog' element = {<AllBlogContainer/>}/>
  <Route path = '/EditBlog' element = {<EditBlogContainer/>}/>
 
 
    
    </Routes>
  </BrowserRouter>

 

  );
}

export default App;
