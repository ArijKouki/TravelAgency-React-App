import {React,useState} from 'react'
import {AppBar,Toolbar,styled,Stack,Button,Typography,IconButton,Drawer,List,ListItemButton,Box,ListItem,Divider} from '@mui/material'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom';


function Navbar() {

    const StyledButton=styled(Button)(
        ({theme})=>(
          {
            [theme.breakpoints.down("sm")]:{
              display:"none"
            }
          }
        )
      )

      const StyledIconButton=styled(IconButton)(
        ({theme})=>(
          {
            [theme.breakpoints.up("sm")]:{
              display:"none"
            }
          }
        )
      )
   const [open, setOpen] = useState(false)
  return (
    <AppBar position="static" >
        <Toolbar>
        <Link to="/" style={{textDecoration:"none",color:"white"}}>
            <Stack direction="row" flex={2} m={2}
            // backgroundColor="green"
            >
                <ConnectingAirportsIcon/>
                <Typography>Travel</Typography>
            </Stack>
            </Link>

          <Stack direction="row" flex={1} spacing={2} justifyContent="flex-end"
        //   backgroundColor="yellow"
          >
            <StyledButton variant="contained" href="/">Home</StyledButton>
            <StyledButton variant="contained" href="/services">Services</StyledButton>
            <StyledButton variant="contained"  href="/products">Products</StyledButton>
            <StyledButton variant="contained" href="/signup"
            sx={{backgroundColor:"white",width:{lg:"10%",md:"20%"}, color:"black",'&:hover': {backgroundColor: 'white',}}}>
            Sign up</StyledButton>
            <StyledIconButton color="secondary" onClick={(e)=>setOpen(!open)}>
                {open?<CloseIcon/>:<MenuIcon/>}
            </StyledIconButton>
            <Drawer
            PaperProps={{
                sx: { width: "80%",
                backgroundColor:"black" ,color:"white"
            }
              }}
            
            // anchor={anchor}
            open={open}
            onClose={(e)=>setOpen(!open)}
          >
            {/* <Box display="flex" direction="column" justifyContent="center" alignItems="center"> */}
            <List>
                <ListItem style={{display:'flex', justifyContent:'flex-end'}}>
                  <ListItemButton href="/">Home</ListItemButton>
                </ListItem>
             <Divider sx={{ bgcolor: (theme) => theme.palette.secondary.main,borderBottomWidth: "5px" }} variant="middle"/>
                <ListItem>
                  <ListItemButton href="/services">Services</ListItemButton>
                </ListItem>
            <Divider variant="middle" sx={{ bgcolor: (theme) => theme.palette.secondary.main,borderBottomWidth: "5px" }}/>
                <ListItem>
                  <ListItemButton href="/products">Products</ListItemButton>
                </ListItem>
            <Divider variant="middle" sx={{ bgcolor: (theme) => theme.palette.secondary.main,borderBottomWidth: "5px" }}/>
                <ListItem sx={{borderWidth:"5px",borderColor:"white"}}>
                  <ListItemButton href="/signup">Sign up</ListItemButton>
                </ListItem>
            </List>
            {/* </Box> */}
          </Drawer>
          </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar