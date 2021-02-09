import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export function CvPdfRender() {
    const [cvPdfFile, setCvPdfFile] = useState()
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const response = await fetch('/api/cv');
            const data = await response.json();
            const specificCv = data.find((cv) => cv.fk_user_id === id)
            const src = `https://docs.google.com/viewer?url=${specificCv.file_url}&embedded=true`;
            setCvPdfFile(src)
        })()
    }, [id])

    return (
        <div>
            <iframe title="CV" frameBorder="0" style={{ width: "500px", height: "800px" }} src={cvPdfFile} />
        </div>
    )
}
