import React from 'react';
import PropTypes from 'prop-types';
import './TitleDesc.styles.css'

const TitleDesc = ({title,description}) =>{ return (<div> <h3 className="title">{title}</h3>
                                           <p className="description">{description}</p></div> ); };

export default TitleDesc

TitleDesc.propTypes = {
title: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
};