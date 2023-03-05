import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { HeroTitle, HeroDescription } from "#shared/ui/Typography/styled";
import WithLayersButton from "#shared/ui/WithLayersButton";
import MetaTagsReplacer from "#shared/components/MetaTagsReplacer";
import WhiskeyBoxs from "../../assets/whiskey-vest/whiskeyBoxs.png";
import { useCreateRoutingCallback } from "#shared/hooks";

const Head = () => {
    const { t } = useTranslation("whiskey-vest");

    const routeToReservCask = useCreateRoutingCallback("/reserve-cask", { refresh: false });

    return (
        <HeadContainer>
            <MetaTagsReplacer
                title="Why Invest In Wine | Vinovest"
                description="Find out why wine is a perfect long-term investment that consistently outperforms the stock market. Discover why Vinovest is the easiest way to invest in wine."
            />
            <HeroTitle>{t("whiskey_vest.outpreform.hero_title")}</HeroTitle>
            <HeroDescription>{t("whiskey_vest.outpreform.hero_description")}</HeroDescription>
            <WithLayersButton
                onClick={routeToReservCask}
            >{t("whiskey_vest.outpreform.hero_button")}</WithLayersButton>
            <div className="gup" />
        </HeadContainer>
    );
};

const HeadContainer = styled.div`
    padding-top: 180px;
    padding-right: 8.888%;
    padding-left: 8.888%;
    background-color: #3C400C;
    color: #efddc7;
    height: 1003px;
    background-image: url(${WhiskeyBoxs});
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: 90%;
    text-align: center;

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

    @media screen and (max-width: 991px) {
        height: 716px;
        padding-right: 6.666%;
        padding-left: 6.666%;
        padding-top: 120px;
    }

    @media screen and (max-width: 767px) {
        height: auto;
        background-size: 220%;
        background-position: bottom left 12%;

        .gup {
            display: block;
            height: 92vw;
        }
    }
`;

export default Head;
