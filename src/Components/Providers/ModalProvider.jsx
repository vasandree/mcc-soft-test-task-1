import {createContext, useContext, useState} from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

// eslint-disable-next-line react/prop-types
export const ModalProvider = ({ children }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
};