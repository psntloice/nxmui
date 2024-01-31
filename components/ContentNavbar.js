import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

const ContentNavbar = ({ children }) => {
  return (
    <>
    <AppBar position="fixed" style={{ height: '7vh', display: 'flex', alignItems: 'center' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home">
          <Link href="/" passHref>
            <ArrowBackIcon style={{ color: '#fff', fontSize: '2rem' }} />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
    {children}
    </>
  );
};

export default ContentNavbar;
