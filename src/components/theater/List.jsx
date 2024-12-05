import { useEffect, useState } from "react";
import React from "react";

function List({ theaterId }) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/TheaterList.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(fetchedData => {
                console.log("Fetched data:", fetchedData);
                setData(fetchedData);

                if (theaterId) {
                    const filtered = fetchedData.filter(item => item.districtId === parseInt(theaterId));
                    setFilteredData(filtered);
                } else {
                    setFilteredData(fetchedData);
                }
            })
            .catch(err => setError(err));
    }, [theaterId]);

    if (error) {
        return (
            <div className="mt-[70px] p-4 font-redHat">
                <h1 className="text-3xl font-extrabold mb-6 text-center text-red-600">
                    Error Loading Theater Data
                </h1>
                <p className="text-center text-red-500">{error.message}</p>
            </div>
        );
    }

    if (!data.length) {
        return <p className="text-center text-gray-500">Fetching theater data...</p>;
    }

    return (
        <div className="mt-[70px] p-4 font-redHat">
            <h1 className="text-3xl font-extrabold mb-6 text-center">
                {/* Theater List {theaterId ? `for District of ${theaterId}` : ""} */}
                List of theaters for selected District
            </h1>

            <div className="mt-[20px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
                {filteredData.length > 0 ? (
                    filteredData.map(theater => (
                        <div
                            key={theater.id}
                            className=" bg-[#004A8F] text-gray-300 font-bold py-3 px-5 rounded-lg shadow-md hover:bg-[#FCB81F] hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            <h2 className="font-bold text-lg">{theater.nameEn || "Unknown Theater"}</h2>
                            <p>Location: {theater.location || "N/A"}</p>
                            {/* <p>Price: {theater.price ? `${theater.price} LKR` : "N/A"}</p> */}
                            {/* <p>Condition: {theater.condition || "N/A"}</p> */}
                            <p>Time: {theater.time || "N/A"}</p>
                            <p>Contact: {theater.tp || "N/A"}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No theaters found for selected district ({theaterId}).
                    </p>
                )}
            </div>
        </div>
    );
}

export default List;
