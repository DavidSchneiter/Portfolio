import { Container, Paper } from '@mui/material'
import React from 'react'


export const SkillsGrid = ({route}) => {
  return (
        <Paper style={{ width: "200px", height: "200px", display:"flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", padding: "0px"}}>
            <img
                width={"170px"}
                height={"170px"}
                src={route}
                loading="lazy"
            />
        </Paper>
  )
}
