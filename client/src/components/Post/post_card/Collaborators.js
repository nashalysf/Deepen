import React from "react";
import { ADD_COLLABORATOR } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DevIcon from "devicon-react-svg";

const Collaborators = ({ post }) => {
  const [addCollaborator] = useMutation(ADD_COLLABORATOR);
  console.log(post.collaborators);
  let { collaborators: collaboratorArray } = post;
  console.log(collaboratorArray);
  const handleFollow = async (event) => {
    event.preventDefault();
    try {
      await addCollaborator({
        variables: {
          postId: post._id,
          username: Auth.getProfile().data.username,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div class="d-flex justify-content-center padding">
      <Box sx={{ flexGrow: 1, maxWidth: 320 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List
              sx={{ width: "100%", maxWidth: 320, bgcolor: "background.paper" }}
            >
              {collaboratorArray.map((collaborator) => (
                <ListItem alignItems="flex-start">
                  <ListItemText className="bw" primary={collaborator} />
                </ListItem>
              ))}
            </List>
            <button onClick={handleFollow}>Collaborate</button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Collaborators;
