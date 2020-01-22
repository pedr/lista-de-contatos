import React, { useState } from 'react';

const ContactForm = ({ userListState }) => {

  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneList, setPhoneList] = useState([]);
  const [userList, setUserList] = userListState;

  const onClickSubmit = e => {
    e.preventDefault();

    setUserList([
      ...userList,
      {
        name,
        document,
        phones: phoneList
      }
    ])

    cleanFields();
  }

  const cleanFields = () => {
    setName("");
    setDocument("");
    setPhoneList([]);
  }

  const setOnChange = setState => event => {
    setState(event.currentTarget.value);
  } 

  const addPhoneToList = event => {
    event.preventDefault();

    const { value } = event.currentTarget;

    setPhoneList(
      [
        ...phoneList,
        value
      ]
    )

    setPhone("")
  }
  

  return (
    <form onSubmit={onClickSubmit}>
      <input type="text" value={name} onChange={setOnChange(setName)} />
      <br/>
      <input type="text" value={document} onChange={setOnChange(setDocument)} />
      <br/>
      <button onClick={addPhoneToList}>+</button>
      <input type="text" value={phone} onChange={setOnChange(setPhone)} />
      <button>Send</button>
    </form>
  )
}

export default ContactForm;