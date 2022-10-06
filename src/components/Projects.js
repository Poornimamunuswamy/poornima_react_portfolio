import { Fragment } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import todo from '../todo.jpg';
import Grid from "@mui/material/Grid";
import insta from '../insta.png';
const Projects = () =>{
 return (
   <Fragment>
     <Box
       sx={{ width: "80%", height: "25%", marginTop: 2, padding: "10%" }}
       alignItems="center"
     >
       <Grid
         container
         rowSpacing={1}
         columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
       >
         <Grid item xs={6}>
           <Paper elevation={6}>
             <Card>
               <CardMedia
                 component="img"
                 height="250"
                 image={todo}
                 alt="to-do-list"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   To Do List
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   A simple to-do list app that enables you to add a new task,
                   update or delete an existing task. Firebase is used for
                   storing the data. Styling is done using Material UI. This app
                   mainly focuses on the usage of React hooks, integration of
                   front-end and backend using API.
                 </Typography>
               </CardContent>
               <CardActions>
                 <Button
                   size="small"
                   href="https://todo-list-with-crud.netlify.app/"
                   target="_blank"
                 >
                   View Project
                 </Button>
                 <Button
                   size="small"
                   href="https://github.com/Poornimamunuswamy/todo_list"
                   target="_blank"
                 >
                   View Source Code
                 </Button>
               </CardActions>
             </Card>
           </Paper>
         </Grid>

         <Grid item xs={6}>
           <Paper elevation={6}>
             <Card>
               <CardMedia
                 component="img"
                 height="250"
                 image={insta}
                 alt="to-do-list"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   Instagram Clone
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   An instagram clone app that uses Firebase for user
                   authentication, enables you to view, like, comment on the
                   existing posts and add a new post. Firebase is used for
                   storing the data. Styling is done using Material UI. This app
                   mainly focus on user authentication using Redux Toolkit.
                 </Typography>
               </CardContent>
               <CardActions>
                 <Button size="small">View Project</Button>
                 <Button size="small">View Source Code</Button>
               </CardActions>
             </Card>
           </Paper>
         </Grid>
       </Grid>
     </Box>
   </Fragment>
 );
}

export default Projects;