// pages/learning.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Layout from './components/Layout.js';

function LearningPage() {
    const lessons = [
        {
          id: 1,
          title: 'Unraveling Quantum Computing',
          description:
            'Dive into the fascinating world of quantum computing. Explore quantum bits, superposition, and the promise of solving complex problems.',
          image: 'https://source.unsplash.com/random?quantum',
          imageText: 'Quantum Computing illustration',
          linkText: 'Explore Quantum Computing',
        },
    ];

  return (
    <Layout>
    <Container>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
       <Link href="/" passHref>
          <Button component="a" variant="outlined" color="primary" size="small" style={{ marginBottom: '10px' }}>
            Home
          </Button>
        </Link>
      </Toolbar>

      <Typography variant="h1" component="h1" gutterBottom>
        Learning Page
      </Typography>
      <List>
          {lessons.map((lesson, index) => (
              <React.Fragment key={lesson.id}>
                <ListItem disablePadding>
                  <ListItemText primary={lesson.title} secondary={lesson.content} />
                </ListItem>
                {index < lessons.length - 1 && <Divider />}
              </React.Fragment>
            ))}
                      </List>

      <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Lesson ID</TableCell>
                <TableCell>Lesson Title</TableCell>
                <TableCell>Lesson Content</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lessons.map((lesson) => (
                <TableRow key={lesson.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{lesson.id}</TableCell>
                  <TableCell>{lesson.title}</TableCell>
                  <TableCell>{lesson.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
