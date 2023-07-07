import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      axios.post('https://thierry.kellyburger.com', formData) // Replace with your web server's URL
        .then((response) => {
          // Handle successful upload
          alert('Upload successful:', response.data);
        })
        .catch((error) => {
          // Handle error
          console.error('Upload failed:', error);
          alert('Upload failed:', error)
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;
