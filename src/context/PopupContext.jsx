import React, { createContext, useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ApplyForm from '../components/form/ApplyForm';

const PopupContext = createContext();

export const usePopup = () => {
    return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState(null);

    const openPopup = (popupContent) => {
        setContent(popupContent);
        setShow(true);
    };

    const closePopup = () => {
        setShow(false);
        setContent(null);
    };

    return (
        <PopupContext.Provider value={{ openPopup }}>
            {children}
            <Modal show={show} onHide={closePopup} centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='p-0'><ApplyForm/></Modal.Body>
            </Modal>
        </PopupContext.Provider>
    );
};
