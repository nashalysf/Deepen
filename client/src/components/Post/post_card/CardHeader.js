import React from "react";
import Avatar from "../../Profile/Avatar";
import { Link } from "react-router-dom";
import { QUERY_USER, QUERY_ME } from "../../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import logo from "../../../images/png/avatar.png"

const CardHeader = ({ post }) => {
  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

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
