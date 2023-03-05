import * as React from 'react' ;
import styled from 'styled-components';

import { useTranslation } from "react-i18next";

import firstPNG from '#assets/whiskey-vest/first.png' ;
import secondPNG from '#assets/whiskey-vest/second.png' ;
import glassPNG from '#assets/whiskey-vest/glass.svg' ;

const AddFine = () => {

    const { t } = useTranslation("whiskey-vest");

    const pngAssets = [
        firstPNG,
        secondPNG
    ]

    return (
        <>
            <TitleWrapper>
                <TitleDiv>
                    {t("add_fine.title")}
                </TitleDiv>
            </TitleWrapper>
            <AddFineDiv >
                <GlassDiv>
                    <img src={glassPNG} />
                </GlassDiv>
                <LeftDiv>
                    <img src={pngAssets[0]} />
                </LeftDiv>
                <RightDiv>
                    <img src={pngAssets[1]} />
                </RightDiv>
            </AddFineDiv>
        </>
    )
}


const AddFineDiv = styled.div`
    display : flex ;
    justify-content : space-around ;
    position : relative ;

    &:before {
        content: " ";
        position: absolute;
        background-color: #E7CFB5;
        width : 70%;
        height : 60% ;
        top: 20%;
        left: 15%;
        z-index : 3 ;

        @media screen and (max-width: 1055px) {
            width : 90%;
            height : 70% ;
            top: 15%;
            left: 5%;
        }

        @media screen and (max-width: 595px) {
            width : 100%;
            height : 70% ;
            top: 15%;
            left : 0;
        }
    }
`

const LeftDiv = styled.div`
    position : relative ;
    z-index : 5 ;

    & img {
        @media screen and (max-width: 595px) {
            width : 100%;
        }
    }

`

const RightDiv = styled.div`
    padding-top : 200px;
    z-index : 5 ;

    @media screen and (max-width: 1055px) {
        display : none ;
    }
`

const GlassDiv = styled.div`
    z-index : 1 ;
    width : 60%;
    display : flex;
    justify-content : flex-end;
    position : absolute ;

    @media screen and (max-width: 1055px) {
        display : none ;
    }
`

const TitleDiv = styled.div`
    font-family: Roslindaledisplaycondensed,sans-serif;
    font-size: 64px;
    line-height: 137%;
    font-weight: 500;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    text-align: center;
    margin: 0;
    color: #242e35;

    max-width : 600px;

    @media screen and (max-width: 750px) {
        font-size : 48px;
    }
`

const TitleWrapper = styled.div`
    width : 100% ;
    display : flex;
    justify-content : center;

    padding-bottom : 80px;
`
export default AddFine ;