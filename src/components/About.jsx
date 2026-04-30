import React from "react";

const About = () => {
  return (
    <div>
      <div className="w-full mx-auto py-5">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl md:text-2xl text-center">
            Welcome to
            <span className="text-green-600 font-bold"> Lingo Bingo</span>
          </h2>
          <img className="w-12" src="/Lingo-Bingo-Logo.svg" alt="" />
        </div>

        <p className="text-lg mb-6 text-center text-gray-400">
          Making language learning accessible, fun, effective.
        </p>

        <div className="space-y-4 max-w-lg mx-auto justify-center rounded-2xl bg-green-500/20 p-3">
          <h3 className="text-xl font-semibold">How You Can Learn:</h3>

          <div className="flex items-start gap-3">
            <div className="mt-1 bg-blue-400 p-2 rounded-full text-blue-600"></div>
            <div>
              <h4 className="font-medium text-lg">Structured Lessons</h4>
              <p className="text-gray-400">
                Go through 10 lessons that build your vocabulary.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 bg-yellow-400 p-2 rounded-full text-green-600"></div>
            <div>
              <h4 className="font-medium text-lg">Interactive Audio</h4>
              <p className="text-gray-400">
                Listen to real-world pronunciations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 bg-purple-400 p-2 rounded-full text-purple-600"></div>
            <div>
              <h4 className="font-medium text-lg">Video Tutorials</h4>
              <p className="text-gray-400">
                Watch videos to understand alphabets and patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
