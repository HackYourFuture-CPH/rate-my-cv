import React, {useState} from 'react';
import ReactDom from 'react-dom';
import Button from '../Button/Button';
import './AddResume.css';
import close from '../../assets/images/closeIcon.svg';
import { useStorage } from '../../hooks/fileUploader';

export const AddResume = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [uploadedFile, setUploadedFile] = useState('');

  const types = [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
    'text/plain',
    'text/rtf'
  ];

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    setUploadedFile(selectedFile);

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setUploadedFile(selectedFile);
      } else {
        setUploadedFile(null);
        setError('Please select a pdf file');
      }
    }
  };

  useStorage(uploadedFile);

  return ReactDom.createPortal(
    <div className="popup">
      <div className="popup-form">
        <img className="close-icon" src={close} alt="close Icon" />
        <h3>Upload new CV</h3>
        <div className="form">
          <div className="title">
            <label>Add Title</label>
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="description">
            <label>Description</label>
            <div>
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="upload">
            <label>
              Select a file
              <span className="support-text">
                * File supported DOC,DOCX,PDF,RTF,TXT, 5MB Max
              </span>
            </label>

            <form id="file-chosen">
              <input
                type="file"
                id="file-grabber"
                onChange={handleChange}
                hidden
              />
              <label htmlFor="file-grabber" className="browse-button">
                Browse
              </label>
              <span>{uploadedFile ? uploadedFile.name : ''}</span>
            </form>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            float: 'right',
          }}
        >
          {error && (
            <p style={{ color: 'red', marginRight: '50px' }}>{error}</p>
          )}
          <div className="add-btn"> 
                <Button buttonName="Add resume" />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#portal'),
  );
};
