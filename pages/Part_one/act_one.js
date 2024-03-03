import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

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
    setRight(true)
    pageno - 1 < 1 ? setLeft(false) : setPageno(pageno-1)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages)
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {left && <div onClick={previousPage} style={{marginTop: 'auto', marginBottom: 'auto'}}><img src='../left-arrow.png' height={40} width={50} /></div>}
          <Document file='/part_one_act_one.pdf' onLoadError={console.error} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageno} height={300} width={500} renderAnnotationLayer={false} renderTextLayer={false}/>
          </Document>
        {right && <div onClick={nextPage} style={{marginTop: 'auto', marginBottom: 'auto'}}><img src="../right-arrow.png" height={40} width={50} /></div>}
      </div>
    </div>
  );
}
