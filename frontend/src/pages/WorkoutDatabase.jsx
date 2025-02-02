import React, { useState } from "react";
import axios from "axios";

const WorkoutDatabase = () => {
  const [isExercise, setIsExercise] = useState("");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSelectChange = (event) => {
    setIsExercise(event.target.value); // Update state with selected value
  };

  const handleSearch = async () => {
    if (!isExercise) return; // Prevent searching if no muscle group is selected

    setIsLoading(true); // Set loading to true
    const options = {
      method: "GET",
      url: `https://api.algobook.info/v1/gym/categories/${isExercise}`,
    };

    try {
      const response = await axios.request(options);
      const exer = response.data.exercises;

      console.log(exer);

      setExercises(exer || []); // Ensure exercises is set properly or fallback to an empty array
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading to false after the request completes
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-[60vh] gap-10 my-12">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-5xl font-bold text-center">
          Search For A Perfect Exercise
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <select
            value={isExercise}
            onChange={handleSelectChange}
            className="py-3 px-5 appearance-none border border-gray-400 rounded-md text-xl focus:border-gray-400"
          >
            <option value="">Select a Muscle Group</option>
            <option value="chest">Chest</option>
            <option value="shoulder">Shoulder</option>
            <option value="bicep">Bicep</option>
            <option value="tricep">Tricep</option>
            <option value="legs">Legs</option>
            <option value="back">Back</option>
            <option value="glute">Glute</option>
            <option value="calves">Calves</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-green-600 rounded-md py-3 px-4 text-xl text-white hover:bg-green-500"
          >
            Search
          </button>
        </div>
        {/* Loading indicator */}
        {isLoading ? (
          <p>Loading exercises...</p>
        ) : exercises.length === 0 ? (
          <p>Exercises and demonstrations will be displayed here.</p>
        ) : null}
      </div>
      <div className="w-full flex flex-wrap justify-center gap-6 mt-10">
        {exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 bg-gray-100 p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-3xl font-bold mb-4 text-green-700">
                {exercise.name}
              </h3>
              <p className="text-lg text-gray-700 mb-3">
                <strong>Muscle Group:</strong> {exercise.muscle}
              </p>
              <a
                href={exercise.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-lg"
              >
                View Details
              </a>
            </div>
          ))
        ) : (
          <p>No exercises found for the selected muscle group.</p>
        )}
      </div>
    </div>
  );
};

export default WorkoutDatabase;
