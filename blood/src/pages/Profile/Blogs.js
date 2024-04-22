import React from 'react';
import { Link } from 'react-router-dom';
import "./Blogs.css";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useDocument } from "../../hooks/useDocument";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Blogs() {
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user.uid);

  return (
    <div className='blogs-page'>
      <div className='blog-heading'>
        <h1>My Blogs</h1>
        <Link className="create-link" to="create-blog">Create</Link>
      </div>

      {document && document.blogs && document.blogs.length > 0 ? (
        document.blogs.map((blog) => (
          <Link to = {`/profile/${user.uid}/blogs/${blog.id }`}>
          <div className="post" key={blog.title}>
            <div className="title">
              <h1>{blog.title}</h1>
            </div>

            {/* <div className="post-date">
              <p> Date: {blog.date}</p>
            </div> */}

            {/* <div className='blog-image'>
                <img src={blog.thumbnailUrl} alt="" />
            </div> */}

            <div className="body">
              <article>{blog.body.substring(0,500)}<span>......Readmore</span></article>
            </div>

            {blog.createdAt && (
              <div className="createdAt">
                <p>
                  {formatDistanceToNow(blog.createdAt.toDate(), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            )}
          </div>
          </Link>
        ))
      ) : (
        <p>No blogs.Start Creating</p>
      )}

      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
