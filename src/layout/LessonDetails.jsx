import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const LessonDetails = () => {
  const allVocabularies = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const lesson = allVocabularies.find((item) => item.id === id);
  // console.log(lessons, id);

  const {
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    lesson_no,
    when_to_say,
    example,
  } = lesson;

  return (
    <div>
      <button 
        onClick={() => navigate(-1)}
        className="bg-green-600 font-semibold py-1 px-2 rounded-full"
      >
        ← Back to Learning
      </button>
      <section className="flex border border-green-200 py-1 mt-4 rounded-2xl text-center">
        <div className="mx-auto">
          <p className="text-[10px] font-bold uppercase text-gray-500">
            Part of Speech
          </p>
          <p className="font-semibold text-gray-300">{part_of_speech}</p>
        </div>
        <div className="mx-auto">
          <p className="text-[10px] font-bold uppercase text-gray-500">
            Difficulty
          </p>
          <p className="font-semibold text-gray-300">{difficulty}</p>
        </div>
        <div className="mx-auto">
          <p className="text-[10px] font-bold uppercase text-gray-500">
            Lesson
          </p>
          <p className="font-semibold text-gray-300">{lesson_no}</p>
        </div>
      </section>

      <section className="mt-4">
        <h1 className="text-6xl font-bold tracking-tight text-green-600">
          {word}
        </h1>
        <p className="text-2xl text-gray-300 font-serif italic">
          /{pronunciation}/
        </p>
      </section>

      <section className="mt-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-4">
          Meaning
        </p>
        <p className="text-3xl font-bold text-gray-200 capitalize">{meaning}</p>
      </section>

      <section className="mt-4">
        <p className="text-[10px] font-bold uppercase text-gray-500">
          Usage Context
        </p>
        <p className="text-lg text-gray-200 leading-relaxed italic">
          "{when_to_say}"
        </p>
      </section>

      <section className="bg-gray-50 p-4 rounded-3xl mt-4">
        <p className="text-[10px] font-bold uppercase text-gray-500 mb-2">
          Example Sentence
        </p>
        <p className="text-xl font-medium text-gray-800 leading-snug">
          {example}
        </p>
      </section>
    </div>
  );
};

export default LessonDetails;
