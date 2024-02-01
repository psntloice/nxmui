import React from 'react';
import courses from "../../data/courses";
import { Link, Container, Sidebar, SidebarList, SidebarListItem, MainContent, NotesSection, ImageContainer, Image } from '../../styles/sharedStyleLA';

const AI = () => {
  const courseId = 2;
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
                Introduction to Machine Learning                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                Deep Dive into Neural Networks                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                AI in Healthcare: Transforming the Industry                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                Applications of AI in Finance                </Link>
              </SidebarListItem>
              <SidebarListItem>
                <Link href="#" style={{ color: "inherit" }}>
                Case Studies: AI Success Stories                </Link>
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
           <Section title="Introduction to AI">
           <p>
          Artificial Intelligence (AI) is a rapidly evolving field that aims to create intelligent machines 
          capable of performing tasks that typically require human intelligence. It encompasses various subfields,
          including machine learning, natural language processing, and computer vision.
        </p>
           </Section>

<Section title="Key Concepts">
<ul>
          <li>Machine Learning Fundamentals</li>
          <li>Neural Networks and Deep Learning</li>
          <li>AI in Healthcare</li>
          <li>AI in Finance</li>
          <li>Real-world Applications and Case Studies</li>
        </ul>
           </Section>

      
             {/* Notes Section */}
           <NotesSection>
             <h2>Extra</h2>
             <p>
          Dive into the world of AI with the following resources:
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

export default AI;
