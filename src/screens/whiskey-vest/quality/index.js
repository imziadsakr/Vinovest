import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useHistory } from "#shared/hooks/useHistory";
import { Quality, CustomModuleContainer, PropContainer, Container, TopTitle } from "#shared/ui/QualityValueList";

import WithLayersButton from "#shared/ui/WithLayersButton";
import expertSvg from "#assets/whiskey-vest/expert.svg";
import lowriskSvg from "#assets/whiskey-vest/lowrisk.svg";
import hasslefreeSvg from "#assets/whiskey-vest/hasslefree.svg";
import morelessSvg from "#assets/whiskey-vest/moreless.svg";

const valueProps = [
    {
        header: i18n.t("whiskey-vest:quality.lowrisk.header"),
        description: i18n.t("whiskey-vest:quality.lowrisk.description"),
        svg: lowriskSvg,
        imgClassName: "img2",
    },
    {
        header: i18n.t("whiskey-vest:quality.hassle.header"),
        description: i18n.t("whiskey-vest:quality.hassle.description"),
        svg: hasslefreeSvg,
        imgClassName: "img3",
    },
    {
        header: i18n.t("whiskey-vest:quality.less.header"),
        description: i18n.t("whiskey-vest:quality.less.description"),
        svg: morelessSvg,
        imgClassName: "img4",
    },
    {
        header: i18n.t("whiskey-vest:quality.expert.header"),
        description: i18n.t("whiskey-vest:quality.expert.description"),
        svg: expertSvg,
        imgClassName: "img1",
    },
];

const QualityWrapper = () => {
    const history = useHistory();
    const { t } = useTranslation("whiskey-vest");

    return (
        <QualityContainer>
            <Quality
                valueProps={valueProps}
                title={t("quality.title")}
                // description={t("quality.topSmallTitle")}
                double
            />
        </QualityContainer>
    );
};

const QualityContainer = styled("div")`
    ${CustomModuleContainer} {
        ${(p) => p.theme.media.greaterThan("767px")`
            display: grid;
            max-width: 895px;
            margin: 64px auto;
            grid-auto-columns: 1fr;
            grid-column-gap: 125px;
            grid-row-gap: 21px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
        `}
    }

    ${Container} {
        padding-top: 100px;
        padding-bottom: 40px;
        @media screen and (max-width: 767px) {
            padding-bottom: 80px;
        }
    }

    ${PropContainer} {
        max-width: 385px;
        min-height: 329px;

        .prop-img {
            height: 122px;
        }

        .img1 {
            max-width: 162px;
        }
        .img2 {
            max-width: 96px;
        }
        .img3 {
            max-width: 150px;
        }
        .img4 {
            max-width: 170px;
        }
        .img5 {
            max-width: 61px;
        }
        .img6 {
            max-width: 136px;
        }

        .prop-desc {
            font-size: 16px;
            line-height: 175%;
            font-family: Favoritstd, sans-serif;
            color: #242e35;
        }

        @media screen and (max-width: 991px) {
            min-height: 229px;
            padding-bottom: 0px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        ${TopTitle} {
            font-size: 64px;
            line-height: 137%;
            font-weight: 700;
        }
    }

    ${WithLayersButton.styled.WithLayers} {
        margin: 0 auto;
        display: block;
    }
`;

export default QualityWrapper;
