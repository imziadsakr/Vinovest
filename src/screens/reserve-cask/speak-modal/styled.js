import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 904px;
    margin: 0 auto;
    border-radius: 0px;
    background : white ;

    @media screen and (max-width: 1023px) {
        width: 100%;
    }
`;

export const ModalTitle = styled.div`
    padding : 20px ;

    font-size : 32px;
    font-family : RoslindaleDisplayCondensed;

    border : 1px solid lightgray;
    background : white ;
`
export const ModalContent = styled.div`
    padding: 20px ;
    font-family : VinovestMedium,sans-serif ;

    & .Calendar {
        width : auto ;
    }
`
export const ModalFooter = styled.div`
    padding : 0px 20px 20px 20px;
`

export const modalBaseStyles = `
    background: transparent;
    border-radius: 0px;
    box-shadow: none;
    overflow : hidden ;

    padding : 0px !important;

    .closeIcon {
        display : none ;
    }
    
    @media screen and (max-width: 1023px) { 
        max-width: 600px; 
        width: 100%;
        padding: 0 17px;
        background: transparent;
        box-shadow: none;

        .closeIcon {
            right: 40px;
        }
    }
`;

export const MarkDiv = styled.div`
    position : absolute ;

    width : 180px ;
    height : 40px ;

    top : 10px;
    right : -50px;

    text-align : center ;

    background : gray ;
    color : white ;

    transform : rotate(40deg) ;
`
export const DescriptionDiv = styled.div`

`

export const LogoDiv = styled.div`
    width : 70px ;
    height : 70px;

    background : #eff156 ;

    border-radius : 50% ;

    display : flex ;
    align-items : center ;
   
    text-align : center ;
`

export const SectionDiv = styled.div`
    margin-top : 20px;
    margin-bottom : 20px;
`

export const LabelDiv = styled.div`
    margin-top : 20px ;
    color : gray ;
`

export const BoldDiv = styled.div`
    margin-top : 10px ;
    font-weight : 800;
    font-size : 32px;

    font-family : sans-serif ;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 50% auto;
    grid-row-gap : 20px;
    grid-column-gap : 30px ;

    @media screen and (max-width : 1023px) {
        grid-template-columns : 100%;
    }
`

export const GridItem = styled.div`
`

export const ArrowBackDiv = styled.div`
    width : 40px;
    height : 40px;

    border-radius : 50%;

    border : 1px solid lightgray;

    display : flex;
    justify-content : center;
    align-items : center;

    margin-bottom : 20px; 
`