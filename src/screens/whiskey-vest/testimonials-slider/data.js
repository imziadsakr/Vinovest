import React from "react";
import i18n from "i18next";
import WorthPNG from "#assets/whiskey-vest/worth.png";
import KnightPNG from "#assets/whiskey-vest/knight.png";
import BarronJPG from "#assets/whiskey-vest/barron.jpg";

export const testimonialsSliderData = [
    {
        to: "/advisory-council",
        id: 0,
        src: WorthPNG,

        title: i18n.t("whiskey-vest:partners-are-saying.Worth.title"),
        description: i18n.t("whiskey-vest:partners-are-saying.Worth.description"),
        bottomText: (
            <>
                <span>{i18n.t("whiskey-vest:partners-are-saying.Worth.bottomText")}</span>
            </>
        ),
    },
    {
        to: null,
        id: 1,
        src: KnightPNG,
        title: i18n.t("whiskey-vest:partners-are-saying.Knight.title"),
        description: i18n.t("whiskey-vest:partners-are-saying.Knight.description"),
        bottomText: (
            <>
                <span>{i18n.t("whiskey-vest:partners-are-saying.Knight.bottomText")}</span>
            </>
        ),
    },
    {
        to: "/advisory-council",
        id: 2,
        src: BarronJPG,
        title: i18n.t("whiskey-vest:partners-are-saying.Barron.title"),
        description: i18n.t("whiskey-vest:partners-are-saying.Barron.description"),
        bottomText: (
            <>
                <span>{i18n.t("whiskey-vest:partners-are-saying.Barron.bottomText")}</span>
            </>
        ),
    },
];
