import React from 'react';
import Main from '../../../ReusableComponents/Main';

import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';
// import PDFViewer from 'pdf-viewer-reactjs'
import { useState } from 'react';
import "./CSS/academiccalender.css"
import PDFModal from "../Reusables/PDFModal"
// const PDFViewer = React.lazy(() => import("pdf-viewer-reactjs"))
// const PDFModal = React.lazy(() => import("../Reusables/PDFModal"))

const AcademicCalender = () => {

    const [isPDFopen, setIsPDFopen] = useState(true)
    const [currentlyOpenPDFURL, setCurrentlyopenPDFURL] = useState("https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/files%2F393c1d8c-6dd6-4475-90bd-ef8e3384b9f8?alt=media&token=27da61ac-2325-404d-98a1-df4168366590")


    const openPDF = (pdfURL) => {
        setCurrentlyopenPDFURL(pdfURL);
        setIsPDFopen(true);
    }
    
    const closePDF = () => {
        setIsPDFopen(false);
    }

    return (
        <Main className="container-lg">
            <div class="row">
                <DeptMenu dept='Computer Science' subMenu={NavLinks} />
                {isPDFopen && (<PDFModal url={currentlyOpenPDFURL} closePDF={closePDF} />)}
            </div>
        </Main>
    );
}

export default AcademicCalender;

