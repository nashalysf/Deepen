import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import { useParams } from "react-router-dom";
import id from "faker/lib/locales/id_ID";


const initialList = [
  { id: "a", name: " React" },
  { id: "b", name: " Firebase" },
  { id: "c", name: " GraphQL" },
  { id: "d", name: " JXT" },
  { id: "e", name: " JavaScript" },
  { id: "f", name: " JAVA" },
];



const ListTools = (post) => {
  console.log(post);
  let { tools: toolArray } =  post.post;
  console.log(toolArray[0]);

  return (
    <div  class="d-flex justify-content-center padding">
    
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
            TOOLS
          </Typography>
         
            <List >
              
              {toolArray.map((tool) =>(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
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
