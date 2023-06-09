import React from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { toggleModal } from '../features/modalSlice';


const Modal = (props) => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
      
  
  function handleBackClick() {
        navigate("/");
        dispatch(toggleModal);
      }
  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="cancel-container"
          type="button"
          onClick={() => handleBackClick()}
        >
          {"< "}Back
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal