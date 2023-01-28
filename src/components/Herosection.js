import React from 'react'
import {Box,Typography,Button,Stack} from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import video from './video-1.mp4'

function Herosection() {
  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    // width="100%"
    // height="660px"
    height="93vh"
    gap="3%"
    // backgroundColor="yellow"
    >
        {/* <video src="video-1.mp4" autoPlay loop muted/> */}
        <video 
        style={{position: "absolute",
        width: "100%",
        height: "100%",objectFit: "cover",zIndex: "-1"}}
         autoPlay loop muted>
           <source src={video} type='video/mp4' />
        </video>
          
        <Stack alignItems="center">
          <Typography variant="h2" align="center" color="secondary">ADVENTURE AWAITS</Typography>
          <Typography variant="h4" align="center" color="secondary">What are you waiting for?</Typography>
        </Stack>

        <Stack direction={{xs:"column",md:"row"}} spacing={2}>
            <Button variant="outlined" color="secondary">GET STARTED</Button>
            <Button variant="contained" color="secondary">WATCH TRAILER <PlayCircleOutlineIcon/></Button>
        </Stack>

    </Box>
  )
}

export default Herosection