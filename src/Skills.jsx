import { Box, Container, Typography } from '@mui/material'
import { SliderCarousel } from './SliderCarousel'

const front = ["html", "css", "sass", "bootstrap","js", "ts", "react", "redux"]
const back = ["express", "node", "nest", "mongodb", "sql"]

export const Skills = () => {
  return (
    <Container component={"section"} maxWidth="xl" sx={{ height: "100vh" }} >
        <Box display={"flex"} justifyContent={"center"} sx={{paddingTop: "20px"}} id="skills">
          <Typography variant="h3">
            Skills
          </Typography>
        </Box>
      
        <Box sx={{ height: "40%" }}>
          <Box display={"flex"} justifyContent={"center"} sx={{padding: "20px 40px"}} id="skills">
              <Typography variant="h3">
                Front-end
              </Typography>
          </Box>

          <SliderCarousel skillArray={front}/>
            
        </Box>
      
        <Box sx={{ height: "40%", paddingTop: "20px"}}>
          <Box display={"flex"} justifyContent={"center"} sx={{padding: "20px 40px"}} id="skills">
          <Typography variant="h3">
            Back-end
          </Typography>
          </Box>

          <SliderCarousel  skillArray={back}/>
            
        </Box>
      </Container>
  )
}
