import React from "react";
import Modal from "../ui/Modal";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const MessageSentModal = (props) => (
  <React.Fragment>
    <Modal onClose={() => props.setIsModalOpen(false)}>
      <div className="msg-sent-modal-container">
        <p className="modal-title">Sent!</p>
        <Button variant="contained" color="primary">
          <Link to="filter1" className="back-to-mainpage-btn">
            Back to main page
          </Link>
        </Button>
        <div
          className="sent-modal-close-btn"
          onClick={() => props.setIsModalOpen(false)}
        >
          Close
        </div>
      </div>
    </Modal>
  </React.Fragment>
);

export default MessageSentModal;
