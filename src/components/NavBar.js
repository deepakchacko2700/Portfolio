import * as React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {Link} from 'react-scroll'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Skills', 'Projects','Contact'];


export default function NavBar() {
    const [open, setOpen] = React.useState(false);
    const handleDrawerToggle = () => {
            setOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color:'#5f82ba' }}>
          {/* // <Typography variant="h6" sx={{ my: 2 }}>
          //   MUI
          // </Typography>
          // <Divider /> */}
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <Link
                    to= {item} 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                  >
                    <ListItemText primary={item} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

      return (
        <Box sx={{display:'flex' }}>
            <CssBaseline />
            <AppBar component="nav" 
                sx={{
                    backgroundColor:'#ffffff',
                    boxShadow:0,
                    color:'#5f82ba',
                }}
            >
                <Toolbar 
                  sx={{
                    minHeight: {xs:40, md:56}
                  }}
                >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                {/* <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    MUI
                </Typography> */}
                <Box sx={{ display: { xs: 'none', md: 'block' }, ml:'auto' }}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#5f82ba', mr:2, fontWeight:500 }}>
                        <Link
                          to= {item} 
                          spy={true} 
                          smooth={true} 
                          duration={500}
                        >
                            {item}
                        </Link> 
                    </Button>
                    ))}
                </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                // container={container}
                variant="temporary"
                open={open}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' }, 
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
            </nav>
        </Box>
      )
}