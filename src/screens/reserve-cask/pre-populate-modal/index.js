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

const ReservationForm = (props) => {
    const { t } = useTranslation("reserve-cask");

    const {
        handleChangeStep
    } = props ;

    const headFields = [
        "WHISKEY PACKAGES",
        "QUANTITY",
        "EST. PRICE"
    ]

    return (
        <>
            <TableContainer>
                <table >
                    <thead>
                        <tr>
                            {headFields.map((head, index) => (
                                <td key={index}>
                                    {head}
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t(`reserve_modals.whiskey_reservation.title`)}</td>
                            <td>
                                <Input
                                    type='number'
                                />
                            </td>
                            <td>$1,200</td>
                        </tr>
                        <tr>
                            <td>{`New Age Scotch (Lightly Peated)`}</td>
                            <td>
                                <Input
                                    type='number'
                                />
                            </td>
                            <td>$0</td>
                        </tr>
                        <tr>
                            <td>{`New Age Scotch (Heavily Peated)`}</td>
                            <td>
                                <Input
                                    type='number'
                                />
                            </td>
                            <td>${0}</td>
                        </tr>
                        <tr>
                            <td>{`Total`}</td>
                            <td>
                            {`1`}
                            </td>
                            <td>$1,200</td>
                        </tr>
                    </tbody>
                </table>
            </TableContainer>
            <Button
                onClick={() => handleChangeStep('checkout')}
            >
                <div>{"Continue"}</div>
            </Button>
        </>
    )
}

const CheckOut = (props) => {
    const headFields = [
        "WHISKEY PACKAGES",
        "QUANTITY",
        "EST. PRICE"
    ]

    const {
        handleChangeStep
    } = props ;

    return (
        <>
            <TableContainer>
                <table >
                    <thead>
                        <tr>
                            {headFields.map((head, index) => (
                                <td key={index}>
                                    {head}
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>American Whiskey</td>
                            <td>
                                0
                            </td>
                            <td>$1,200</td>
                        </tr>
                        <tr>
                            <td>{`New Age Scotch (Lightly Peated)`}</td>
                            <td>
                                0
                            </td>
                            <td>$0</td>
                        </tr>
                        <tr>
                            <td>{`New Age Scotch (Heavily Peated)`}</td>
                            <td>
                                0
                            </td>
                            <td>${0}</td>
                        </tr>
                        <tr>
                            <td>{`Total`}</td>
                            <td>
                            {`1`}
                            </td>
                            <td>$1,200</td>
                        </tr>
                    </tbody>
                </table>
            </TableContainer>
            <Button
                style={{marginBottom : '10px'}}
                onClick={() => handleChangeStep('verification')}
            >
                <div>{"Continue"}</div>
            </Button>
            <Button
                color='transparent'
                onClick={() => handleChangeStep('whiskey_reservation')}
            >
                <div>{"Back"}</div>
            </Button>
        </>
    )
}

const SuccessConfirm = (props) => {
    const {
        handleChangeStep,
        closeModal
    } = props ;

    const handleSuccess = () => {
        closeModal() ;
    }
    
    return (
        <>
            <div style={{fontSize : '20px'}}>
                Our team will be in touch shortly.
            </div>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px'}}>
                <img src={ConfirmPNG} />
            </div>
            <Button
                onClick={handleSuccess}
            >
                Complete your account step
            </Button>
        </>
    )
}

const CongratsConfirm = () => {
    return (
        <>
            <div style={{fontSize : '20px'}}>
                You qualify to become one of our VIP investors. To skip the line, please schedule a call directly with our team.
            </div>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px'}}>
                <img src={ConfirmPNG} />
            </div>
            <Button>
                book a call
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
                onClick={() => handleChangeStep('checkout')}
            >
                <div>{"Back"}</div>
            </Button>
        </>
    )
}

const PrePopulateModal = ({ closeModal }) => {

    const [step, setStep] = React.useState('whiskey_reservation') ;

    const { t } = useTranslation("reserve-cask");

    return (
        <>
            <ModalBase isOpen onClose={closeModal} borderRadius={20} additionalStyles={modalBaseStyles}>
                <ModalContainer>
                    <ModalTitle>
                        {t(`reserve_modals.${step}.title`)}
                    </ModalTitle>
                    <ModalContent>
                        {
                            step === 'whiskey_reservation' && <ReservationForm handleChangeStep={setStep} />
                        }
                        {
                            step === 'checkout' && <CheckOut 
                                handleChangeStep={setStep}
                            />
                        }
                        {
                            step === 'verification' && <Verification 
                                handleChangeStep={setStep}
                            />
                        }
                        {
                            step === 'success' && <SuccessConfirm
                                handleChangeStep={setStep}
                                closeModal={closeModal}
                            />
                        }
                    </ModalContent>
                </ModalContainer>
            </ModalBase>
        </>
    )
}

export default PrePopulateModal;
