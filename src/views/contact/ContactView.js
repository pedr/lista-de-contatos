import React, { useState } from 'react';

import { ContactForm, ContactList } from './components';

const ContactView = () => {

  const [users, setUsers] = useState([]);

  return (
    <>
      <ContactForm userListState={[users, setUsers]}/>
      <ContactList usersList={users}/>
    </>
  )
}

export default ContactView;