import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className="card card-body my-4">
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['author-name']}>By {props.post.name}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      {props.post.user === props.currentUser.id ?
        <p><button type="button" className="btn btn-sm btn-danger" onClick={props.onDelete}>Delete Post</button></p>
        : null}
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    unlikes: PropTypes.array.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default PostListItem;
