import React from 'react';
import Layout from '../components/Layout';
import courses from '../../data/courses';
import { styled } from '@mui/system';

const Link = styled('a')({
  color: (theme) => theme.palette.primary.main, // Customize the link color based on your theme
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const BlockchainLearningPage= () => {
  const courseId = 3;
  const course = courses.find((c) => c.id === courseId)
  return (
    <Layout>
      <div>
        <img src={course.image} alt={course.imageText} style={{ width: '100%', height: 'auto' }} />
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <h2>Introduction to Blockchain</h2>
        <p>
          Blockchain is a distributed ledger technology that enables secure, transparent, and
          tamper-resistant record-keeping. It has revolutionized various industries by introducing
          decentralized and trustless systems.
        </p>

        <h2>Key Concepts</h2>
        <ul>
          <li>Understanding Cryptocurrencies (e.g., Bitcoin, Ethereum)</li>
          <li>Exploring Smart Contracts and Decentralized Applications (DApps)</li>
          <li>Blockchain Consensus Mechanisms</li>
          <li>Use Cases of Blockchain in Different Industries</li>
          <li>Challenges and Future Trends in Blockchain Technology</li>
        </ul>

        <h2>Exploration Resources</h2>
        <p>
          Explore Blockchain further with the following resources:
        </p>
        <ul>
          <li><Link href="#" style={{ color: 'inherit' }}>Introduction to Cryptocurrencies</Link></li>
          <li><Link href="#" style={{ color: 'inherit' }}>Smart Contracts and Decentralized Applications</Link></li>
          <li><Link href="#" style={{ color: 'inherit' }}>Blockchain in Finance and Beyond</Link></li>
          <li><Link href="#" style={{ color: 'inherit' }}>Blockchain Governance and Security</Link></li>
          <li><Link href="#" style={{ color: 'inherit' }}>Future of Blockchain Technology</Link></li>
        </ul>
          </div>
    </Layout>
  );
};

export default BlockchainLearningPage;
