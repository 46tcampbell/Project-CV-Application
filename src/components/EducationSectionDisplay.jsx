import '../styles/EducationSectionDisplay.css';
import { useState } from 'react';
import EducationSectionForm from './EducationSectionForm';
import Button from './Button';

export default function EducationSectionDisplay({
  schoolName,
  degree,
  startDate,
  endDate,
  setEducation,
  education,
  id,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startDateObj = new Date(startDate + 'T00:00'); // Adding T00:00 avoids timezone shifts
  const readableStartDate = startDateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }); // Result: "January 1, 2024"

  const endDateObj = new Date(endDate + 'T00:00'); // Adding T00:00 avoids timezone shifts
  const readableEndDate = endDateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }); // Result: "January 1, 2024"
  function toggleModal(e) {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedArray = education.map((school) =>
      school.id === e.target.children.id.value
        ? {
            ...school,
            id: e.target.children.id.value,
            schoolName: e.target.elements.schoolName.value,
            degree: e.target.elements.degree.value,
            startDate: e.target.elements.startDate.value,
            endDate: e.target.elements.endDate.value,
          }
        : { ...school }
    );
    setEducation(updatedArray);
    setIsModalOpen(false);
  }

  function deleteEducation(e) {
    console.dir(e.target.dataset.id);
    const updatedArray = education.filter(
      (school) => school.id !== e.target.dataset.id
    );
    setEducation(updatedArray);
  }

  return (
    <>
      <EducationSectionForm
        dialogIsOpen={isModalOpen}
        handleSubmit={handleSubmit}
        schoolName={schoolName}
        degree={degree}
        startDate={startDate}
        endDate={endDate}
        id={id}
        clickHandler={toggleModal}
        className='AddNewSchool'
      />
      <div className='schoolDiv'>
        <div className='schoolNameButtonDiv'>
          <h3>{schoolName}</h3>

          <div className='buttonDiv'>
            <Button
              text={'✎'}
              backgroundColor={'#9e9e9e'}
              clickHandler={toggleModal}
            />
            <Button
              text={'❌'}
              backgroundColor={'#9e9e9e'}
              clickHandler={deleteEducation}
              dataId={id}
              color='#f44336'
            />
          </div>
        </div>
        <div className='studyDiv'>
          <p>{degree}</p>
          <p>{readableStartDate + ' - ' + readableEndDate}</p>
        </div>
      </div>
    </>
  );
}

// const test = () => alert('Hey');
