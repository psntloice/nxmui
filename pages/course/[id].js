// pages/course/[id].js
import React from 'react';
// import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import courses from '../../data/courses';

const CoursePage = ({ course }) => {
//   const router = useRouter();
//   const { id } = router.query;


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
    const paths = courses.map((course) => ({
      params: { id: course.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const courseId = parseInt(params.id, 10);
    const course = courses.find((c) => c.id === courseId);
  
    return {
      props: { course },
    };
  }
  
export default CoursePage;
