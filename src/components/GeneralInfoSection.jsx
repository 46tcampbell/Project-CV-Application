import '../styles/GeneralInfoSection.css';
import { useState } from 'react';
import GeneralInfoForm from './GeneralInfoForm';
import GeneralInfoDisplay from './GeneralInfoDisplay';

export default function GeneralInfoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('Thomas Campbell');
  const [email, setEmail] = useState('tom.campbell.101@gmail.com');
  const [phone, setPhone] = useState('(630) 306-1542');

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setName(e.target.value);
    // setEmail(e.target.value);
    // setPhone(e.target.value);
    setIsModalOpen(false);
  }

  return (
    <>
      <GeneralInfoForm
        dialogIsOpen={isModalOpen}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneChange={handlePhoneChange}
        name={name}
        email={email}
        phone={phone}
      />
      <GeneralInfoDisplay
        toggleModal={toggleModal}
        name={name}
        email={email}
        phone={phone}
      />
    </>
  );
}
