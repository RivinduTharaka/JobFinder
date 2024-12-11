import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation for routing
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navColor, setNavColor] = useState('white'); // Default color for navigation links
  const navigate = useNavigate(); // Initialize useNavigate for routing
  const location = useLocation(); // Get current route location

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg')); // lg = 1024px

  // Handle route change to set navbar color for AllJobs component
  useEffect(() => {
    if (location.pathname === '/alljobs' || 
      location.pathname.startsWith('/apply/') || 
      location.pathname.startsWith('/jobs') || 
      location.pathname.startsWith('/company-jobs/')) {
    setNavColor('black');  // Make navbar black
  } else {
    setNavColor('white');  // Revert to white for other routes
  }
}, [location.pathname]); 
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background
        backdropFilter: 'blur(3px)', // Blur effect
        boxShadow: 'none', // Remove box shadow
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Company Logo */}
        <Typography
          variant="h5"
          onClick={() => navigate('/')} // Navigate to home page when logo is clicked
          sx={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: navColor, // Dynamic text color for logo
            cursor: 'pointer', // Change cursor to indicate clickability
          }}
        >
          JobHub
        </Typography>

        {isMobile ? (
          // Toggle Button for Mobile View
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{
              color: navColor, // Match the icon color with the text color dynamically
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          // Desktop View Navigation Links
          <Box display="flex" alignItems="center">
            {['Home', 'Jobs', 'Contact us'].map((item) => (
              <Button
                key={item}
                endIcon={item === 'Jobs' ? <ArrowDropDownIcon /> : null}
                onClick={() =>
                  navigate(item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`)
                } // Handle routing
                sx={{
                  color: navColor, // Dynamic text color for navigation links
                  textTransform: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  marginRight: '20px',
                  '&:hover': {
                    color: navColor === 'white' ? '#89C2D9' : '#555', // Adjust hover color based on state
                  },
                }}
              >
                {item}
              </Button>
            ))}
            {/* Right Section Buttons */}
            <Button
              variant="outlined"
              sx={{
                borderColor: navColor,
                color: navColor,
                textTransform: 'none',
                fontWeight: '600',
                marginRight: '10px',
                borderRadius: '10px',
                padding: isMobile ? '4px 12px' : '6px 20px',
                fontSize: isMobile ? '0.8rem' : '1rem',
                '&:hover': {
                  borderColor: navColor === 'white' ? '#89C2D9' : '#888',
                  backgroundColor: 'transparent',
                },
              }}
            >
              RECRUITERS LOGIN
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: navColor,
                color: navColor,
                textTransform: 'none',
                fontWeight: '600',
                borderRadius: '10px',
                padding: isMobile ? '4px 12px' : '6px 20px',
                fontSize: isMobile ? '0.8rem' : '1rem',
                '&:hover': {
                  borderColor: navColor === 'white' ? '#2A6F97' : '#555',
                  backgroundColor: 'transparent',
                },
              }}
            >
              JOB SEEKERS LOGIN
            </Button>
          </Box>
        )}

        {/* Dropdown Menu for 'Jobs' */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#013A63', // Menu background color
              color: '#A9D6E5', // Text color
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        </Menu>
      </Toolbar>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'black', // Drawer background color
            color: 'rgb(255,255,255)', // Text color
            width: '250px',
          },
        }}
      >
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Home', 'Jobs', 'Contact us'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() =>
                    navigate(
                      text === 'Home' ? '/' : `/${text.toLowerCase().replace(/\s+/g, '-')}`
                    )
                  }
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      style: { color: navColor, fontWeight: '500' },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 2,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: navColor,
                color: navColor,
                textTransform: 'none',
                fontWeight: '600',
                borderRadius: '10px',
                marginBottom: 2,
                padding: '6px 20px',
                fontSize: '1rem',
                '&:hover': {
                  borderColor: navColor === 'white' ? '#89C2D9' : '#888',
                  backgroundColor: 'transparent',
                },
              }}
            >
              RECRUITERS LOGIN
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: navColor,
                color: navColor,
                textTransform: 'none',
                fontWeight: '600',
                borderRadius: '10px',
                padding: '6px 20px',
                fontSize: '1rem',
                '&:hover': {
                  borderColor: navColor === 'white' ? '#2A6F97' : '#555',
                  backgroundColor: 'transparent',
                },
              }}
            >
              JOB SEEKERS LOGIN
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
