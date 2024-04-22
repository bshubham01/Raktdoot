import OnlineUsers from "./OnlineUsers";
import "./Community.css";
import { useCollection } from "../../hooks/useCollection";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Community() {
  const { error, documents } = useCollection("communityPosts", null, [
    "createdAt",
    "desc",
  ]);

  return (
    <div className="post-body">
      {/* <OnlineUsers /> */}

      {!documents && <div className="loading">Loading posts.....</div>}

      {documents &&
        documents.map((post) => (
          
          <div className="post" key={post.title}>
            <Link to={`/community/${post.id}`}>
            <div className="title">
              <h1>{post.title}</h1>
            </div>

            <div className="post-date">
              <p> date: {post.date}</p>
            </div>

            <div className="body">
              <article>{post.body.substring(0,500)}<span>......Readmore</span></article>
            </div>

            <div className="createdAt">
              <p>
                {formatDistanceToNow(post.createdAt.toDate(), {
                  addSuffix: true,
                })}
              </p>
            </div>
            </Link>
          </div>
          
        ))}
    </div>
  );
}
