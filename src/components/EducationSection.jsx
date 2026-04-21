import '../styles/EducationSection.css';
import { useState } from 'react';
import Button from './Button';
import EducationSectionForm from './EducationSectionForm';
import EducationSectionDisplay from './EducationSectionDisplay';
export default function EducationSection() {
  const [education, setEducation] = useState([
    {
      schoolName: 'Loyola University Chicago',
      degree: 'Psychology',
      startDate: '2010-08-01',
      endDate: '2014-05-01',
      id: crypto.randomUUID(),
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newEducation = {
      id: e.target.children.id.value,
      schoolName: e.target.elements.schoolName.value,
      degree: e.target.elements.degree.value,
      startDate: e.target.elements.startDate.value,
      endDate: e.target.elements.endDate.value,
    };
    setEducation([...education, newEducation]);
    console.log(education);
    e.target.children.id.value = '';
    e.target.elements.schoolName.value = '';
    e.target.elements.degree.value = '';
    e.target.elements.startDate.value = '';
    e.target.elements.endDate.value = '';
    setIsModalOpen(false);
  }

  return (
    <>
      <section>
        <h2>Education</h2>
        {education.map((school) => {
          return (
            <EducationSectionDisplay
              key={school.id}
              id={school.id}
              schoolName={school.schoolName}
              degree={school.degree}
              startDate={school.startDate}
              endDate={school.endDate}
              setEducation={setEducation}
              education={education}
            />
          );
        })}
        <div className='buttonDiv'>
          <Button
            text={'Add New Education'}
            backgroundColor={'#4caf50'}
            clickHandler={toggleModal}
          />
        </div>
        <EducationSectionForm
          dialogIsOpen={isModalOpen}
          handleSubmit={handleSubmit}
        />
      </section>
    </>
  );
}
