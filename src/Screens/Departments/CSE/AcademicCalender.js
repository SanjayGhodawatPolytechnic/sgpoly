import React from 'react';
import Main from '../../../ReusableComponents/Main';

import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';
import PDFViewer from 'pdf-viewer-reactjs'
import { useState } from 'react';
import "./CSS/academiccalender.css"

const AcademicCalender = () => {

    const [isPDFopen, setIsPDFopen] = useState(true)
    const [currentlyOpenPDFURL, setCurrentlyopenPDFURL] = useState('https://arxiv.org/pdf/quant-ph/0410100.pdf')

    const openPDF = (pdfURL) => {
        setCurrentlyopenPDFURL(pdfURL);
        setIsPDFopen(true);
    }

    const closePDF = () => {
        setIsPDFopen(false);
    }

    const PDFModal = () => (
        <div className="pdf-modal" onClick={closePDF}>
            <div className="close-btn" onClick={closePDF}><i aria-hidden="true" className="fas fa-times-circle fa-2x"></i></div>
            <div className="container" onClick={e => {
                e.stopPropagation();
            }}>
                <PDFViewer 
                document={{
                    url: currentlyOpenPDFURL
                }}
                navbarOnTop={true}

                />
                </div>
        </div>
    )
    return (
        <Main className="container-lg">
            <div class="row">
                <DeptMenu dept='Computer Science' subMenu={NavLinks} />
                {isPDFopen && (<PDFModal/>)}
            </div>
        </Main>
    );
}

export default AcademicCalender;
