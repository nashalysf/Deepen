import React from "react";
import Avatar from "../../Profile/Avatar";
import { Link } from "react-router-dom";
import logo from "../../../images/png/avatar.png"
import { Button } from "react-bootstrap";

const CardHeader = ({ post }) => {
  return (
    <div className="formCard-header">
      <div className="CardHeader">
       
        <Avatar src={logo} size="big-avatar" />
        <h4 className="m-0">
          {/* TO-DO Change url path and change user.username */}
          <Link to={`profile/${post.username}`} className="profileName">
            {post.username}
          </Link>
        </h4>
        <Button
          className="btn btn-danger btn-block"
          type="submit"
          variant="danger"
          onClick={""}
        >
          Submit
        </Button>
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
<button onClick={""} >Delete</button>
      </div>
      
    </div>
  );
};

export default CardHeader;
