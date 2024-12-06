import React from 'react';
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg')); // lg = 1024px

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
      position="static"
      sx={{
        background: 'linear-gradient(to right, #012A4A, #013A63, #01497C)', // Updated with palette
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Company Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#A9D6E5', // From palette
          }}
        >
          Job 124 Job
        </Typography>

        {isMobile ? (
          // Toggle Button for Mobile View
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{
              color: '#A9D6E5', // From palette
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          // Desktop View Navigation Links
          <Box display="flex" alignItems="center">
            {['Home', 'Jobs', 'Explore', 'Contact us', 'Store'].map((item) => (
              <Button
                key={item}
                endIcon={item === 'Jobs' || item === 'Explore' || item === 'Store' ? <ArrowDropDownIcon /> : null}
                onClick={item === 'Jobs' ? handleMenuOpen : null}
                sx={{
                  color: '#A9D6E5', // From palette
                  textTransform: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  marginRight: '20px',
                  '&:hover': {
                    color: '#89C2D9', // From palette
                  },
                }}
              >
                {item}
              </Button>
            ))}

            {/* Right Section Buttons */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#014F86', // From palette
                color: '#ffffff',
                textTransform: 'none',
                fontWeight: '600',
                marginRight: '10px',
                borderRadius: '10px',
                padding: isMobile ? '4px 12px' : '6px 20px',
                fontSize: isMobile ? '0.8rem' : '1rem',
                '&:hover': { backgroundColor: '#2A6F97' }, // From palette
              }}
            >
              RECRUITERS LOGIN
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#61A5C2', // From palette
                color: '#012A4A', // From palette
                textTransform: 'none',
                fontWeight: '600',
                borderRadius: '10px',
                padding: isMobile ? '4px 12px' : '6px 20px',
                fontSize: isMobile ? '0.8rem' : '1rem',
                '&:hover': { backgroundColor: '#89C2D9' }, // From palette
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
              backgroundColor: '#013A63', // From palette
              color: '#A9D6E5', // From palette
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
            backgroundColor: '#01497C', // From palette
            color: '#A9D6E5', // From palette
            width: '250px',
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Home', 'Jobs', 'Explore', 'Contact us', 'Store'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      style: { color: '#A9D6E5', fontWeight: '500' },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#014F86', // From palette
                color: '#ffffff',
                textTransform: 'none',
                fontWeight: '500',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '0.8rem',
                marginBottom: '10px',
                '&:hover': { backgroundColor: '#2A6F97' }, // From palette
              }}
            >
              RECRUITERS LOGIN
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#61A5C2', // From palette
                color: '#012A4A', // From palette
                textTransform: 'none',
                fontWeight: '500',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '0.8rem',
                '&:hover': { backgroundColor: '#89C2D9' }, // From palette
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
