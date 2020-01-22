import React, { useState } from 'react';

const ContactForm = ({ userListState }) => {

  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [phoneList, setPhoneList] = useState([]);

  const [userList, setUserList] = userListState;

  const onClickSubmit = e => {
    e.preventDefault();

    if (userList.find(user => user.document == document)) {
      return alert('invalid document')
    }

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
    setPhoneList("");
  }

  const setOnChange = setState => event => {
    setState(event.currentTarget.value);
  } 

  const addPhoneToList = (event, value) => {
    event.preventDefault();

    setPhoneList(
      [
        ...phoneList,
        value
      ]
    )

  }

  const addPhoneFields = (event) => {
    event.preventDefault();

    setPhoneList([
      ...phoneList,
      ""
    ])
  }

  const savePhoneChange = (index) => (phone) => {
    setPhoneList([
      ...phoneList.slice(0, index),
      phone,
      ...phoneList.slice(index + 1, phoneList.length)
    ])
  }

  const PhoneFieldList = ({ save, oldState }) => {

    const [phone, setPhone] = useState(oldState ? oldState : "");

    const onChangeValue = (event) => {
      setPhone(event.currentTarget.value)
      save(event.currentTarget.value)
    }

    return (
      <>
        <br/>
        <input type="text" value={phone} onChange={onChangeValue} />
      </>
    )
  }

  React.useEffect(() => {
    console.log({phoneList})
  }, [phoneList])

  return (
    <form onSubmit={onClickSubmit}>
      <label> Nome </label>
      <input type="text" value={name} onChange={setOnChange(setName)} />
      
      <br/>
      <label> Documento </label>
      <input type="text" value={document} onChange={setOnChange(setDocument)} />
      
      <br/>
      <label> Telefones </label>
      <button onClick={addPhoneFields}>Add more phones</button>
      
      <br/>
      {
        phoneList.length
        ? (
          phoneList.map((phone, index) => {
            return <PhoneFieldList key={index} save={() => savePhoneChange(index)} oldState={phone}/>
          })
        )
        : null
      }
      {JSON.stringify(phoneList, null, 2)}
      <button>Send</button>
    </form>
  )
}

export default ContactForm;