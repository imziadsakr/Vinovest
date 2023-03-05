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
`
export const ModalFooter = styled.div`

`

export const modalBaseStyles = `
    background: transparent;
    border-radius: 0px;
    box-shadow: none;

    .closeIcon {
        top : 30px;
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

export const TableContainer = styled.div`
    & table {
        width : 100%;
        & tr {
            &:first-child {
                color : #A8ABAD ;
            }

            & td {
                padding : 20px;
            }
        }
    }

    margin-bottom : 50px;
`
export const Input = styled.input`
    border: 1px solid #EEEEEE;
    border-radius: 3px;
    outline : none ;
    padding : 20px ;
`

export const Button = styled.button`
    width: 100%;
    height: 65px;

    background: ${(props) => (props.color === 'transparent' ? "none" : "#51AC55")};
    border-radius: 10px; 
    border : none ;
    cursor : pointer ;

    color: ${(props) => (props.color === 'transparent' ? "black" : "white")};
    display : flex;
    align-items : center;
    justify-content : center;

    transition : 0.2s;
    text-transform : uppercase;
    font-size : 25px;

    &:hover {
        background: ${(props) => (props.color === 'transparent' ? "lightgray" : "#3a7c3d")};
    }
`

export const FormGroup = styled.div`
    display : flex ;

    padding : 10px ;
    display : flex ;
    gap : 15px;

    &.col {
        align-items : center ;
    }

    &.row {
        flex-direction : column ;
    }

    margin-bottom : 20px;

    & input {
        width : 100%;
    }

    @media screen and (max-width : 310px) {
        flex-direction : column ;
    }
`

export const Label = styled.label`
    color : #A8ABAD;
    font-size : 20px;

    min-width : 150px;
`