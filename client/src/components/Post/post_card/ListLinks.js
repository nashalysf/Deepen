import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const ListLinks = (post) => {
  let { links: linkArray } =  post.post;


  return (
    <div  class="d-flex justify-content-center">
    <Box sx={{ flexGrow: 1, maxWidth: 320 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}>
              {linkArray.map((link) =>(
                <ListItem>
                   <ListItemText className="bw"
                    primary={link}
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

export default ListLinks;
