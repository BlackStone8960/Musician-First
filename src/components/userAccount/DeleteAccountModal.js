import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '@material-ui/core/Button';

const DeleteAccountModal = (props) => {

  return (
    <React.Fragment>
      <Modal onClose={() => props.setIsModalOpen(false)}>
        <div className="delete-account-modal-container">
          <h2 className="alert-message">Are you sure you want to delete your account?</h2>
          <div className="modal-btns-wrapper">
            <Button
              onClick={(e) => props.onDeleteUser(e)}
              variant="contained"
              id="Delete"
              color="secondary"
              className="delete-btn"
            >
              Delete
              </Button>
            <Button
              onClick={() => props.setIsModalOpen(false)}
              variant="contained"
              className="cancel-btn"
            >
              Cancel
              </Button>
          </div>
        </div>
      </Modal>

    </React.Fragment>
  )
}

export default DeleteAccountModal;