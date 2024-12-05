import React, { useState } from 'react';
import { database } from '../../../firebase.init'; 
import { ref, push } from "firebase/database"; 
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


function ReviewForm() {
    const [rating, setRating] = useState(0); 
    const [name, setName] = useState(""); 
    const [review, setReview] = useState(""); 

    const navigate = useNavigate(); // Use navigate for redirection

    const handleStarClick = (index) => {
        setRating(index + 1); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const name = e.target.name.value;
        const reviewText = e.target.review.value;
    
        const reviewsRef = ref(database, 'reviews');
    
        // Push the data to the database
        push(reviewsRef, {
            name,
            reviewText,
            rating, 
            timestamp: Date.now(),
            isApproved: 0,
        })
        .then(() => {
            // alert('Review submitted successfully!');
            Swal.fire({
                title: "Success!",
                text:name+", Thank You for your "+rating+" Star Rating!",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/");
                }
              });
            setName(""); // Clear form
            setReview("");
            setRating(0);
        })
        .catch((error) => {
            console.error('Error submitting review:', error);
            alert('Failed to submit the review. Please try again.');
        });
    };
    

    return (
        <div className="justify-items-center">
            <div className="flex items-center mt-[150px]">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        onClick={() => handleStarClick(index)}
                        className={`w-8 h-8 ms-3 cursor-pointer ${
                            rating > index ? 'text-yellow-300' : 'text-gray-300'
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                ))}
            </div>

            <form className="max-w-sm mt-10 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="review" className="block mb-2 text-sm font-medium text-gray-900">Write Review</label>
                    <textarea
                        id="review"
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        maxLength={200}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ReviewForm;
