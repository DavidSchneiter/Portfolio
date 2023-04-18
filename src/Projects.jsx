import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { ActionAreaCard } from './ActionAreaCard'

const projects = [{
    name: "Calculator App",
  route: "calculadora",
  link: "https://my-calculator-davidschneiter.vercel.app/",
  info: "Pagina web de una Calculadora con cambio de tema dark/light",
  technologies: "React, SASS",
  github: "https://github.com/DavidSchneiter/My-Calculator"
  },
  {
    name: "Todo App",
    route: "todo",
    link: "https://todo-app-nu-orpin.vercel.app/",
    info: "Pagina web de una lista de tareas con logeo y almacenamiento en firebase",
    technologies: "React, Redux, Firebase, SASS",
    github: "https://github.com/DavidSchneiter/Todo-App"
  },
  {
    name: "Pokedex App",
    route: "pokedex",
    link: "https://pokedex-nextjs-davidschneiter.vercel.app/",
    info: "Pagina web de una Pokedex con buscador con Next.js",
    technologies: "Next.js, NextUI, CSS",
    github: "https://github.com/DavidSchneiter/Pokedex-Nextjs"
  },
  {
    name: "Desafio",
    route: "desafio",
    link: "https://desafio-anonimo-davidschneiter.vercel.app/",
    info: "Pagina web de un desafio con React manejando informacion de un json",
    technologies: "React, SASS",
    github: "https://github.com/DavidSchneiter/Desafio-anonimo"
  },
  {
    name: "Desafio-Nest",
    route: "desafio-nest",
    link: "https://servidor-nest-production.up.railway.app/swagger",
    info: "API REST en Nest.js de productos con logeo y vistas en Handlebars",
    technologies: "Express, TypeScript, Mongo, Passport, Swagger, Handlebars, Bootstrap",
    github: "https://github.com/DavidSchneiter/Servidor-Nest"
  },
  {
    name: "Project-CoderHouse",
    route: "Project-CoderHouse",
    link: "https://proyectofinal-coderhouse-backend.up.railway.app/docs/",
    info: "Proyecto final de CoderHouse: API REST y vistas en Handlebars",
    technologies: "Express, Session, Mongo, Passport, Swagger, Handlebars, Bootstrap",
    github: "https://github.com/DavidSchneiter/ProyectoFinal-CoderHouse-Backend"
  },
]

export const Projects = () => {
  return (
    <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          backgroundColor: "#192c45"
        }}
      >
      <Box display={"flex"} justifyContent={"center"} height={"10%"} sx={{paddingTop: "20px"}} id="projects">
          <Typography variant="h3">
            Projects
          </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: "40px 0px" }}
        height={"90%"}
      >
        
        {
          projects.map((prj) => {
            return (
              <Grid item xs={4} sm={4} md={4} key={prj.name} display="flex" justifyContent="center" alignItems="center" paddingBottom="20px">
                <ActionAreaCard route={`projects/${prj.route}.png`} name={prj.name} link={prj.link} info={prj.info} technologies={prj.technologies} github={prj.github}/>
              </Grid>
            )
          })
        }
        </Grid>
      </Box>
  )
}
