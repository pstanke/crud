import PostForm from './PostForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (post) => {
    dispatch(addPost(post));
    navigate('/');
  };

  return <PostForm action={handleSubmit} actionText='Add post' />;
};

export default AddPostForm;
