import React, { useEffect, useState } from 'react';
import Vocabulary from '../components/Vocabulary';
import { Link } from 'react-router-dom';

const StartLearning = () => {

  const [vocabularies, setVocabularies] = useState([])

  useEffect(() => {
    fetch ('/vocabularies.json')
    .then (res => res.json())
    .then (data => setVocabularies(data))
  }, [])

  return (
    <div className='container mx-auto'>
      <header className='text-center'>
        <h2 className='text-4xl mb-2 font-extrabold'>Start Learning</h2>
        <p className='text-gray-400'>Master the German vocabulary</p>
      </header>
      <section className='my-4 flex flex-col border rounded-2xl p-4 items-center gap-1'>
        <h2 className='text-2xl font-bold'>Video Tutorial</h2>
        <p className='text-gray-400'>Learn pronunciation & grammar</p>
        <Link to={`/tutorials`} className='btn bg-green-600 hover:bg-green-700 rounded-full'>View All</Link>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          vocabularies.map(vocabulary => <Vocabulary key={vocabulary.id} vocabulary={vocabulary}></Vocabulary>)
        }
      </section>
    </div>
  );
};

export default StartLearning;