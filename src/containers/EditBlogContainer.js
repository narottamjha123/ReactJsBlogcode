import  {connect} from 'react-redux';
import EditBlog from '../EditUserBlog';
import { addToBlog, EditToBlog, RemoveToBlog} from '../Service/Action/actionData';

const mapStateToProps = state => ({
   // addToBlogHandler : data => dispatch(addToBlog(data))
   BlogData : state.BlogItem
})

const mapDispatchToProps = dispatch => ({
    EditToBlogHandler : data => dispatch(EditToBlog(data)),
    addtToBlogHandler : data => dispatch(addToBlog(data)),

})

export default connect(mapStateToProps,mapDispatchToProps)(EditBlog);