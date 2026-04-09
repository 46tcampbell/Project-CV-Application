import '../styles/EducationSection.css';
import { useState } from 'react';
import EducationSectionForm from './EducationSectionForm';
import EducationSectionDisplay from './EducationSectionDisplay';

export default function EducationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schoolName, setSchoolName] = useState('Loyola University Chicago');
  const [degree, setDegree] = useState('Psychology');
  const [startDate, setStartDate] = useState('2010-08-01');
  const [endDate, setEndDate] = useState('2014-05-01');

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegree(e.target.value);
  }
  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }
  function handleEndDateChange(e) {
    setEndDate(e.target.value);
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
      <EducationSectionForm
        dialogIsOpen={isModalOpen}
        handleSubmit={handleSubmit}
        handleSchoolNameChange={handleSchoolNameChange}
        handleDegreeChange={handleDegreeChange}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        schoolName={schoolName}
        degree={degree}
        startDate={startDate}
        endDate={endDate}
      />
      <EducationSectionDisplay
        toggleModal={toggleModal}
        schoolName={schoolName}
        degree={degree}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
}
