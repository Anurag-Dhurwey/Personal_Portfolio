"use client"
import React from 'react'

const Resume = () => {

    const pdfUrl = '/resume/resume_4.3.pdf'; 

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'my-document.pdf'; 
      link.click();
    };

  return (
    <div>
    <button style={{textAlign:'center',width:'100%'}} onClick={handleDownload}>Download PDF</button>
    <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
  </div>
  )
}

export default Resume