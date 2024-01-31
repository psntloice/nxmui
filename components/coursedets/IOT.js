import React from 'react';
import Layout from '../../components/Layout';
import courses from '../../data/courses';

const IoTLearningPage = () => {
  const courseId = 5;
  const course = courses.find((c) => c.id === courseId)
  return (
    <Layout>
      <div>
        {/* <img src={course.image} alt={course.imageText} style={{ width: '100%', height: 'auto' }} /> */}
        <img src={course.image} alt={course.imageText.replace(/'/g, '&apos;')} style={{ width: '100%', height: 'auto' }} />
<h1>{course.title}</h1>
        <p>{course.description}</p>
        <h2>Introduction</h2>
        <p>
          The Internet of Things (IoT) refers to the network of interconnected devices that communicate
          and share data. It has become a transformative force, influencing various aspects of our lives
          and industries.
        </p>

        <h2>Key Topics</h2>
        <ul>
          <li>Overview of IoT Architecture</li>
          <li>Smart Devices and Sensors</li>
          <li>Data Connectivity and Communication Protocols</li>
          <li>IoT Security and Privacy</li>
          <li>Applications of IoT in Different Industries</li>
        </ul>

        <h2>Learning Resources</h2>
        <p>
          Explore the world of IoT with the following resources:
        </p>
        <ul>
          <li><a href="#">Understanding IoT Architecture</a></li>
          <li><a href="#">Exploring Smart Devices and Sensors</a></li>
          <li><a href="#">Communication Protocols for IoT</a></li>
          <li><a href="#">Ensuring Security in IoT Systems</a></li>
          <li><a href="#">Industry-Specific Applications of IoT</a></li>
        </ul>      </div>
    </Layout>
  );
};

export default IoTLearningPage;
