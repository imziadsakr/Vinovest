import * as React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Quality } from "#shared/ui/QualityValueList";

import InsuredPNG from "#assets/reserve-cask/Insured.png";
import SamplePNG from "#assets/reserve-cask/Sample.png";
import RecessionPNG from "#assets/reserve-cask/RecessionProof.png";
import VisitPNG from "#assets/reserve-cask/Visit.png";
import BottledPNG from "#assets/reserve-cask/Bottled.png";
import HistoricalPNG from "#assets/reserve-cask/Historical.png";
import InvestModal from "../invest-modal";

const QualityWrapper = () => {
    const { t } = useTranslation("reserve-cask");

    const [openInvestModal, setOpenInvestModal] = React.useState(false) ;

    const closeModal = () => {
        setOpenInvestModal(!openInvestModal) ;
    }

    const clickEvent = () => {
        setOpenInvestModal(true) ;
    }

    const valueProps = [
        {
            description: i18n.t("reserve-cask:reserve_cask.benefits.description_1"),
            svg: InsuredPNG,
            clickEvent : clickEvent
        },
        {
            description: i18n.t("reserve-cask:reserve_cask.benefits.description_2"),
            svg: SamplePNG,
            clickEvent : clickEvent
        },
        {
            description: i18n.t("reserve-cask:reserve_cask.benefits.description_3"),
            svg: RecessionPNG,
            clickEvent : clickEvent
        },
        {
            description: i18n.t("reserve-cask:reserve_cask.benefits.description_4"),
            svg: VisitPNG,
            clickEvent : clickEvent
        },
        {
            description: i18n.t("reserve-cask:reserve_cask.benefits.description_5"),
            svg: BottledPNG,
            clickEvent : clickEvent
        },
        {
            description: i18n.t("reserve-cask:reserve_cask.benefits.description_6"),
            svg: HistoricalPNG,
            clickEvent : clickEvent
        },
    ];

    return (
        <>
            <Quality
                valueProps={valueProps}
                title={t("reserve_cask.benefits.title")}
            />
            {
                openInvestModal && <InvestModal 
                    isModal={openInvestModal}
                    closeModal={closeModal}
                />
            }
        </>
    );
};

export default QualityWrapper;
