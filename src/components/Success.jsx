import React from 'react';
import { CountUp } from 'react-countup';

const Success = () => {
  const stats = [
    {id: 1, title: "Users", count: 550, suffix: "+"},
    {id: 2, title: "Lessons", count: 10, suffix: ""},
    {id: 3, title: "Vocabularies", count: 200, suffix: "+"},
    {id: 4, title: "Tutorials", count: 25, suffix: "+"}
  ]
  return (
    <div>
      <div className='container mx-auto'>
        <h2 className='text-3xl mb-4 font-bold text-center'>Our Achievements</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {
            stats.map((stat) => (
              <div key={stat.id} className='p-4 rounded-xl shadow-sm border border-gray-300 flex flex-col items-center justify-center transition-transform hover:scale-105'>
                <div className='flex mb-2'>
                  <h1 className='text-4xl'>{stat.count}</h1>
                  <h1 className='text-4xl'>{stat.suffix}</h1>
                </div>
                <p className='text-green-500 font-medium text-lg md:text-xl text-center'>{stat.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Success;