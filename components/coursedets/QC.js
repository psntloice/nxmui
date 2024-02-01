import React from "react";
import courses from "../../data/courses";
import { Link, Container, Sidebar, SidebarList, SidebarListItem, MainContent, NotesSection, ImageContainer, Image } from '../../styles/sharedStyleLA';

const QC = () => {
  const courseId = 1;
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
           <Section title="Introduction to Quantum Computing">
             <p>
             Quantum computing is a revolutionary approach to computation that leverages the principles of
          quantum mechanics. It introduces the concept of quantum bits or qubits, which can exist in
          multiple states simultaneously.
             </p>
           </Section>
 
           <Section title="Key Concepts">
           <ul>
          <li>Understanding Quantum Bits (Qubits)</li>
          <li>Exploring Superposition and Entanglement</li>
          <li>Quantum Gates and Circuits</li>
          <li>Quantum Algorithms and Applications</li>
          <li>Challenges and Future of Quantum Computing</li>
        </ul>
           </Section>
       
           <Section title="Exploration Resources">
             <ul>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Introduction to Quantum Bits (Qubits)                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Superposition and Entanglement Explained                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Building Quantum Circuits with Quantum Gates                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Exploring Quantum Algorithms                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Challenges and Future Directions in Quantum Computing                 </Link>
               </li>
             </ul>
           </Section>
       
              {/* Notes Section */}
           <NotesSection>
             <h2>Extra</h2>
                 <Link href="#" style={{ color: "inherit" }}>
                 Take Tests                 </Link>
           </NotesSection>
         </MainContent>
       </Container>
 
    </>
  );
};

const Section = ({ title, children }) => (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );

export default QC;
