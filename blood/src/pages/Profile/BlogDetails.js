import React from 'react';
import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function BlogDetails() {
  const { id, bid } = useParams();
  const { document, error } = useDocument('users', id);

  if (!document) {
    return <div className='loading'>Loading.....</div>;
  }

  if (!document.blogs || document.blogs.length === 0) {
    return <div className='loading'>Blog not found</div>;
  }

  // Find the specific blog post by ID (bid) within the blogs array
  const blog = document.blogs.find((blog) => blog.id === Number(bid));

  if (!blog) {
    return <div className='loading'>Blog not found</div>;
  }

  const createdAtDate = blog.createdAt?.toDate(); // Convert createdAt to Date object

  return (
    <div className="post-body">
      <div className="post" key={blog.title}>

        
        <div className="title">
          <h1>{blog.title}</h1>
        </div>

        <div className="post-date">
          <p>Date: {blog.date}</p>
        </div>

         <div className='blog-image'>
                <img src={blog.thumbnailUrl} alt="" />
        </div>

        <div className="body">
          <article>{blog.body}</article>
        </div>

        <div className="createdAt">
          {createdAtDate && (
            <p>
              {formatDistanceToNow(createdAtDate, {
                addSuffix: true,
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
