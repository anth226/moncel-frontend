import React from 'react';
import { StaticImage } from "gatsby-plugin-image"


const Phone = ({...props}) => <a href="tel:1-855-546-1500" className={`flex items-center gap-x-2 text-inherit ${props.className}`}><StaticImage src="../../../images/usx-phone.svg" alt="phone icon" />1 855-546-1500</a>


export default Phone;
