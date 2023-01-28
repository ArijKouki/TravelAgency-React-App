import React from 'react'
import {Card,CardActionArea,CardMedia,CardContent,Typography,} from '@mui/material'


function CardItem({image,imageAlt,title,path}) {
  return (
    <Card sx={{ width: "345px" }}>
      <CardActionArea href={path}>
        <CardMedia
          component="img"
          height="140px"
          image={image}
          alt={imageAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardItem