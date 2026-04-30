import React from 'react';
import { Link } from 'react-router-dom';

const Vocabulary = ({vocabulary}) => {
  const {id, word, meaning, pronunciation} = vocabulary;
  console.log(vocabulary);
  return (
    <div className='card p-4 bg-gray-200 text-center'>
        <h2 className='text-3xl text-green-600 font-bold text-center'>{word}</h2>
        <p className='text-gray-400'>/{pronunciation}/</p>
        <div className='w-14 h-0.5 bg-green-500/50 rounded-full group-hover:w-24 transition-all duration-500 mx-auto mb-2'></div>
        <h2 className='text-black text-center mb-4'>{meaning}</h2>
        <Link to={`/lesson/${id}`} className='text-green-600 w-fit mx-auto py-0.5 px-2 rounded-2xl border border-green-600 text-sm'>Learn More →</Link>
    </div>
  );
};

export default Vocabulary;