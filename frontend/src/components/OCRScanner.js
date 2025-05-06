import React, { useState } from 'react';

function OCRScanner() {
  const [text, setText] = useState('');

  const handleScan = () => {
    // Example: Fetch the scanned text from API
    fetch('/api/ocr/scan', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => setText(data.text))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>OCR Scanner</h2>
      <button onClick={handleScan}>Scan Image</button>
      <p>{text}</p>
    </div>
  );
}

export default OCRScanner;