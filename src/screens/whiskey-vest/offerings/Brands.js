import * as React from 'react' ;
import styled from 'styled-components';
import Benriach from '#assets/whiskey-vest/benriach.png';
import Lagavulin from '#assets/whiskey-vest/lagavulin.png';
import Macallan from '#assets/whiskey-vest/macallan.png';
import Highland from '#assets/whiskey-vest/highland.png';
import Ardmore from '#assets/whiskey-vest/ardmore.png';

const Brands = () => {
    const brandsImgList = [
        Benriach,
        Lagavulin,
        Macallan,
        Highland,
        Ardmore
    ]
    
    return (
        <BrandsListDiv>
            {
                brandsImgList.map(brandImg => (
                    <img src={brandImg} />
                ))
            }
        </BrandsListDiv>
    )
}

const BrandsListDiv = styled.div`
    display : flex;
    justify-content : space-around;
    align-items : center;
    flex-wrap : wrap ;
    gap : 30px ;

    padding-left : 50px;
    padding-right : 50px ;

    padding-bottom : 70px;
`

export default Brands ;