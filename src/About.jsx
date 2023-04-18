import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

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
        spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 8 }}
        sx={{paddingTop: "40px", height: "90%"}}
      >
       
          
        
         
        </Grid>
      </Box>
  )
}
