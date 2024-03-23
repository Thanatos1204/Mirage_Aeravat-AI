from flask import Flask, request, render_template
import pickle
import cv2
import numpy as np
import os
import tempfile

app = Flask(__name__)

# Load the model
with open('faces.pkl', 'rb') as file:
    model = pickle.load(file)

print(type(model))
print(model)

# @app.route('/uploadfile', methods=['POST'])
# def upload_file():
#     if 'file' not in request.files:
#         return 'No file part', 400
#     file = request.files['file']
#     if file.filename == '':
#         return 'No selected file', 400

#     # Save the uploaded file to a temporary location
#     temp_file_path = os.path.join(tempfile.gettempdir(), file.filename)
#     file.save(temp_file_path)

#     # Assuming the model expects a specific input shape
#     input_shape = (224, 224, 3) # Example input shape
    
#     # Read the video file
#     video = cv2.VideoCapture(temp_file_path)
#     frames = []
#     while True:
#         ret, frame = video.read()
#         if not ret:
#             break
#         # Preprocess the frame (resize, normalize, etc.)
#         frame = cv2.resize(frame, input_shape[:2])
#         frame = frame / 255.0 # Normalize
#         frames.append(frame)
    
#     # Convert frames to a numpy array and make predictions
#     frames_array = np.array(frames)
#     predictions = model.predict(frames_array)
    
#     # Assuming the model returns a binary classification (0 for real, 1 for fake)
#     is_deepfake = predictions.argmax() == 1
    
#     # Clean up the temporary file
#     os.remove(temp_file_path)
    
#     return {"is_deepfake": is_deepfake}

if __name__ == '__main__':
    app.run(debug=True)
