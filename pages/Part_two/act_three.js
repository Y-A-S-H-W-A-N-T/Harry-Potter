import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ACT_ONE() {  

  const [pageno,setPageno] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [left,setLeft] =useState(false)
  const [right,setRight] =useState(true)  

  const nextPage = ()=>{
    setLeft(true)
    pageno + 1 > totalPages ? setRight(false) : setPageno(pageno+1)
  }
  const previousPage = ()=>{
    pageno - 1 < 1 ? setLeft(false) : setPageno(pageno-1)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages)
  }

  return (
    <div>
      <div style={{display: 'flex', cursor: 'pointer', justifyContent: 'center'}}>
        {left && <div onClick={previousPage}>◀️</div>}
        {right && <div onClick={nextPage}>▶️</div>}
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Document file='/part_one_act_one.pdf' onLoadError={console.error} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageno} height={300} width={500} renderAnnotationLayer={false} renderTextLayer={false}/>
        </Document>
      </div>
    </div>
  );
}
