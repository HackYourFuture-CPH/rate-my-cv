import React from 'react'
import './SearchFilter.styles.css'
import triangle from '../../assets/images/icons/triangle.svg'; 
import star from '../../assets/images/icons/star.svg'; 
import { Slider } from '@material-ui/core'


export default function SearchFilter () {

    let title=["Full Stack","Frontend Developer","Backend Developer"];
    let datePosted=["Past 24 hours","Past week","Past Month","Any Time"];
    let minimumEvaluation=["Excellent 5","Very good 4.5","Good 4","Reasonable 3.5","Okay 0"];
    
    return (

    
    <div className="container">
         <div className="title"><h2>Title <img src={triangle} alt="triangle icon"/></h2></div>
            <div className="input">
                {title.map(result=>(
                    <div>
                         <input type="radio" values={result} name="radiovalues" />
                             <b>{result}</b>
                    </div>
                                  //Date posted frame
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
                                 //Minimum evaluation frame
              ))}
         </div>
        <hr/>

        <div className="minimum"><h4>Minimum evaluation  <img src={triangle} alt="triangle icon"/></h4> </div>
             <div className="inputMinimum">
                {minimumEvaluation.map(result=>(
                     <div>
                        <input type="radio" values={result} name="radiominimum" />
                            <b>{result}<img src={star} alt="triangle icon"/></b>
         </div>
                                  //Number of reviews
         ))}</div>
          <hr/>
                <div className="review"><h5>Number of reviews</h5></div>
                <div className="range"> <a id="cero">0</a> <a id="hundred"> ≥ 100</a> </div>
         <Slider  defaultValue={0} className="slider"/>
    </div>
    )
  }