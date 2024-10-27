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
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

const questionsData = [
  { id: '1', question: "Santa's Workshop Needs?", options: ["Protection", "Absolutely", "Security", "Legacy"], answer: "Protection" },
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

  const handleFinalSubmit = () => {
    console.log("Quiz Results:", result);
    setResult([]);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setShowModal(false);
    setQuestionsAnswered(0);
  };

  const currentQuestion = questionsData[currentQuestionIndex];
  const progressPercentage = ((questionsAnswered) / questionsData.length) * 100;

  return (
    <section className='Quiz-sectionWrapper py-5 p-5'>
      {showModal && (
      <div className={`modal show santa-bg-theme fade-in`} style={{ display: 'block' }}>
      <div
        className="modal-dialog modal-xl p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className='text-white' style={{textShadow:'2px 2px #f7d94f'}}>Special Quiz Problem</h1>
        <div className="modal-content quiz-mod-size" style={{ border: '4px solid rgb(153 219 142', boxShadow: '35px 40px rgb(68 58 65)' }}>
          <div className="modal-header justify-content-between" style={{ backgroundColor: 'rgb(61 94 181)', color: 'white' }}>
            <h5 className="modal-title"><i className="fa fa-question-circle ml-2"></i> Question ({currentQuestionIndex + 1})</h5>
            {/* Uncomment this button to enable closing the modal */}
            {/* <button type="button" className="close" onClick={handleCloseModal} style={{ border: 'none', backgroundColor: '#e25151' }}>
              <span><i className="fa fa-times"></i></span> 
            </button> */}
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
    
          <div className="modal-body" style={{ overflowY: 'auto', height: 'calc(100% - 120px)' }}>
            {quizCompleted ? (
              <div>
                <p>All questions are completed! Are you ready to submit your answers?</p>
                <div className="modal-footer">
                  <button className="btn btn-success" type="button" onClick={handleFinalSubmit} style={{ backgroundColor: '#e25151', color: 'white', border: 'none' }}>
                    <i className="fa fa-paper-plane"></i> {/* Submit icon */}
                    Submit Quiz
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p>{currentQuestion?.question}</p>
                <div className="row justify-content-between">
                  {currentQuestion?.options.map((option, idx) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = selectedAnswer && option === currentQuestion.answer;
                    const isWrong = selectedAnswer && option !== currentQuestion.answer;
    
                    return (
                      <div key={idx} className="col-lg-5 col-md-6 col-sm-12 mb-2">
                        <button
                          className={`btn ${isSelected ? (isCorrect ? 'lightgreen' : 'lightred') : 'btn-light'} w-100`}
                          onClick={() => {
                            if (!selectedAnswer) { // Allow selection only if not selected yet
                              setSelectedAnswer(option);
                            }
                          }}
                        >
                          {isCorrect && isSelected && <i className="fa fa-check-circle" style={{ marginRight: '5px', color: 'green' }}></i>} {/* Correct answer icon */}
                          {isWrong && isSelected && <i className="fa fa-times-circle" style={{ marginRight: '5px', color: 'red' }}></i>} {/* Wrong answer icon */}
                          {option}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="modal-footer">
                  {/* Uncomment this button to enable going to the previous question */}
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
                    <i className="fa fa-arrow-right"></i> {/* Next icon */}
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
  );
};

export default Page;



