import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const BackButton = () => {

  const history = useHistory();

  return (
    <Button onClick={() => history.goBack()} variant="contained" color="primary">Back</Button>
  )
}


export default BackButton;