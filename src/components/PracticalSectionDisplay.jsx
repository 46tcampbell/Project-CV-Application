import '../styles/PracticalSectionDisplay.css';
import { useState } from 'react';
import PracticalSectionForm from './PracticalSectionForm';
import Button from './Button';

export default function PracticalSectionDisplay({
  companyName,
  positionTitle,
  responsibility1,
  responsibility2,
  responsibility3,
  startDate,
  endDate,
  setWork,
  work,
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

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.dir(e);
    console.log(work);
    const updatedArray = work.map((company) =>
      company.id === e.target.elements.id.value
        ? {
            ...company,
            id: e.target.elements.id.value,
            companyName: e.target.elements.companyName.value,
            positionTitle: e.target.elements.positionTitle.value,
            startDate: e.target.elements.startDate.value,
            endDate: e.target.elements.endDate.value,
            responsibility1: e.target.elements.responsibility1.value,
            responsibility2: e.target.elements.responsibility2.value,
            responsibility3: e.target.elements.responsibility3.value,
          }
        : { ...company }
    );
    setWork(updatedArray);
    setIsModalOpen(false);
  }

  function deleteWork(e) {
    console.dir(e.target.dataset.id);
    const updatedArray = work.filter(
      (company) => company.id !== e.target.dataset.id
    );
    setWork(updatedArray);
  }

  return (
    <>
      <PracticalSectionForm
        dialogIsOpen={isModalOpen}
        handleSubmit={handleSubmit}
        companyName={companyName}
        positionTitle={positionTitle}
        startDate={startDate}
        endDate={endDate}
        id={id}
        responsibility1={responsibility1}
        responsibility2={responsibility2}
        responsibility3={responsibility3}
      />
      <div className='schoolDiv'>
        <div className='schoolNameButtonDiv'>
          <h3>{companyName}</h3>

          <div className='buttonDiv'>
            <Button
              text={'✎'}
              backgroundColor={'#9e9e9e'}
              clickHandler={toggleModal}
            />
            <Button
              text={'❌'}
              backgroundColor={'#9e9e9e'}
              clickHandler={deleteWork}
              dataId={id}
              color='#f44336'
            />
          </div>
        </div>
        <div className='studyDiv'>
          <p>{positionTitle}</p>
          <p>{readableStartDate + ' - ' + readableEndDate}</p>
        </div>
        <div className='mainResponsibilitiesDiv'>
          <ul>
            <li>{responsibility1}</li>
            {responsibility2 ? <li>{responsibility2}</li> : null}
            {responsibility3 ? <li>{responsibility3}</li> : null}
          </ul>
        </div>
      </div>
    </>
  );
}

// const test = () => alert('Hey');
