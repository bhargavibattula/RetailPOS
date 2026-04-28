import React from "react";
import { Link } from "react-router-dom";
import FuzzyText from "../../components/FuzzyText"; // adjust path if needed

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      
      {/* Animated 404 */}
      <FuzzyText 
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover
      >
        404
      </FuzzyText>

      {/* Message */}
      <h2 className="mt-6 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-400">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition"
      >
        Go Home
      </Link>

    </div>
  );
};

export default PageNotFound;