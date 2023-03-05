import * as React from 'react' ;

import { TopImagesDiv } from './styled' ;

import phonePNG from '../../../assets/whiskey-vest/Phone.png' ;
import barelyPNG from '../../../assets/whiskey-vest/Barely.png' ;

const TopImages = () => {
    return  (
        <TopImagesDiv>
            <img src={phonePNG} />
            <img src={barelyPNG} />
        </TopImagesDiv>
    )
}

export default TopImages ;