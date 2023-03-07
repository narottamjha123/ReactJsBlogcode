import  {connect} from 'react-redux';
import MyBlog from '../MyBlogs';
import { addToBlog, RemoveToBlog} from '../Service/Action/actionData';

const mapStateToProps = state => ({
   // addToBlogHandler : data => dispatch(addToBlog(data))
   BlogData : state.BlogItem
})

const mapDispatchToProps = dispatch => ({
    removeToBlogHandler : data => dispatch(RemoveToBlog(data)),
    addToBlogHandler : data => dispatch(addToBlog(data)),

})

export default connect(mapStateToProps,mapDispatchToProps)(MyBlog);