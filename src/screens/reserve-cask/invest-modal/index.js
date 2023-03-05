import * as React from "react";
import { ModalBase } from "#shared/components/ModalBase";

import ConfirmPNG from '#assets/reserve-cask/confirm.png' ;

import { useTranslation } from "react-i18next";

import { 
    ModalContainer,
    ModalTitle,
    ModalContent,
    ModalFooter,
    modalBaseStyles,
    TableContainer,
    Input,
    Button,
    FormGroup,
    Label
} from './styled' ;

const HowMuchForm = (props) => {
    const {
        handleChangeStep
    } = props ;

    return (
        <>
            <FormGroup className={'row'}
                style={{marginBottom : '40px'}}
            >
                <Label>
                    Amount
                </Label>
                <Input type='number'
                    placeholder="amount"
                />
            </FormGroup>
            
            <Button
                type="button"
                onClick={() => handleChangeStep('verification')}
            >
                <div>{"Continue"}</div>
            </Button>
        </>
    )
}

const SuccessConfirm = (props) => {
    const {
        closeModal
    } = props ;

    return (
        <>
            <div style={{fontSize : '20px'}}>
                Our team will be in touch shortly.
            </div>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px'}}>
                <img src={ConfirmPNG} />
            </div>
            <Button
                onClick={closeModal}
            >
                Complete your account step
            </Button>
        </>
    )
}

const Verification = (props) => {

    const {
        handleChangeStep
    } = props ;

    return (
        <>
            <FormGroup>
                <Label>First name</Label>
                <Input></Input>
            </FormGroup>
            <FormGroup>
                <Label>Last name</Label>
                <Input></Input>
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input></Input>
            </FormGroup>
            <FormGroup>
                <Label>Phone Number</Label>
                <Input></Input>
            </FormGroup>
            <Button
                style={{marginBottom : '10px'}}
                onClick={() => handleChangeStep('success')}
            >
                <div>{"Continue"}</div>
            </Button>
            <Button
                color='transparent'
                onClick={() => handleChangeStep('verification')}
            >
                <div>{"Back"}</div>
            </Button>
        </>
    )
}

const InvestModal = ({ closeModal }) => {

    const [step, setStep] = React.useState('how_much') ;
    
    const { t } = useTranslation("reserve-cask");

    return (
        <>
            <ModalBase isOpen onClose={closeModal} borderRadius={20} additionalStyles={modalBaseStyles}>
                <ModalContainer>
                    <ModalTitle>
                        {t(`reserve_modals.${step}.title`)}
                    </ModalTitle>
                    <ModalContent>
                        {step === 'how_much' && <HowMuchForm 
                            handleChangeStep={setStep}
                        />}
                        {step === 'verification' && <Verification
                            handleChangeStep={setStep}
                        />}
                        {step === 'success' && <SuccessConfirm 
                            closeModal={closeModal}
                        />}
                    </ModalContent>
                </ModalContainer>
            </ModalBase>
        </>
    )
}

export default InvestModal;
