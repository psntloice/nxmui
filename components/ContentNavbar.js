import React from 'react';
import { useRouter } from "next/router";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from 'next/link';

const ContentNavbar = ({ children }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  
  return (
    <>
    <AppBar position="fixed" style={{ height: '7vh', top: 0 , background: 'rgba(0, 0, 0, 0.87)'}}>
      <Toolbar style={{ height: '7vh', justifyContent: 'space-between', minHeight: '48px'  }}>
        <IconButton edge="start" color="inherit" aria-label="back" onClick={goBack}>
          <ArrowBackIcon style={{ color: '#fff', fontSize: '1.5rem' }} />
        </IconButton>
        <Link href="/" passHref>
          <IconButton color="inherit" aria-label="dashboard">
            <DashboardIcon style={{ color: '#fff', fontSize: '1.5rem' }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
    {children}
  </>
  );
};

export default ContentNavbar;
