import * as React from "react";
import { ModalBase } from "#shared/components/ModalBase";

import { useTranslation } from "react-i18next";

import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import arrowLeft from '#assets/shared/arrow-left.svg' ;

import { 
    ModalContainer,
    ModalContent,
    modalBaseStyles,
    DescriptionDiv,
    LogoDiv,
    LabelDiv,
    BoldDiv,
    Grid,
    GridItem,
    SectionDiv,
    ModalFooter,
    MarkDiv,
    ArrowBackDiv
} from './styled' ;

const SpeakModal = ({ closeModal }) => {

    const { t } = useTranslation("reserve-cask");

    const defaultFrom = {
        year: 2019,
        month: 3,
        day: 4,
    };
    
    const defaultTo = {
        year: 2019,
        month: 3,
        day: 7,
    };

    const defaultRange = {
        from: defaultFrom,
        to: defaultTo,
    };

    const [selectedDayRange, setSelectedDayRange] = React.useState(
        defaultRange
    );
    
    return (
        <>
            <ModalBase isOpen onClose={closeModal} borderRadius={20} additionalStyles={modalBaseStyles}>
                <ModalContainer>
                    <ModalContent>
                        <MarkDiv>
                            <span style={{fontSize : '8px'}}>POWERED BY</span><br/>
                            Calendly
                        </MarkDiv>
                        <Grid >
                            <GridItem>
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', height: '100%'}}>
                                    <DescriptionDiv>
                                        <ArrowBackDiv>
                                            <img src={arrowLeft} />
                                        </ArrowBackDiv>
                                        <LogoDiv>
                                            Vino Vest
                                        </LogoDiv>
                                        <LabelDiv>
                                            Vinovest
                                        </LabelDiv>
                                        <BoldDiv>
                                            North America Advisors
                                        </BoldDiv>
                                        <LabelDiv>
                                            15&nbsp;min
                                        </LabelDiv>
                                        <SectionDiv>
                                            Please see our calendar here for our US-based Portfolio Advisers. Feel free to book a call at a time that works best for you.
                                        </SectionDiv>
                                        <SectionDiv>
                                            Please only book a call if you have investment-related questions. For all account and support-related questions, please email us directly at <a href='#'>support@vinovest.co</a>
                                        </SectionDiv>
                                    </DescriptionDiv>
                                </div>
                            </GridItem>
                            <GridItem>
                                <BoldDiv
                                    style={{marginBottom : '20px'}}
                                >
                                    Select a Date &amp; Time
                                </BoldDiv>
                                <Calendar
                                    value={selectedDayRange}
                                    onChange={setSelectedDayRange}
                                    shouldHighlightWeekends
                                    calendarClassName="responsive-calendar" // added this
                                />
                            </GridItem>
                        </Grid>
                    </ModalContent>
                    <ModalFooter>
                        <a href='#'>Cookie settings</a>
                    </ModalFooter>
                </ModalContainer>
            </ModalBase>
        </>
    )
}

export default SpeakModal;
