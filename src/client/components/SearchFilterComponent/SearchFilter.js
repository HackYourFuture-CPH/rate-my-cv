import React from 'react'
import './SearchFilter.styles.css'
import triangle from '../../assets/images/icons/triangle.svg'; 
import star from '../../assets/images/icons/star.svg'; 


export default function SearchFilter () {

    const title=["Full Stack","Frontend Developer","Backend Developer"];
    const datePosted=["Past 24 hours","Past week","Past Month","Any Time"];
    const minimumEvaluation=["Excellent 5","Very good 4.5","Good 4","Reasonable 3.5","Okay 0"];
    
    return (

    
    <div className="container">
        <div className="title">
         <h2>Title <img src={triangle} alt="triangle icon"/></h2></div>
            <div className="input">
                {title.map(result=>(
                    <div>
                         <input type="radio" values={result} name="radiovalues" />
                             <b>{result}</b>
                    </div>
                                  
                ))}
            </div>
         <hr/>
         
    <div className="posted"><h3>Date posted <img src={triangle} alt="triangle icon"/></h3> </div>
         <div className="inputDate">
             {datePosted.map(result=>(
                 <div>
                    <input type="radio" values={result} name="radioposted" />
                        <b>{result}</b>
                 </div>
                                 
              ))}
         </div>
        <hr/>

        <div className="minimum"><h4>Minimum evaluation  <img src={triangle} alt="triangle icon"/></h4> </div>
             <div className="inputMinimum">
                {minimumEvaluation.map(result=>(
                     <div>
                        <input type="radio" values={result} name="radiominimum" />
                            <b>{result}<img src={star} alt="star icon"/></b>
                   </div>
         ))}</div>
          <hr/>
                <div className="review"><h5>Number of reviews</h5></div>
                     <div className="range"> 
                         <div className="cero">0</div> 
                            <div className="hundred"> ≥ 100</div> 
                    </div>
                     <div className="slidecontainer">
                         <input type="range" min="1" max="100" value="0" />
                    </div>
                </div>
             )
            }