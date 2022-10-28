import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, editPost } from '../../redux/postsRedux';
import { useParams } from 'react-router';

import { PostForm } from './PostForm';

export const EditPostForm = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, postId }));
    navigate('/');
  };

  if (!postData) return <Navigate to='/' />;
  return (
    <PostForm
      action={handleSubmit}
      actionText='Edit post'
      title={postData.title}
      author={postData.author}
      content={postData.content}
      publishedDate={postData.publishedDate}
      category={postData.category}
      shortDescription={postData.shortDescription}
      id={postId}
    />
  );
};
