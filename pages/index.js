// import * as React from 'react';
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header.js';
import MainFeaturedPost from './MainFeaturedPost.js';
import FeaturedPost from './FeaturedPost.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

// const sections = [
//   { title: 'Technology', url: '#' },
//   // { title: 'Design', url: '#' },
//   // { title: 'Culture', url: '#' },
//   // { title: 'Business', url: '#' },
//   // { title: 'Politics', url: '#' },
//   // { title: 'Opinion', url: '#' },
//   // { title: 'Science', url: '#' },
//   // { title: 'Health', url: '#' },
//   // { title: 'Style', url: '#' },
//   // { title: 'Travel', url: '#' },
// ];

const mainFeaturedPost = {
  title: 'Discover Global University',
  description:
    'Explore the unique features and offerings of Global University. Learn about academic programs, campus life, and more.',
  image: 'https://source.unsplash.com/random?university',
  imageText: 'Global University campus image',
  linkText: 'Explore Global University',
};


const featuredPosts = [
  {
    title: 'Global University Events',
    date: 'February 5, 2024',
    description:
      'Stay updated on exciting events happening at Global University. From academic conferences to cultural celebrations, there is always something happening on campus.',
    image: 'https://source.unsplash.com/random?events',
    imageLabel: 'Global University Events',
  },
  {
    title: 'Innovation and Research Showcase',
    date: 'February 1, 2024',
    description:
      'Explore the groundbreaking research and innovation at Global University. Our faculty and students are at the forefront of discovery and technological advancements.',
    image: 'https://source.unsplash.com/random?research',
    imageLabel: 'Research at Global University',
  },
  {
    title: 'Student Life at Global University',
    date: 'January 25, 2024',
    description:
      'Get a glimpse into the vibrant student life at Global University. From clubs and organizations to sports and cultural activities, our campus is a hub of diverse experiences.',
    image: 'https://source.unsplash.com/random?studentlife',
    imageLabel: 'Student Life at Global University',
  },
  // Add more customized featured posts as needed
];

const sidebar = {
  title: 'About Global University',
  description:
    'Welcome to Global University! We strive for excellence in education and provide a diverse and enriching learning environment. Our commitment is to foster intellectual growth and prepare students for success in their chosen fields. Explore the world of opportunities at Global University.',
  archives: [
    { title: 'March 2020', url: '#' },
  
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'LinkedIn', icon: LinkedInIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};




// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function Index() {
  return (
<ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Key to Success" sections={sections} /> */}
        <Header title="Key to Success" sections="Learn with us" />

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
               <FeaturedPost key={post.title} post={post} /> 
            ))} 
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
  title="Contact Global University"
  description="Get in touch with us to learn more about Global University and its offerings. We're here to answer your questions."
/>

    </ThemeProvider>
  );
  
}

