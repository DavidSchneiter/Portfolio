import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';

export const About = () => {
  return (
      <Box sx={{ height: "100vh", backgroundColor: "#192c45"}} >
        <Box display={"flex"} justifyContent={"center"} height={"10%"} sx={{paddingTop: "20px"}} id="about">
          <Typography  variant="h2">
            Sobre Mí
          </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 4 }} columns={{ xs: 4, sm: 4, md: 12 }}
        sx={{paddingTop: "40px", height: "90%"}}
      >
        <Grid item xs={4} sm={4} md={6} display="flex" justifyContent="center" alignItems="center">
          <Card sx={{ maxWidth: 345, border: "5px solid #4D98B8" }}>
            <CardMedia
              component="img"
              height="360"
              src={"react-banner.jpg"}
              />
          </Card>
          
        </Grid>
              <Grid item xs={4} sm={4} md={6} display="flex" flexDirection={"column"} justifyContent="center" alignItems="center" padding={"10px 20px"}>
                  <Box padding={"60px 20px"}>
                      <Typography variant="h4">
                          Soy estudiante de Ing. en Sistemas de Información y desarrollador Web.
                      </Typography>
                      <Typography variant="h4">
                          Empece estudiando Front-end con el framework de React de manera autodidacta en Udemy y pase al Back-end con Node.js en CoderHouse
                      </Typography>
                  </Box>
            <Box width={"100%"} display="flex" justifyContent="space-evenly">
                <CardActionArea sx={{width: "auto", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"20px"}} href={"https://github.com/DavidSchneiter"} target="#">
                    <GitHubIcon fontSize='large'/>
                </CardActionArea>
                    <CardActionArea sx={{width: "auto", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"20px"}} href={"https://www.linkedin.com/in/david-schneiter"} target="#">
                        <LinkedInIcon fontSize='large'/>
                </CardActionArea>
                    <CardActionArea sx={{width: "auto", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"20px"}} href={"/CV-SchneiterDavid.pdf"} target="#">
                        <FileDownloadIcon fontSize='large'/>
                </CardActionArea>
                    <CardActionArea sx={{width: "auto", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"20px"}} href={"mailto: david.schneiter28@gmail.com"} target="#">
                        <EmailIcon fontSize='large'/>
                </CardActionArea>
            </Box>
          
        </Grid>
        
         
        </Grid>

      </Box>
  )
}
