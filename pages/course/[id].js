// pages/course/[id].js
import React from 'react';
// import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import lessons from '../data/courses';

const CoursePage = ({ course }) => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Fetch the course details based on the id from your data source
//   // Replace this with your actual data fetching logic
//   const course = {
//     id: 2,
//     title: 'The Future of Artificial Intelligence',
//     description:
//       'Discover the latest advancements in artificial intelligence. Learn about machine learning, neural networks, and the impact on various industries.',
//     image: 'https://source.unsplash.com/random?ai',
//     imageText: 'Artificial Intelligence illustration',
//     linkText: 'Explore AI Future',
//   };

  if (!course) {
    return <div>Loading...</div>; // You can add proper loading state
  }

  return (
    <Layout>
      <div>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        {/* Add other course details here */}
      </div>
    </Layout>
  );
};
export async function getStaticPaths() {
    const paths = lessons.map((course) => ({
      params: { id: course.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const courseId = parseInt(params.id, 10);
    const course = lessons.find((c) => c.id === courseId);
  
    return {
      props: { course },
    };
  }
  
export default CoursePage;
