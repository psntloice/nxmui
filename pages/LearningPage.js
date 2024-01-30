// pages/learning.js
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Layout from "./components/Layout.js";

const lessons = [
  {
    id: 1,
    title: "Unraveling Quantum Computing",
    description:
      "Dive into the fascinating world of quantum computing. Explore quantum bits, superposition, and the promise of solving complex problems.",
    image: "https://source.unsplash.com/random?quantum",
    imageText: "Quantum Computing illustration",
    linkText: "Explore Quantum Computing",
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    description:
      "Discover the latest advancements in artificial intelligence. Learn about machine learning, neural networks, and the impact on various industries.",
    image: "https://source.unsplash.com/random?ai",
    imageText: "Artificial Intelligence illustration",
    linkText: "Explore AI Future",
  },
  {
    id: 3,
    title: "Blockchain Revolution",
    description:
      "Delve into the decentralized world of blockchain technology. Learn about cryptocurrencies, smart contracts, and the potential for transforming industries.",
    image: "https://source.unsplash.com/random?blockchain",
    imageText: "Blockchain Technology illustration",
    linkText: "Explore Blockchain Revolution",
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    description:
      "Enhance your understanding of cybersecurity essentials. Explore strategies to protect digital assets, prevent cyber threats, and secure online environments.",
    image: "https://source.unsplash.com/random?cybersecurity",
    imageText: "Cybersecurity illustration",
    linkText: "Explore Cybersecurity Essentials",
  },
  {
    id: 5,
    title: "Internet of Things (IoT)",
    description:
      "Uncover the interconnected world of IoT. Learn about smart devices, data connectivity, and the transformative impact of IoT on daily life and industries.",
    image: "https://source.unsplash.com/random?iot",
    imageText: "Internet of Things illustration",
    linkText: "Explore Internet of Things (IoT)",
  },
  {
    id: 6,
    title: "Augmented Reality (AR) Exploration",
    description:
      "Embark on an exciting journey into the realm of augmented reality. Discover AR applications, immersive experiences, and the future of interactive technology.",
    image: "https://source.unsplash.com/random?ar",
    imageText: "Augmented Reality illustration",
    linkText: "Explore Augmented Reality (AR)",
  },
];

function LearningPage() {
  return (
    <Layout>
      <Container>
        {/* <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}> */}
        <Toolbar>
          <Link href="/" passHref>
            <Button
              component="a"
              variant="outlined"
              color="primary"
              size="small"
              style={{ marginBottom: "10px" }}
            >
              Home
            </Button>
          </Link>
        </Toolbar>

        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{
            flex: 1,
            justifyContent: "flex-start",
            display: "flex",
            marginBottom: "8px",
          }}
        >
          Courses offered
        </Typography>

        <Paper
          component="form"
          elevation={0}
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, backgroundColor: "#333" }}
            placeholder="  Search courses"
            inputProps={{ "aria-label": "search courses" }}
          />
          <SearchIcon sx={{ p: 2, marginLeft: 2, fontSize: "4rem" }} />
        </Paper>

        <Paper elevation={0} style={{ padding: 16 }}>
          {lessons.map((lesson, index) => (
            <React.Fragment key={lesson.id}>
              <Paper elevation={0} style={{ padding: 16, marginBottom: 16 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <img
                      src={lesson.image}
                      alt={lesson.imageText}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h4" component="div" gutterBottom>
                      {lesson.title}
                    </Typography>
                    <Typography variant="body1" component="div">
                      {lesson.description}
                    </Typography>
                    <Link href={`/course/${lesson.id}`} passHref>
                      <Button variant="outlined" color="primary" size="small">
                        {lesson.linkText}
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
              {index < lessons.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Paper>
      </Container>
    </Layout>
  );
}

export default LearningPage;
