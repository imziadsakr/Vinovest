import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { HeroTitle, HeroDescription } from "#shared/ui/Typography/styled";
import MetaTagsReplacer from "#shared/components/MetaTagsReplacer";
import ReserveList from "./reserve-list";

const Head = () => {
    const { t } = useTranslation("reserve-cask");

    return (
        <HeadContainer>
            <MetaTagsReplacer
                title="Why Invest In Wine | Vinovest"
                description="Find out why wine is a perfect long-term investment that consistently outperforms the stock market. Discover why Vinovest is the easiest way to invest in wine."
            />
            <HeroTitle>{t("reserve_cask.outpreform.hero_title")}</HeroTitle>
            <HeroDescription>{t("reserve_cask.outpreform.hero_description")}</HeroDescription>
            <ReserveList />
            <div className="gup" />
        </HeadContainer>
    );
};

const HeadContainer = styled.div`
    padding-top: 180px;
    padding-right: 8.888%;
    padding-left: 8.888%;
    color: #efddc7;
    text-align: center;
    position : relative ;
    z-index : 3 ;

    display : flex ;
    flex-direction : column ;
    align-items : center;

    &:before {
        content: " ";
        display: block;
        position: absolute;
        top : 0 ;
        left: 0;

        height : 1003px ;
        width : 100%;

        z-index: -1;
        background-color: #3C400C;
        color: #efddc7;
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: 90%;
        text-align: center;
    }

    .gup {
        display: none;
    }

    ${HeroDescription} {
        margin: 24px auto 40px;
        max-width: 650px;
        width: fit-content;

        @media screen and (max-width: 991px) {
            margin-right: 0;
            margin-left: 0;
        }
    }

    @media screen and (max-width: 995px) {
        height: 2295px;
        padding-right: 6.666%;
        padding-left: 6.666%;
        padding-top: 120px;
    }


    @media screen and (max-width: 911px) {
        height: 2850px;
    }

    @media screen and (max-width: 909px) {
        height: 3050px;
    }

    @media screen and (max-width: 909px) {
        height: 3150px;
    }

    @media screen and (max-width: 440px) {
        padding-left : 0px;
        padding-right : 0px;
    }

    @media screen and (max-width: 444px) {
        height : 3050px;
    }

    @media screen and (max-width: 283px) {
        height : 3450px;
    }
`;

export default Head;
