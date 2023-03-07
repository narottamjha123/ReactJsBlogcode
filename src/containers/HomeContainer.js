import  {connect} from 'react-redux';
// import  addToBlog   from "../service/Action/action";
import { addToBlog, RemoveToBlog} from '../Service/Action/actionData';
import AddBlog from "../AddBlog";
import { Card } from 'react-bootstrap';

const mapStateToProps = state => ({
   // addToBlogHandler : data => dispatch(addToBlog(data))
   BlogData : state.BlogItem
})

const mapDispatchToProps = dispatch => ({
    addToBlogHandler : data => dispatch(addToBlog(data)),
    

})

export default connect(mapStateToProps,mapDispatchToProps)(AddBlog);

