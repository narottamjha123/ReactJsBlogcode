import  {connect} from 'react-redux';
import AllBlog from '../AllBlogs';
import { Card } from 'react-bootstrap';
import EditBlog from '../EditUserBlog';
import { EditToBlog } from '../Service/Action/actionData';

const mapStateToProps = state => ({
   // addToBlogHandler : data => dispatch(addToBlog(data))
   BlogData : state.BlogItem
})

const mapDispatchToProps = dispatch => ({
    EditToBlogHandler : data => dispatch(EditToBlog(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AllBlog);