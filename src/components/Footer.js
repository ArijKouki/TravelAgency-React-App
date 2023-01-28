import React from 'react'
import{Box,styled,Typography,TextField,Stack,Button,InputBase} from '@mui/material'

function Footer() {
    const StyledBox=styled(Box)(
        ({theme})=>(
          {
            backgroundColor:theme.palette.primary.main,
            color:theme.palette.secondary.main,
            padding:"10px",
            // height:"60vh",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
            // [theme.breakpoints.down("sm")]:{
            //   display:"none"
            // }
          }
        )
      )

      const Email=styled("div")(
        ({theme})=>(
          {
            backgroundColor:theme.palette.secondary.main,
            width:"150px",
            padding:"0 10px",
            borderRadius:theme.shape.borderRadius
          }
        )
        
      )
  return (
    <StyledBox>
        <Stack spacing={2} sx={{alignItems:{xs:"center"}}}>
            <Typography variant="h5" align="center">
            Join the Adventure newsletter to receive our best vacation deals
            </Typography>
            <Typography variant="h6">
            You can unsubscribe at any time.
            </Typography>
            {/* <TextField label="Your email"  sx={{ color: 'yellow' }} focused/> */}
            <Email><InputBase placeholder='Your email'/></Email>
            <Button variant="outlined" color="secondary">Subscribe</Button>
        </Stack>

        <Box display="flex" direction="row"  gap="20px" flexWrap="wrap" justifyContent="center">

        <Stack direction="row" spacing={3}>
            <Stack p={2}>
                <h3>About us</h3> <br/>
                <ul style={{listStyle: "none"}}>
                    <li>How it works</li>
                    <li>Testimonials</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Terms of service</li>
                </ul>
            </Stack>
            <Stack p={2}>
                <h3>Contact us</h3><br/>
                <ul style={{listStyle: "none"}}>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Destinations</li>
                    <li>Sponsorships</li>
                </ul>
            </Stack>
        </Stack>

        <Stack direction="row"  spacing={3}>
            <Stack p={2}>
                <h3>Videos</h3><br/>
                <ul style={{listStyle: "none"}}>
                    <li>Submit videos</li>
                    <li>Ambassadors</li>
                    <li>Agency</li>
                    <li>Influencer</li>
                </ul>
            </Stack>
            <Stack p={2}>
                <h3>Social media</h3><br/>
                <ul style={{listStyle: "none"}}>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                </ul>
            </Stack>
        </Stack>

        </Box>
    </StyledBox>
  )
}

export default Footer