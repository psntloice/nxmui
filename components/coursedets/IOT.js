import React from "react";
import courses from "../../data/courses";
import { Link, Container, Sidebar, SidebarList, SidebarListItem, MainContent, NotesSection, ImageContainer, Image } from '../../styles/sharedStyleLA';

const IOT = () => {
  const courseId = 5;
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
                  IOT
                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
Trends                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
Future                </Link>
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
           <Section title="Introduction to  IOT">
           <p>
          The Internet of Things (IoT) refers to the network of interconnected devices that communicate
          and share data. It has become a transformative force, influencing various aspects of our lives
          and industries.
        </p>
           </Section>
 
           <Section title="Key Concepts">
           <ul>
          <li>Overview of IoT Architecture</li>
          <li>Smart Devices and Sensors</li>
          <li>Data Connectivity and Communication Protocols</li>
          <li>IoT Security and Privacy</li>
          <li>Applications of IoT in Different Industries</li>
        </ul>
           </Section>
 
           <Section title="Exploration Resources">
             <ul>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Understanding IoT Architecture                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Exploring Smart Devices and Sensors                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Communication Protocols for IoT                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Ensuring Security in IoT Systems                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Industry-Specific Applications of IoT                 </Link>
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
  );
};

const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);


export default IoTLearningPage;
