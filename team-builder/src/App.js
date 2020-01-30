import React, {useState} from 'react';
import './App.css';

import Form from "./components/Form";
import Members from "./components/Members";

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: "Krystal",
    email: "kryguzman@gmail.com",
    role: "student"
      },
    {id: 2,
    name: "Krystal Guzman",
    email: "something@gmail.com",
    role: "Web Dev"
      }
    ]);

  const submitMember = member => setMembers([...members, member]);

  const memberToEdit = updatedMember =>
    setMembers([
      ...members.map(member => {
        if (member.id === updatedMember.id) {
          return updatedMember;
        }
        return member;
      })
    ]);
    console.log(`members`, members);

  return (
    <div className="App">
        <Form add={submitMember} />
        {members.map((member, i) => (
          <Members member={member} key={i} memberToEdit={memberToEdit} />
        ))}
    </div>
  );
}

export default App;