// 'use client';
// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import { useRouter } from 'next/navigation';
// import { url } from '@/utils/url';

// const Page = () => {
//     const router = useRouter();
//     const [result, setResult] = useState([]);
//     const [storedEmail, setStoredEmail] = useState(null);

//     // Set storedEmail state once the component is mounted
//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const email = localStorage.getItem("useremail");
//             setStoredEmail(email);
//         }
//     }, []);

//     const findResult = async () => {
//         if (!storedEmail) {
//             router.push('/'); 
//             return;
//         }

//         try {
//             const response = await fetch(`${url}/api/user?email=${storedEmail}`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });
//             const userResult = await response.json();
//             console.log("userResult", userResult);
//             setResult(userResult.result || []);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (storedEmail) {
//             findResult();
//         }
//     }, [storedEmail]);

//     // Handle finish button click
//     const handleFinish = () => {
//         if (typeof window !== 'undefined') {
//             localStorage.removeItem("useremail"); // Remove email from local storage
//         }
//         router.push('/'); // Redirect to home page
//     };

//     // Calculate score based on correct answers in the fetched result
//     const score = result.reduce((total, item) => (item.isCorrect ? total + 1 : total), 0);

//     return (
//         <section className="resultWrapper py-5 p-5">
//             <div className="container">
//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                     <h2 className="text-white" style={{ textShadow: '2px 2px #f7d94f' }}>Quiz Results</h2>
                    
//                     {/* Score Button with Trophy Icon */}
//                     <button className="btn btn-primary">
//                         <i className="fa fa-trophy" style={{ marginRight: '5px' }}></i>
//                         Score: {score}/{result.length}
//                     </button>
                    
//                     {/* Finish Button with Check Icon */}
//                     <button className="btn btn-success" onClick={handleFinish}>
//                         <i className="fa fa-check" style={{ marginRight: '5px' }}></i>
//                         Finish
//                     </button>
//                 </div>
//                 <div className="row">
//                     {result.map((item, idx) => (
//                         <div key={idx} className="col-lg-3 col-md-6 col-sm-12 mb-4">
//                             <div className="card shadow-sm">
//                                 <div className="card-body" style={{ boxShadow: '9px 9px rgb(68 58 65)' }}>
//                                     <h5 className="card-title">Question {idx + 1}</h5>
//                                     <p className="card-text"><strong>Q:</strong> {item.question}</p>
//                                     <div className="row">
//                                         {/* Correct Answer with Label */}
//                                         <div className="col-6 mb-2">
//                                             <p className="text-success font-weight-bold">Correct Answer:</p>
//                                             <button className="btn w-100 btn-success" disabled>
//                                                 <i className="fa fa-check-circle" style={{ marginRight: '5px' }}></i>
//                                                 {item.correctAnswer}
//                                             </button>
//                                         </div>

//                                         {/* User's Answer with Label (if different from the correct answer) */}
//                                         {item.userAnswer !== item.correctAnswer && (
//                                             <div className="col-6 mb-2">
//                                                 <p className="text-danger font-weight-bold">Your Answer:</p>
//                                                 <button className="btn w-100 btn-danger" disabled>
//                                                     <i className="fa fa-times-circle" style={{ marginRight: '5px' }}></i>
//                                                     {item.userAnswer}
//                                                 </button>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Page;


'use client';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useRouter } from 'next/navigation';
import { url } from '@/utils/url';


const Page = () => {
    const router = useRouter();
    const [storedEmail, setStoredEmail] = useState(null);
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const email = localStorage.getItem("useremail");
            setStoredEmail(email);
        }
    }, []);

    const findResult = async () => {
        if (!storedEmail) {
            router.push('/'); 
            return;
        }

        try {
            const response = await fetch(`${url}/api/user?email=${storedEmail}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const userResult = await response.json();
            setResult(userResult.result || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (storedEmail) {
            findResult();
        }
    }, [storedEmail]);

    const handleFinish = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("useremail");
        }
        router.push('/');
    };

    const score = result.reduce((total, item) => (item.isCorrect ? total + 1 : total), 0);

    return (
        <section className="resultWrapper">
            <div className="stars-container">
                {[...Array(100)].map((_, idx) => (
                    <div key={idx} className="star" style={{ '--i': Math.random() * 100 }}></div>
                ))}
            </div>
            <div className="content-center">
                <h2 className="congrats-message">Congratulations!</h2>
                <p className="score-display">
                    <i className="fa fa-trophy" style={{ marginRight: '5px' }}></i>
                    Score: {score}/{result.length}
                </p>
                <button className="btn btn-success finish-btn" onClick={handleFinish}>
                    <i className="fa fa-check" style={{ marginRight: '5px' }}></i>
                    Finish
                </button>
            </div>
        </section>
    );
};

export default Page;

