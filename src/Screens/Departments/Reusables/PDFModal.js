import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFModal = ({url = "", closePDF}) => {
    
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    useEffect(() => {
        console.log(numPages)
    }, [numPages])
    
return (
    <div className="pdf-modal" onClick={closePDF}>
        <div className="close-btn" onClick={closePDF}><i aria-hidden="true" className="fas fa-times-circle fa-2x"></i></div>
        <div className="container" onClick={e => {
            e.stopPropagation();
        }}>
            <div>
                
                <Document
                    file={{
                        url: 'https://thingproxy.freeboard.io/fetch/https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/files%2F393c1d8c-6dd6-4475-90bd-ef8e3384b9f8?alt=media&token=27da61ac-2325-404d-98a1-df4168366590'
                    }}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={err => {
                        console.log(err)
                    }}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>            
            </div>
    </div>
)
        }

export default PDFModal;
