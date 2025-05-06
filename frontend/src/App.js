import React from 'react';
import Navbar from './components/Navbar';
import FileUploader from './components/FileUploader';
import PDFTools from './components/PDFTools';
import OCRScanner from './components/OCRScanner';
import ImageEditor from './components/ImageEditor';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FileUploader />
        <PDFTools />
        <OCRScanner />
        <ImageEditor />
      </div>
    </div>
  );
}

export default App;