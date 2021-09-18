import React from 'react';
import ContactBox from './ContactBox';

const ContactsList = ({ contactIds }) => {

  return (
    <div className="contacts-list">
      {contactIds.map(id => (
        <ContactBox id={id} key={id} />
      ))}
    </div>
  )
}

export default ContactsList
