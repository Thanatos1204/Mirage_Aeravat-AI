// pages/index.js
import React from 'react';
import RectangleScreen from './components/RectangleScreen';
import Layout from './components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="py-20">
        <h1 className="text-4xl font-bold text-center text-white">Welcome to DepthFake</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 h-screen flex items-center justify-center">
          <RectangleScreen>
            <h2 className="text-2xl text-black font-bold mb-4">Section 1</h2>
            <p className='text-black'>This is the content of section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus auctor, feugiat velit vel, tempor velit.</p>
            <p className='text-black'>This is more content of section 1. Duis vitae dapibus nunc. Nullam nec arcu vel nibh feugiat dictum sed quis nisi.</p>
            {/* Add more content as needed */}
          </RectangleScreen>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 h-screen flex items-center justify-center">
          <RectangleScreen>
            <h2 className="text-2xl text-black font-bold mb-4">Section 2</h2>
            <p className='text-black'>This is the content of section 2. Ut consequat ligula eget turpis ullamcorper, vel fermentum odio viverra. Vivamus scelerisque sem eu lacus iaculis volutpat.</p>
            <p className='text-black'>This is more content of section 2. Nulla facilisi. Morbi feugiat vestibulum tortor, vel pretium enim lacinia ac.</p>
            {/* Add more content as needed */}
          </RectangleScreen>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 h-screen flex items-center justify-center">
          <RectangleScreen>
            <h2 className="text-2xl text-black font-bold mb-4">Section 3</h2>
            <p className='text-black'>This is the content of section 3. Curabitur vestibulum, augue non placerat fermentum, magna elit tempor dui, eget tincidunt urna lorem eget elit.</p>
            <p className='text-black'>This is more content of section 3. Sed ut nisi a neque posuere malesuada ac ut leo.</p>
            {/* Add more content as needed */}
          </RectangleScreen>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
