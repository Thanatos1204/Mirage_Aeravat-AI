'use client'
import React, { useState } from 'react';
import Uploader from '../components/UploadFile';
import Layout from '../components/Layout';
import RectangleScreen from '../components/RectangleScreen';

const Upload = () => {
 const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);

 const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoPreviewUrl(url);
    }
 };

 return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-4/5 h-screen text-center flex items-center self-center justify-center">
          <RectangleScreen>
            <Uploader onFileChange={handleFileChange} />
            {videoPreviewUrl && (<div className='flex justify-center items-center'>
      <h1 className='text-xl text-black font-bold '>Preview: </h1>
        <video className='flex justify-center items-center m-5' width="320" height="240" controls>
          <source src={videoPreviewUrl} type="video/mp4" />
        </video>

      </div>       
      )}
            <div className="flex m-5 justify-center">
              <button className="cursor-pointer text-center group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                Process Video File
                <div className="absolute text-center opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                 Process
                </div>
              </button>
            </div>
          </RectangleScreen>
        </div>
      </div>
    </Layout>
 );
};

export default Upload;
