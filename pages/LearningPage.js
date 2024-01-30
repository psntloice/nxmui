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
import courses from "../data/courses";


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
          {courses.map((course, index) => (
            <React.Fragment key={course.id}>
              <Paper elevation={0} style={{ padding: 16, marginBottom: 16 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <img
                      src={course.image}
                      alt={course.imageText}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h4" component="div" gutterBottom>
                      {course.title}
                    </Typography>
                    <Typography variant="body1" component="div">
                      {course.description}
                    </Typography>
                    {/* <Link href={`/course/${course.id}`} passHref> */}
                    <Link href={course.linkText.path} passHref>
                                            <Button variant="outlined" color="primary" size="small">
                                            {course.linkText.text}   
                                                               </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
              {index < courses.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Paper>
      </Container>
    </Layout>
  );
}

export default LearningPage;
