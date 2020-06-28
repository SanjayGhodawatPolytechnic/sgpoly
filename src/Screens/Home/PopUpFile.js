import React, { useState } from 'react'
import '../About/css/Popup.css'
import { Document, Page } from 'react-pdf';


export default function PopUpFile() {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return (
        <div className='popup'>  
            <div className='popup\_inner'>
                <div className="container">
                    <div>
                        <Document
                            file={URL= "https://firebasestorage.googleapis.com/v0/b/sgpoly-ae692.appspot.com/o/files%2F5adf2e83-c6b2-47bf-b4ea-c1637a8ad15b?alt=media&token=d18c13f3-5f48-4ce5-8125-68f7c2f5f1bc"}
                            
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                        </div>
                </div>
            </div>
            </div>            
    )
}
