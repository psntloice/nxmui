// import React, { useState, useEffect } from "react";
import React from "react";
import courses from "../../data/courses";
import { Link, Container, Sidebar, SidebarList, SidebarListItem, MainContent, NotesSection, ImageContainer, Image } from '../../styles/sharedStyleLA';

const BC = () => {
  // const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const threshold = 100; // Adjust this threshold as needed

  //     setIsFixed(scrollY > threshold);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

      const courseId = 3;
  const course = courses.find((c) => c.id === courseId); 

  return (
    <>
          <Container>
         {/* Sidebar */}
          <Sidebar>
            <h3>Contents</h3>
 
          <SidebarList>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                  Introduction
                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                  Blockchain Technology
                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                  Cryptocurrencies
                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                  Smart Contracts
                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                  Transforming Industries
                </Link>
              </SidebarListItem>
            </SidebarList>
  </Sidebar>
 
          {/* Main Content Area */}
          <MainContent>
            {/* Course Title and Image */}
            <ImageContainer>
              <Image
               src={course.image}
               alt={course.imageText.replace(/'/g, "&apos;")}
             />
           </ImageContainer>
 
           {/* Sections */}
           <Section title="Introduction to Blockchain">
             <p>
               Blockchain is a distributed ledger technology that enables secure,
               transparent, and tamper-resistant record-keeping. It has
               revolutionized various industries by introducing decentralized and
               trustless systems.
             </p>
           </Section>
 
           <Section title="Key Concepts">
             <ul>
               <li>Understanding Cryptocurrencies (e.g., Bitcoin, Ethereum)</li>
               <li>
                 Exploring Smart Contracts and Decentralized Applications (DApps)
               </li>
               <li>Blockchain Consensus Mechanisms</li>
               <li>Use Cases of Blockchain in Different Industries</li>
               <li>Challenges and Future Trends in Blockchain Technology</li>
             </ul>
           </Section>
 
           <Section title="Exploration Resources">
             <ul>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                   Introduction to Cryptocurrencies
                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                   Smart Contracts and Decentralized Applications
                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                   Blockchain in Finance and Beyond
                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                   Blockchain Governance and Security
                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                   Future of Blockchain Technology
                 </Link>
               </li>
             </ul>
           </Section>
 
           {/* Notes Section */}
           <NotesSection>
             <h2>Extra</h2>
             <p>
               Blockchain is a decentralized technology spread across many
               computers that manage and record transactions. Learn more about
               the key concepts and applications in this section.
             </p>
           </NotesSection>
         </MainContent>
       </Container>
 
    </>
//          
  );
  
};

 const Section = ({ title, children }) => (
   <div>
     <h2>{title}</h2>
     {children}
   </div>
 );

export default BC;
