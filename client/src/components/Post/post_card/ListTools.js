import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import DevIcon from "devicon-react-svg";

const ListTools = (post) => {
  console.log(post);
  let { tools: toolArray } =  post.post;
  //create a array of icons with key value pairs
  const iconArray = [
  ]
//toolarray to lowercase
  toolArray = toolArray.map((tool) => tool.toLowerCase());
  console.log(toolArray[0]);

  return (
    <div  class="d-flex justify-content-center padding">
    <Box sx={{ flexGrow: 1, maxWidth: 320 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}>
              {toolArray.map((tool) =>(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                    <DevIcon icon={tool.toLowerCase()}/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className="bw"
                    primary={tool}
                  />
                </ListItem>
              ))}
            </List>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default ListTools;
