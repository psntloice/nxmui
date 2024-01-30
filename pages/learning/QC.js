import React from 'react';
import Layout from '../components/Layout';
import courses from '../../data/courses';

const QuantumComputingLearningPage = () => {
  const courseId = 1;
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
          Quantum computing is a revolutionary approach to computation that leverages the principles of
          quantum mechanics. It introduces the concept of quantum bits or qubits, which can exist in
          multiple states simultaneously.
        </p>

        <h2>Key Topics</h2>
        <ul>
          <li>Understanding Quantum Bits (Qubits)</li>
          <li>Exploring Superposition and Entanglement</li>
          <li>Quantum Gates and Circuits</li>
          <li>Quantum Algorithms and Applications</li>
          <li>Challenges and Future of Quantum Computing</li>
        </ul>

        <h2>Learning Resources</h2>
        <p>
          Delve deeper into Quantum Computing with the following resources:
        </p>
        <ul>
          <li><a href="#">Introduction to Quantum Bits (Qubits)</a></li>
          <li><a href="#">Superposition and Entanglement Explained</a></li>
          <li><a href="#">Building Quantum Circuits with Quantum Gates</a></li>
          <li><a href="#">Exploring Quantum Algorithms</a></li>
          <li><a href="#">Challenges and Future Directions in Quantum Computing</a></li>
        </ul>
              </div>
    </Layout>
  );
};

export default QuantumComputingLearningPage;
