import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '@material-ui/core/Button';

const DeleteAccountModal = (props) => {

  return (
    <React.Fragment>
      <Modal onClose={props.onClose}>
        <h2>Are you sure you want to delete your account?</h2>
        <Button
          onClick={props.onClose}
          variant="contained"
          id="Delete"
        >
          Delete
      </Button>
        <Button
          variant="contained"
          color="primary"
        >
          Cancel
      </Button>
      </Modal>

    </React.Fragment>
  )
}

export default DeleteAccountModal;