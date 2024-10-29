// 'use client';

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const images = [
//   "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//   "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//   "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//   "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//   "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//   "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//   "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//   "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//   "https://th.bing.com/th/id/OIP.HNYFQfFAAtwzqLkItA3fRgHaEA?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
// ];

// const questionsData = [
//   {
//     id :'1',
//     question: "Santa's Workshop Needs?",
//     options: ["Protection", "Absolutely", "Security", "Legacy"],
//     answer: "Protection",
//   },
//   {
//     id :'2',

//     question: "As reliable as Rudolph?",
//     options: ["Absolutely", "Protection", "Security", "Prepared"],
//     answer: "Absolutely",
//   },
//   {
//     id :'3',

//     question: "Gift beyond holidays?",
//     options: ["Legacy", "Security", "Prepared", "Guaranteed"],
//     answer: "Legacy",
//   },
//   {
//     id :'4',

//     question: "Best Christmas gift?",
//     options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
//     answer: "Security",
//   },
//   {
//     id :'5',

//     question: "Sleigh financial challenges?",
//     options: ["Prepared", "Guaranteed", "Twice", "Peace"],
//     answer: "Prepared",
//   },
//   {
//     id :'6',

//     question: "Grinch-proof plan?",
//     options: ["Assured", "Guaranteed", "Heritage", "Peace"],
//     answer: "Guaranteed",
//   },
//   {
//     id :'7',

//     question: "Festive future?",
//     options: ["Assured", "Legacy", "Prepared", "Security"],
//     answer: "Assured",
//   },
//   {
//     id :'8',

//     question: "Checked your policy?",
//     options: ["Twice", "Legacy", "Prepared", "Security"],
//     answer: "Twice",
//   },
//   {
//     id :'9',

//     question: "Turn traditions into...?",
//     options: ["Heritage", "Legacy", "Prepared", "Security"],
//     answer: "Heritage",
//   },
//   {
//     id :'10',

//     question: "Harmonize benefits?",
//     options: ["Peace", "Legacy", "Prepared", "Security"],
//     answer: "Heritage",
//   },
// ];

// const Page = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedQuestion, setSelectedQuestion] = useState({});
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [result , setResult] = useState([]);

//   const handleShowModal = (image, index) => {
//     setSelectedImage(image);
//     setSelectedQuestion(questionsData[index]); 
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedAnswer(""); 
//     setShowModal(false);
//   };


//   const handleSubmitAnswer = (e) => {
//     e.preventDefault();
//     let isResultQues 
//     if (selectedAnswer === selectedQuestion.answer) {
//       alert("Correct Answer!");
//       isResultQues = true

//     } else {
     
//       isResultQues = false

//     }
//     const resultobj = {
//       question : selectedQuestion.question,
//       rightAnswer : selectedQuestion.answer,
//       userAnswer : selectedAnswer,
//       questionResult : isResultQues
//     }
    
 
//     setResult((prevItems) => [...prevItems, resultobj]);
 
//     const nextquestion = questionsData[selectedQuestion.id]
//     console.log( "nextquestion",nextquestion);
    
//     setSelectedQuestion(nextquestion);
//     console.log("result data",result);
    
//   };

//   return (
//     <section className='Quiz-sectionWrapper py-5 p-5'>
//       <div className='container'>
//         <div className='row justify-content-center'>
       
//           <div className='col-lg-8'>
//             <div className='row justify-content-center'>
//               {images.map((image, index) => (
//                 <div className='col-md-4' key={index}>
//                   <div className='card mb-4 shadow-sm' onClick={() => handleShowModal(image, index)}>
//                     <div className='card-body text-center'>
//                       <img src={image} alt={`Card ${index + 1}`} className='w-100' />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

          
//           <div className='col-lg-4 mt-5 d-flex align-items-center justify-content-center'>
//             <div className='card shadow-sm p-3 sticky-sidebar text-center'>
//               <div className='card mb-4 shadow-sm'>
//                 <div className='card-body text-center'>
//                   <h5 className='card-title'>Point</h5>
//                 </div>
//               </div>
//               <button className='btn btn-warning mt-2'>0</button>
//               <button className='btn btn-success mt-2'>Finish</button>
//               <button className='btn btn-danger mt-2'>How to Play?</button>
//               <p>Follow the instructions to win!</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Question and Answers */}
//       {showModal && (
//         <div className="modal show" style={{ display: 'block' }} onClick={handleCloseModal}>
//           <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-content">
//               <div className="modal-header justify-content-between" style={{ backgroundColor: 'orange', color: 'white' }}>
//                 <h5 className="modal-title">Question!</h5>
//                 <button type="button" className="close" onClick={handleCloseModal} style={{ border: 'none', backgroundColor: 'orange' }}>
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <p>{selectedQuestion?.question}</p>
//                 <form  onSubmit={handleSubmitAnswer}>
//                   {selectedQuestion?.options.map((option, idx) => (
//                     <div className="form-check" key={idx}>
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="answerOptions"
//                         id={`option${idx + 1}`}
//                         required
//                         value={option}
//                         checked={selectedAnswer === option}
//                         onChange={(e) => setSelectedAnswer(e.target.value)}
//                       />
//                       <label className="form-check-label" htmlFor={`option${idx + 1}`}>
//                         {option}
//                       </label>
               
//                     </div>
//                   ))}
//                          <button 
//                   className='btn btn-primary' 
//                   type='submit'
//                  >
//                   Submit Answer
//                 </button>
//                 </form>
//               </div>
           
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Page;
'use client';
import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import { useRouter } from 'next/navigation';
import { url } from '@/utils/url';


const questionsData = [
  { id: '1', question: "Santa's Workshop Needs?", options: ["Absolutely", "Protection", "Guaranteed", "Protection", "Protection","e"], answer: "Protection" },
  { id: '2', question: "As reliable as Rudolph?", options: ["Absolutely", "Protection", "Security", "Prepared"], answer: "Absolutely" },
  { id: '3', question: "Gift beyond holidays?", options: ["Legacy", "Security", "Prepared", "Guaranteed"], answer: "Legacy" },
  { id: '4', question: "Best Christmas gift?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Security" },
  { id: '5', question: "Sleigh financial challenges?", options: ["Prepared", "Guaranteed", "Twice", "Peace"], answer: "Prepared" },
  { id: '6', question: "Grinch-proof plan?", options: ["Assured", "Guaranteed", "Heritage", "Peace"], answer: "Guaranteed" },
  { id: '7', question: "Festive future?", options: ["Assured", "Legacy", "Prepared", "Security"], answer: "Assured" },
  { id: '8', question: "Checked your policy?", options: ["Twice", "Legacy", "Prepared", "Security"], answer: "Twice" },
  { id: '9', question: "Turn traditions into...?", options: ["Heritage", "Legacy", "Prepared", "Security"], answer: "Heritage" },
  { id: '10', question: "Harmonize benefits?", options: ["Peace", "Legacy", "Prepared", "Security"], answer: "Heritage" },
];

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const router = useRouter();
  const audioRef = useRef(null);

  useEffect(() => {
    setShowModal(true);
  }, [currentQuestionIndex]);

  const handleCloseModal = () => {
    setSelectedAnswer("");
    setShowModal(false);
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    const currentQuestion = questionsData[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    setResult((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        correctAnswer: currentQuestion.answer,
        userAnswer: selectedAnswer,
        isCorrect: isCorrect,
      }
    ]);

    setQuestionsAnswered(questionsAnswered + 1);

    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      setQuizCompleted(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer("");
    }
  };

  const handleFinalSubmit = async () => {
    const storeemail = localStorage.getItem("useremail");
    console.log("storeemail",storeemail);
    
    console.log("Quiz Results:", result);
    if(!storeemail){
      return  router.push('/'); 

    }
    try {
      const response = await fetch(`${url}/api/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: storeemail, result }),
      });
      setResult([]);
      setCurrentQuestionIndex(0);
      setQuizCompleted(false);
      setShowModal(false);
      setQuestionsAnswered(0);
      router.push('/result'); 
    }
    catch (error){
console.log(error);

    }


  };

  const currentQuestion = questionsData[currentQuestionIndex];
  const progressPercentage = ((questionsAnswered) / questionsData.length) * 100;
 // Function to play the sound
 const playSound = () => {
  if (audioRef.current) {
    audioRef.current.currentTime = 0; // Reset audio to start
    audioRef.current.play().catch(error => {
      console.error("Audio play failed:", error); // Log any errors
    });
  }
};

// Use useEffect to play sound on component mount
useEffect(() => {
  const playAudioOnLoad = async () => {
    try {
      await playSound();
    } catch (error) {
      console.error("Error playing audio on load:", error);
    }
  };

  playAudioOnLoad();
}, []); // Empty dependency array ensures this runs only once on mount
  return (
    <>
    <audio ref={audioRef} src="/sound2.mp3" preload="auto" />

    <section className='Quiz-sectionWrapper py-5 '>
        <div className="stars-container">
                {[...Array(50)].map((_, idx) => (
                    <div key={idx} className="star" style={{ '--i': Math.random() * 100 }}></div>
                ))}
            </div>
      {showModal && (
      <div className={`modal show santa-bg-theme mt-5 fade-in`} style={{ display: 'block' }}>
      <div
        className="modal-dialog "
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className='text-white' style={{textShadow:'2px 2px #f7d94f'}}>Special Quiz Problem</h1>
        <div className="modal-content quiz-mod-size" style={{boxShadow: 'rgb(255 255 255) 12px 12px' }}>
          <div className="modal-header justify-content-between" style={{ backgroundColor: 'rgb(247 95 29)', color: 'white' }}>
            <h5 className="modal-title"> Question {currentQuestionIndex + 1} of {questionsData.length} </h5>
        
          </div>
    
          <div className="progress mt-3" style={{ height: '20px' }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progressPercentage}%`, backgroundColor: 'lightgreen' }}
              aria-valuenow={progressPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className='d-flex'>
    <button className='btn bg-primary'></button>
    <button className='btn bg-primary'></button>
    <button className='btn bg-primary'></button>
    <button className='btn bg-primary'></button>
    </div>
          <div className="modal-body" style={{ overflowY: 'auto', height: 'calc(100% - 120px)' }}>
            {quizCompleted ? (
              <div>
                <p>All questions are completed! Are you ready to submit your answers?</p>
                <div className="modal-footer">
                  <button className="btn btn-success" type="button" onClick={handleFinalSubmit} style={{ backgroundColor: '#e25151', color: 'white', border: 'none' }}>
                    <i className="fa fa-paper-plane"></i> 
                    Submit Quiz
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className='Question-wrapper'>{currentQuestion?.question}</p>
                <div className="row justify-content-between">
                  {currentQuestion?.options.map((option, idx) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = selectedAnswer && option === currentQuestion.answer;
                    const isWrong = selectedAnswer && option !== currentQuestion.answer;
    
                    return (
                      <div key={idx} className="col-lg-3 col-md-6 col-sm-12 mb-2">
                        <button
                          className={`btn ${isSelected ? (isCorrect ? 'lightgreen' : 'lightred') : 'btn-light'} w-100`}
                          onClick={() => {
                            if (!selectedAnswer) { // Allow selection only if not selected yet
                              setSelectedAnswer(option);
                            }
                          }}
                        >
                          {isCorrect && isSelected && <i className="fa fa-check-circle" style={{ marginRight: '5px', color: 'green' }}></i>}
                          {isWrong && isSelected && <i className="fa fa-times-circle" style={{ marginRight: '5px', color: 'red' }}></i>} 
                          {option}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="modal-footer">
                
                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={goToPreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                  >
                    <i className="fa fa-arrow-left"></i> 
                    Previous
                  </button> */}
                  <button className="btn btn-primary" type="submit" onClick={handleSubmitAnswer} style={{ backgroundColor: '#e25151', border: 'none' }} disabled={!selectedAnswer}>
                    <i className="fa fa-arrow-right"></i>
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    
      )}
    </section>
    </>
  );
};

export default Page;



