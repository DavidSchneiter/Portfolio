import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { GitHub } from '@mui/icons-material';

export const ActionAreaCard = ({route, name, link, info, technologies, github}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={link} target="#">
        <CardMedia
          component="img"
          height="160"
          src={route}
          alt={name}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tecnologias: {technologies}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={github} target="#" size="small" color="primary">
          GitHub
        </Button>
      </CardActions>
    </Card>
  )
}
