import React, { useEffect, useState } from 'react';
import { database } from '../../../firebase.init';
import { ref, onValue } from 'firebase/database';

function ViewReview() {
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedReviews, setExpandedReviews] = useState({});
    const maxLength = 50;
    const reviewsPerPage = 5;

    const toggleText = (id) => {
        setExpandedReviews((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    useEffect(() => {
        const reviewsRef = ref(database, 'reviews');
        const unsubscribe = onValue(reviewsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const reviewsArray = Object.entries(data)
                    .map(([id, value]) => ({
                        id,
                        ...value,
                    }))
                    .filter((review) => review.isApproved === 1) 
                    .sort((a, b) => b.timestamp - a.timestamp); 
                setReviews(reviewsArray);
            } else {
                setReviews([]);
            }
        });
        return () => unsubscribe();
    }, []);

    console.log(reviews)

    // Pagination logic
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    // Handle page change
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={i <= rating ? '#FBBF24' : '#E5E7EB'}
                >
                    <path d="M12 .587l3.668 7.429L24 9.75l-6 5.84 1.416 8.26L12 19.258l-7.416 4.592L6 15.59 0 9.75l8.332-1.734L12 .587z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <section className="py-12 w-full max-w-7xl px-4 md:px-5 mx-auto">
                <div className="py-6 mt-10 border-y border-gray-200 mb-11">
                    <h5 className="font-manrope font-semibold text-2xl leading-9 text-black text-center">
                        Reviews & Ratings
                    </h5>
                </div>

                {/* Reviews */}
                <div className="grid w-full grid-cols-1 gap-8 justify-items-center">
                    {currentReviews.map((review) => {
                        const formattedDate = new Date(review.timestamp).toLocaleDateString();
                        const isTextLong = review.reviewText.length > maxLength;

                        return (
                            <div
                                key={review.id}
                                className="w-full bg-white shadow-md rounded-lg p-6"
                                style={{
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word',
                                }}
                            >
                                <p className="font-medium text-lg leading-8 text-gray-900 mb-2">{review.name}</p>

                                <p
                                    className="font-normal leading-7 text-gray-400 mb-4"
                                    style={{
                                        maxWidth: '100%',
                                    }}
                                >
                                    {expandedReviews[review.id]
                                        ? review.reviewText
                                        : `${review.reviewText.slice(0, maxLength)}${isTextLong ? '...' : ''}`}
                                    {isTextLong && (
                                        <span
                                            onClick={() => toggleText(review.id)}
                                            className="text-blue-500 cursor-pointer hover:underline ml-2"
                                        >
                                            {expandedReviews[review.id] ? 'Show less' : 'Show more'}
                                        </span>
                                    )}
                                </p>

                                {/* Rating Stars */}
                                <div className="flex justify-center gap-1 mb-4">{renderStars(review.rating)}</div>

                                <p className="font-medium text-lg leading-8 text-gray-400 text-right">{formattedDate}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination Controls */}
                <div className="mt-8 flex gap-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </section>
        </div>
    );
}

export default ViewReview;
