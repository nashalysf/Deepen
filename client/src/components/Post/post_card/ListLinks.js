import React from "react";
import Link from "@mui/material/Link";

const ListLinks = (post) => {
  let { links: linkArray } = post.post;
  linkArray = linkArray.map((link) => link.split("\n"));
  let otherArray = linkArray.flat();

  return (
    <div class="d-flex align-items-center flex-column">
      {otherArray.map((link) => (
        <a className= "bw" href={"https://"+link} target="_blank"  rel="noreferrer external">
          <br />
          {link}
        </a>
      ))}
    </div>
  );
};

export default ListLinks;
