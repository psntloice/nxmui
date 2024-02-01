import React from "react";
import courses from "../../data/courses";
import { Link, Container, Sidebar, SidebarList, SidebarListItem, MainContent, NotesSection, ImageContainer, Image } from '../../styles/sharedStyleLA';

const AR = () => {
  const courseId = 6;
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
                  AR Technology
                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                  Architecture
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
            {/* <ImageContainer>
              <Image
               src={course.image}
               alt={course.imageText.replace(/'/g, "&apos;")}
             />
           </ImageContainer> */}
 
           {/* Sections */}
           <Section title="Introduction to Augmented Reality">
           <p>
          Augmented Reality overlays digital content onto the real world, enhancing the user's
          perception and interaction with their environment. It opens up possibilities for creating
          immersive and interactive experiences.
        </p>
           </Section>

           <Section title="Key Concepts">
           <ul>
          <li>Understanding Augmented Reality vs. Virtual Reality</li>
          <li>AR Applications in Various Industries</li>
          <li>Marker-based vs. Markerless AR</li>
          <li>Creating Interactive AR Experiences</li>
          <li>Future Trends in Augmented Reality</li>
        </ul>
           </Section>
           <Section title="Exploration Resources">
             <ul>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Introduction to Augmented Reality Technology                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Real-world Applications of AR in Industries                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Building Marker-based AR Experiences                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Creating Interactive AR Content                 </Link>
               </li>
               <li>
                 <Link href="#" style={{ color: "inherit" }}>
                 Future Trends and Innovations in AR                 </Link>
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

export default AR;
