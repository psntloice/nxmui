// pages/learning.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Layout from './components/Layout.js';

const LearningPage = () => {
  return (
    <Layout>
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Learning Page
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h4" component="div" gutterBottom>
              Lesson 1
            </Typography>
            <Typography variant="body1" component="div">
              This is the content of lesson 1.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h4" component="div" gutterBottom>
              Lesson 2
            </Typography>
            <Typography variant="body1" component="div">
              This is the content of lesson 2.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </Layout>
  );
};

export default LearningPage;
