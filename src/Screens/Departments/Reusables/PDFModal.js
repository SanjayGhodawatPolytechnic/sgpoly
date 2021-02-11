import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFModal = ({url = "", closePDF}) => {
    
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState(null)
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const loadPDF = () => {

        let data = {
            pdfurl: "https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/files%2F393c1d8c-6dd6-4475-90bd-ef8e3384b9f8?alt=media&token=27da61ac-2325-404d-98a1-df4168366590"
        }
        
        fetch("http://localhost:3002/api/getPDF", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(async (res) => {
            let blb = await res.blob()
            let pdffile = new File([blb], "testfile.pdf");
            console.log(pdffile);
            setFile(pdffile)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        console.log(numPages)
    }, [numPages])
    
    useEffect(() => {
        loadPDF();
    }, [])
return (
    <div className="pdf-modal" onClick={closePDF}>
        <div className="close-btn" onClick={closePDF}><i aria-hidden="true" className="fas fa-times-circle fa-2x"></i></div>
        {file && (
            <div className="container p-0 d-flex justify-content-center align-items-center" onClick={e => {
                e.stopPropagation();
            }}>     
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={err => {
                            console.log(err)
                        }}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                </div>
        )}
    </div>
)
        }

export default PDFModal;
