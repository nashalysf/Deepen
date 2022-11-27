import React from "react";
import Avatar from "../../Profile/Avatar";
import { Link } from "react-router-dom";

const CardHeader = ({ post, userAvi }) => {
  return (
    <div className="formCard-header">
      <div className="CardHeader">
       
        <Avatar src={userAvi} size="supper-avatar" />
        <h4 className="m-0">
          {/* TO-DO Change url path and change user.username */}
          <Link to={`/profile/${post.username}`} className="profileName">
            {post.username}
          </Link>
        </h4>
       
        <h1 className="title_project">{post.title}</h1>

        <div className="card_name">
          <small className="text-muted">{post.createdAt}</small>
        </div>
      </div>

      <div className="nav-item dropdown">
        <span
          className="material-icons"
          id="moreLink"
          data-toggle="dropdown"
        ></span>
      </div>
      
    </div>
  );
};

export default CardHeader;
