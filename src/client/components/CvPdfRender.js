import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';


export default function CvPdfRender() {
    const [cvPdfFile, setCvPdfFile] = useState()
console.log(cvPdfFile)
    const {id} = useParams();
    useEffect (() => {
        (async() => { 
          const response = await fetch('/api/cv');
          const data = await response.json();
          const specificCv = data.find((cv)=>cv.fk_user_id === id) 
                                console.log(specificCv)
            const src = `https://docs.google.com/viewer?url=${specificCv.file_url}&embedded=true`;
            setCvPdfFile(src)
        })()
     },[])

    return (
        <div>
            <iframe title="CV" width="500" height="800" src={cvPdfFile} />
        </div>
    )
}
