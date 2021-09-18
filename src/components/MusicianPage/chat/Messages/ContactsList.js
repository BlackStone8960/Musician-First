import React from 'react';
import ContactBox from './ContactBox';

const ContactsList = ({ contactIds }) => {

  return (
    <div>
      {contactIds.map(id => (
        <ContactBox id={id} key={id} />
      ))}
    </div>
  )
}

export default ContactsList
