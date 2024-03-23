    'use client'
    import Layout from '../components/Layout';
    import renderPrediction  from '../components/RenderPrediction';
    import React, { useState } from 'react'
    import Uploader from '../components/UploadFile';
    import RectangleScreen from '../components/RectangleScreen';

    const ImageDetect = () => {

        const [imgPreviewUrl, setImgPreviewUrl] = useState<string | null>(null);
        const [detectionResult, setDetectionResult] = useState<any>(null);

        const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files && files.length > 0) {
                const file = files[0];
                const url = URL.createObjectURL(file);
                setImgPreviewUrl(url);
    
                try {
                    const result = await query(file);
                    setDetectionResult(result);
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };
    
        async function query(file: File) {
            const base64String = await convertToBase64(file);
    
            const response = await fetch(
                "https://api-inference.huggingface.co/models/dima806/deepfake_vs_real_image_detection",
                {
                    headers: { Authorization: "Bearer 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" },
                    method: "POST",
                    body: JSON.stringify({ inputs: base64String }),
                }
            );
    
            const result = await response.json();
            return result;
        }
    
        async function convertToBase64(file: File): Promise<string> {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64String = reader.result?.toString().split(',')[1];
                    if (base64String) {
                        resolve(base64String);
                    } else {
                        reject(new Error("Failed to convert image to Base64."));
                    }
                };
                reader.onerror = error => reject(error);
                reader.readAsDataURL(file);
            });
        }
    

    return (
        <Layout>
            <div className="flex justify-center">   
            <div className="w-4/5 h-screen text-center flex items-center self-center justify-center">
            <RectangleScreen>
                <Uploader onFileChange={handleFileChange} />
                {imgPreviewUrl &&  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '200px', height: '200px' }} src={imgPreviewUrl} alt="Preview" />
                </div> } {/* Display the image if imgPreviewUrl is not null */}
                {detectionResult && (
                <div className='text-red-600'>
                    <h2>Detection Result:</h2>
                    {renderPrediction(detectionResult)}
                </div>
                )}
                </RectangleScreen>
                </div>
                </div>
        </Layout>
    )
    }


    export default ImageDetect;
