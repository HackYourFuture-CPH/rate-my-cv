import React, {useState} from 'react';
import ReactDom from 'react-dom';
import Button from '../Button/Button';
import './AddResume.css';
import close from '../../assets/images/closeIcon.svg';

export const AddResume = () => {
const[title,setTitle] = useState('');
const[description,setDescription] = useState('');
const[uploadFile,setUploadaFile] =useState('');

    return ReactDom.createPortal ((
        <div className = "popup">
            <div className = "popup-form">
                <img className="close-icon" src= {close} alt='close Icon'/>
                <h3>Upload new CV</h3>
            <div className='form'>
                <div className = "title">
                    <label>Add Title</label><br/>
                    <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/><br/>
                </div>
                <div className = "description">
                    <label>Description</label><br/>
                    <textarea type='text' value={description} onChange={(e)=> setDescription(e.target.value)}/><br/>
                </div>
                <div className = "upload">
                    <label>Select A file</label><br/>
                    <input type='text' value={uploadFile} onChange={(e)=> setUploadaFile(e.target.value)}/>
                    <Button buttonName='Browse'/><br/>
                </div>
            </div>
            <div className = "reset-upload-btns">
                    <span className = 'reset-btn'><Button buttonName='Reset'/></span>
                    <span className = 'upload-btn'><Button buttonName='Upload'/></span><br/><br/>
                <div className = "add-btn">
                    <Button buttonName='Add resume'/>
                </div>
            </div>
        </div>    
    </div>
    ), document.querySelector('#portal')
    )
}


