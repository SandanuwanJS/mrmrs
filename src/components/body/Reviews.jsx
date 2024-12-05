import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../../../firebase.init";
import { ref, onValue } from "firebase/database";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [ratingCounts, setRatingCounts] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const navigate = useNavigate();

  function handleClick() {
    navigate("/writereview");
  }

  function navToView() {
    navigate("/viewreview");
  }

  useEffect(() => {
    const reviewsRef = ref(database, "reviews");
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

        const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        reviewsArray.forEach((review) => {
          counts[review.rating] = (counts[review.rating] || 0) + 1;
        });
        setRatingCounts(counts);
      } else {
        setReviews([]);
        setRatingCounts({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
      }
    });

    return () => unsubscribe();
  }, []);

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)
      : 0;

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="font-redhat font-semibold text-3xl sm:text-4xl leading-10 text-black mb-8 text-center">
          Reviews & Ratings
        </h2>
        <div className="grid grid-cols-12 mb-11">
          {/* Ratings Sidebar */}
          <div className="col-span-12 xl:col-span-4 flex items-center">
            <div className="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center w-full">
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">{rating}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_13624_3137)">
                      <path
                        d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13624_3137">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span
                      className="h-full rounded-[30px] bg-[#004A8F] flex"
                      style={{
                        width: `${(ratingCounts[rating] / reviews.length) * 100}%`,
                      }}
                    ></span>
                  </p>
                  <p className="font-medium text-lg py-[1px] text-black mr-[2px]">
                    {ratingCounts[rating]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Average Rating Section */}
          <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
            <div className="grid grid-cols-12 h-full px-8 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-3xl max-xl:mx-auto">
              <div className="col-span-12 md:col-span-8 flex items-center">
                <div className="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
                  <div className="sm:pr-3 lg:ml-[120px] flex items-center justify-center flex-col">
                    <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">
                      {averageRating}
                    </h2>
                    <div className="flex items-center gap-3 mb-4">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill={index + 1 <= Math.round(averageRating) ? "#FBBF24" : "#E5E7EB"}
                        >
                          <path
                            d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-5">{reviews.length} reviews</p>
                  </div>
                </div>
              </div>
              {/* Navigation Buttons */}
              <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center gap-y-4">
                <button
                  onClick={handleClick}
                  className="px-6 py-3 w-full bg-[#004A8F] text-white rounded-lg font-medium shadow hover:bg-[#00396E]"
                >
                  Write a Review
                </button>
                <button
                  onClick={navToView}
                  className="px-6 py-3 w-full bg-white  text-[#004A8F] rounded-lg font-medium shadow hover:bg-gray-200"
                >
                  View All Reviews
                </button>
              </div>
            </div>
          </div>
          

          
        </div>
      </div>
    </section>
  );
}

export default Reviews;
