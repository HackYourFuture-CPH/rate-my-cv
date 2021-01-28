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
                <img className="closeicon" src= {close} alt='closeIcon'/>
                <h3>Upload new CV</h3>
            <div className='form'>
                <div className = "title-box">
                    <label>Add Title</label><br/>
                    <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/><br/>
                </div>
                <div className = "description-box">
                    <label>Description</label><br/>
                    <textarea type='text' value={description} onChange={(e)=> setDescription(e.target.value)}/><br/>
                </div>
                <div className = "upload-box">
                    <label>Select A file</label><br/>
                    <input type='text' value={uploadFile} onChange={(e)=> setUploadaFile(e.target.value)}/>
                    <Button buttonName='Browse' backgroundColor = {("backgroundColor", "black")} /><br/>
                </div>
            </div>
            <div className = "reset-uplod-btns">
                    <span className = 'reset-btn'><Button buttonName='Reset' backgroundColor = {("backgroundColor", "white")} /></span>
                    <span className = 'upload-btn'><Button buttonName='Upload' backgroundColor = {("backgroundColor", "#0388fc")} /></span><br/><br/>
                <div className = "add-btn">
                    <Button buttonName='Add resume' backgroundColor = {("backgroundColor", "rgb(233, 86, 29)")} />
                </div>
            </div>
        </div>    
    </div>
    ), document.getElementById('portal')
    )
}


