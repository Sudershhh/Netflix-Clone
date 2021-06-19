import React from 'react'
import "./Modal.css"
import {modalActions} from "../features/store/modalSlice"
import {useDispatch} from "react-redux"


const Backdrop = () => {
    const dispatch = useDispatch();
    return <div className="backdrop" onClick={() => {dispatch(modalActions.closeModal())}} />;
  };


const ModalOverlay = (props) => {
    return (
      <div className="modal">
        <div>{props.children}</div>
      </div>
    );
  };



  const Modal = (props) => {
    return (
      <>
        <Backdrop  />
        <ModalOverlay>{props.children}</ModalOverlay>
      </>
    );
  };

export default Modal
