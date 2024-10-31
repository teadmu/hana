// src/QueuePage.tsx
import React from 'react';

export const QueuePage: React.FC = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-gray-100 p-4'>
      <h1 className='mb-4 text-2xl font-bold'>하나은행 성수역점 [11]</h1>
      <div className='mb-4 flex w-full justify-around'>
        <div className='text-center'>
          <div>현재 대기인수</div>
          <div className='text-lg'>3명</div>
        </div>
        <div className='text-center'>
          <div>예상 소요시간</div>
          <div className='text-lg'>15분</div>
        </div>
        <div className='text-center'>
          <div>오늘 방문객</div>
          <div className='text-lg'>72명</div>
        </div>
      </div>
      <div className='mb-4 text-6xl font-bold text-red-600'>952</div>
      <button className='rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'>
        다음으로 ➔
      </button>
    </div>
  );
};

export default QueuePage;
