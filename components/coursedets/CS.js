import React from "react";
import courses from "../../data/courses";
import { Link, Container, Sidebar, SidebarList, SidebarListItem, MainContent, NotesSection, ImageContainer, Image } from '../../styles/sharedStyleLA';

const CS = () => {
  const courseId = 4;
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
            CyberSecurity Concepts
          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link href="#" style={{ color: "inherit" }}>
Threats          </Link>
        </SidebarListItem>
        <SidebarListItem>
          <Link href="#" style={{ color: "inherit" }}>
Measures          </Link>
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
            {/* <ImageContainer>
              <Image
               src={course.image}
               alt={course.imageText.replace(/'/g, "&apos;")}
             />
           </ImageContainer> */}
 
           {/* Sections */}
           <Section title="Introduction to CyberSecurity">
           <p>
          Cybersecurity is the practice of protecting systems, networks, and programs from digital
          attacks. It encompasses a wide range of measures to ensure the confidentiality, integrity,
          and availability of information.
        </p>
           </Section>
 
           <Section title="Key Concepts">
           <ul>
          <li>Importance of Cybersecurity in Today's World</li>
          <li>Cyber Threat Landscape</li>
          <li>Common Cybersecurity Threats</li>
          <li>Security Measures and Best Practices</li>
          <li>Incident Response and Recovery</li>
        </ul>
           </Section>

           <Section title="Exploration Resources">
             <ul>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Understanding Cybersecurity Fundamentals                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Securing Digital Assets from Threats                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Implementing Effective Security Measures                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Responding to Cybersecurity Incidents                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Stay Informed: Cybersecurity News and Updates                 </Link>
               </li>
             </ul>
           </Section>
         
           {/* Notes Section */}
           <NotesSection>
             <h2>Extra</h2>
             
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

export default CS;
