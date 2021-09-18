import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMessagesContext } from './Messages';
import Grid from '@material-ui/core/Grid';

const ContactBox = ({ id }) => {
  const { selectedContactId, setSelectedContactId } = useMessagesContext();
  const otherUser = useSelector(state => state.otherAccounts);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (id && otherUser) {
      const matchedUser = otherUser.filter(user => user.id === id)
      matchedUser.length === 1 ? setContact(matchedUser[0]) : console.error('Error happened with matching user and provided ID.');
    }
    // 見つからなかった場合はもう一度データベースから他のユーザーの情報をとってくる？
  }, [id, otherUser])

  // useEffect(() => {
  //   if (contact) {
  //     console.log("contact's info");
  //     console.log(contact);
  //   }
  // }, [contact])

  return (
    <React.Fragment>
      {contact && (
        <div className="contact-box" onClick={() => setSelectedContactId(contact.id)}>
          <Grid container className="contact-container">
            <Grid item xs={3} className="contact-photo-wrapper">
              <div>
                <img src={contact.profile.photoUrl} className="contact-photo" />
              </div>
            </Grid>
            <Grid item xs={9}>
              <div className="contact-name-message">
                <div>
                  {contact.profile.firstName} {contact && contact.profile.lastName}
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  )
}

export default ContactBox
