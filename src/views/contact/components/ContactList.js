import React, { useState } from 'react';

const ContactList = ({ usersList }) => {

  const mock = [
    {
      name: 'Pedro Fernandes',
      document: '123.345.678.89',
      phones: [
        '(12)123123-1123',
        '(12)123123-1123'
      ]
    },
    {
      name: 'Joao da Silva',
      document: '113.345.678.89',
      phones: [
        '(12)123123-1123',
        '(12)123123-1123'
      ]
    },
    {
      name: 'Maria Silvana',
      document: '333.345.678.89',
      phones: [
        '(12)123123-1123',
        '(12)123123-1123'
      ]
    }
  ]

  if (!usersList.length) {
    return <div>
      Loading...
    </div>
  } 

  return (
    <>
      {
        usersList.map(({ name, document, phones }, index) => {
            return (
              <div key={index}>
                <p>{name} - {document}</p>
                {
                  phones
                  ? (
                    <ul>
                      { 
                        phones.map((phone, index) => <li key={`${phone}-${index}`}>{phone}</li>)
                      }
                    </ul>
                  )
                  : null
                }         
              </div>
            )
        })
      }
    </>
  )
}

export default ContactList;