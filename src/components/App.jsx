import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar"

function createCode(contact) {
  return <Card
    id={contact.id}
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
  />
}

function App() {
  return (
    <div>
      <Avatar
        img="https://avatars.githubusercontent.com/u/73448357?s=400&u=2b0c30d3c83e2f35acec0ed8eecb56a5c3cb2671&v=4"
      />

      <h1 className="heading">My Contacts</h1>
      
      {contacts.map(createCode)}

      {/* 
      <Card
      name={contacts[0].name}
      img={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}
      />

      <Card
      name={contacts[1].name}
      img={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
      />

      <Card
      name={contacts[2].name}    
      img={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
      />
  */}
    </div>

  );
}

export default App;
