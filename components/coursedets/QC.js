import React, { useState } from "react";
import courses from "../../data/courses";
import { Link, Container, Sidebar, SidebarList, SidebarListItem, MainContent, NotesSection, ImageContainer, Image } from '../../styles/sharedStyleLA';
import Dialog from "@mui/material/Dialog";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const QC = () => {
  const courseId = 1;
  const course = courses.find((c) => c.id === courseId); 

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    {
      question: "What is a qubit in quantum computing?",
      options: [
        { id: "A", text: "A classical bit that can exist in two states (0 or 1) simultaneously." },
        { id: "B", text: "A unit of classical information used in quantum circuits." },
        { id: "C", text: "A quantum bit that can exist in multiple states simultaneously." },
        { id: "D", text: "A unit of information in classical computers." },
      ],
      correctAnswer: "C",
    },
    {
      question: "What is superposition in quantum mechanics?",
      options: [
        { id: "A", text: "A state where a qubit can exist in multiple states at the same time." },
        { id: "B", text: "A classical computing concept." },
        { id: "C", text: "The principle of uncertainty." },
        { id: "D", text: "A state where a qubit is fixed in a single state." },
      ],
      correctAnswer: "A",
    },
    {
      question: "What is entanglement in quantum computing?",
      options: [
        { id: "A", text: "A classical computing principle." },
        { id: "B", text: "A state where qubits are not connected." },
        { id: "C", text: "A state where qubits are correlated and share information." },
        { id: "D", text: "A state where qubits are in isolation." },
      ],
      correctAnswer: "C",
    },
    {
      question: "What are quantum gates used for?",
      options: [
        { id: "A", text: "To control classical bits." },
        { id: "B", text: "To control quantum bits (qubits)." },
        { id: "C", text: "To measure quantum bits." },
        { id: "D", text: "To perform classical computations." },
      ],
      correctAnswer: "B",
    },
    {
      question: "What are the challenges in quantum computing?",
      options: [
        { id: "A", text: "Limited qubit stability." },
        { id: "B", text: "Inability to perform complex calculations." },
        { id: "C", text: "Lack of interest in the scientific community." },
        { id: "D", text: "Compatibility with classical computers." },
      ],
      correctAnswer: "A",
    },
  ];

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleOpenDialog = () => {
    setDialogOpen(true);
    setProgress(0);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setAnswerSubmitted(false);
    setSelectedAnswer(null);
  };

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setAnswerSubmitted] = useState(false);

  const [feedbackStyle, setFeedbackStyle] = useState({});
  const handleAnswerSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setFeedbackStyle({
      ...feedbackStyle,
      [currentQuestion.correctAnswer]: { backgroundColor: 'green' },
      [selectedAnswer]: isCorrect ? { backgroundColor: 'green' } : { backgroundColor: 'red' },
    });
 

   // Move to the next question
   const nextQuestionIndex = currentQuestionIndex + 1;
   const answeredQuestions = nextQuestionIndex;
   const totalQuestions = questions.length;

   setProgress((answeredQuestions / totalQuestions) * 100);

  if (nextQuestionIndex < totalQuestions) {
   // setFeedbackStyle({});
    setCurrentQuestionIndex(nextQuestionIndex);
    setAnswerSubmitted(false);
    setSelectedAnswer(null);
// Reset feedback styles after a delay (e.g., 1000 milliseconds)
setTimeout(() => {
  setFeedbackStyle({});
}, 1000);  } else {
    
    // All questions answered, close the dialog
    setFeedbackStyle({});
    handleCloseDialog();
  }
  };

  const CircularProgressWithLabel = (props) => {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  };
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
             <p>
             <CircularProgressWithLabel variant="determinate" value={progress}  />
             </p>
                                  <Button variant="contained" onClick={handleOpenDialog}>Take Tests</Button>
       {/* Dialog for taking tests */}
       <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        
              <LinearProgress variant="determinate" value={progress} />
              <div style={{ padding: '16px' }}>
                <h2>Take Your Test</h2>               

                 {/* Render the current question and answer choices */}
                 <p>{currentQuestionIndex + 1}. <strong>{questions[currentQuestionIndex].question}</strong></p>
                <ul>
                  {questions[currentQuestionIndex].options.map((option) => (
                    <li key={option.id} style={feedbackStyle[option.id]}>                      <label>
                        <input
                          type="radio"
                          value={option.id}
                          checked={selectedAnswer === option.id}
                          onChange={() => setSelectedAnswer(option.id)}
                          disabled={isAnswerSubmitted}
                        />
                        {option.text}
                      </label>
                    </li>
                  ))}
                </ul>

              {/* Add logic to handle user's response */}
 <button onClick={handleAnswerSubmit} disabled={isAnswerSubmitted}>
                  {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish"}
                </button>
              </div>
            </Dialog>

                
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
