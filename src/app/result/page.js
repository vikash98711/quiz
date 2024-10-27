'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const resultData = [
    { id: '1', question: "Santa's Workshop Needs?", correctAnswer: "Protection", userAnswer: "Protection", isCorrect: true, options: ["Protection", "Absolutely", "Security", "Legacy"] },
    { id: '2', question: "As reliable as Rudolph?", correctAnswer: "Absolutely", userAnswer: "Absolutely", isCorrect: true, options: ["Absolutely", "Protection", "Security", "Prepared"] },
    { id: '3', question: "As reliable as Rudolph?", correctAnswer: "Absolutely", userAnswer: "Protection", isCorrect: false, options: ["Absolutely", "Protection", "Security", "Prepared"] },
];

const page = () => {
    // Calculate score
    const score = resultData.reduce((total, item) => (item.isCorrect ? total + 1 : total), 0);

    return (
        <section className="resultWrapper py-5 p-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className='text-white' style={{textShadow:'2px 2px #f7d94f'}}>Quiz Results</h2>
                    <button className="btn btn-primary">Score: {score}/{resultData.length}</button>
                </div>
                <div className="row">
                    {resultData.map((item, idx) => (
                        <div key={item.id} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                            <div className="card shadow-sm" >
                                <div className="card-body" style={{boxShadow: '35px 40px rgb(68 58 65)' }}>
                                    <h5 className="card-title">Question {idx + 1}</h5>
                                    <p className="card-text"><strong>Q:</strong> {item.question}</p>
                                    <div className="row">
                                        {item.options.map((option, index) => {
                                            const isCorrectAnswer = option === item.correctAnswer;
                                            const isUserAnswer = option === item.userAnswer;

                                            // Define button class based on conditions
                                            let btnClass = 'btn-light'; // Default class
                                            
                                            if (isCorrectAnswer) {
                                                btnClass = 'lightgreen'; // Correct answer
                                            } else if (isUserAnswer) {
                                                btnClass = 'btn-danger'; // User's selected answer (if wrong)
                                            }

                                            return (
                                                <div key={index} className="col-6 mb-2">
                                                    <button className={`btn w-100 ${btnClass}`} disabled>
                                                        {isCorrectAnswer && (
                                                            <i className="fa fa-check-circle" style={{ marginRight: '5px' }}></i>
                                                        )}
                                                        {isUserAnswer && !isCorrectAnswer && (
                                                            <i className="fa fa-times-circle" style={{ marginRight: '5px' }}></i>
                                                        )}
                                                        {option}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default page;
