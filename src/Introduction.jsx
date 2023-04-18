import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export const Introduction = () => {
  return (
    <Container component={"section"} maxWidth="xl" sx={{ height: "100vh"}} >

      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{paddingTop: "40px", height: "90%"}}
      >
        <Grid item xs={4} sm={4} md={6} display="flex" justifyContent="center" alignItems="center">
          <Card sx={{ maxWidth: 345, border: "5px solid #4D98B8" }}>
            <CardMedia
              component="img"
              height="360"
              src={"portrait.jpg"}
              />
          </Card>
          
        </Grid>
        <Grid item xs={4} sm={4} md={6} display="flex" justifyContent="center" alignItems="center" padding={"10px 20px"}>
          <Box textAlign={'center'} >

          <Typography  variant="h2">
            Hola, soy <b style={{color: "aqua"}}>
             Schneiter David
            </b> 
          </Typography>
            <Typography  variant="h2">
                Desarrollador Web MERN Stack
            </Typography>
          </Box>
          
        </Grid>
        
         
        </Grid>
      </Container>
  )
}
