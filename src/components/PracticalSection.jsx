import '../styles/PracticalSection.css';
import { useState } from 'react';
import Button from './Button';
import PracticalSectionForm from './PracticalSectionForm';
import PracticalSectionDisplay from './PracticalSectionDisplay';
export default function PracticalSection() {
  const [work, setWork] = useState([
    {
      companyName: 'Fieldglass',
      positionTitle: 'Business Analyst',
      startDate: '2014-08-01',
      endDate: '2016-10-01',
      responsibility1: 'Did some stuff',
      responsibility2: 'Did some other stuff',
      responsibility3: "Did some other people's stuff",
      id: crypto.randomUUID(),
    },
    {
      companyName: 'Fieldglass',
      positionTitle: 'Business Analyst',
      startDate: '2014-08-01',
      endDate: '2016-10-01',
      responsibility1: 'Did some stuff',
      responsibility2: 'Did some other stuff',
      responsibility3: "Did some other people's stuff",
      id: crypto.randomUUID(),
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newWork = {
      id: e.target.elements.id.value,
      companyName: e.target.elements.companyName.value,
      positionTitle: e.target.elements.positionTitle.value,
      startDate: e.target.elements.startDate.value,
      endDate: e.target.elements.endDate.value,
      responsibility1: e.target.elements.responsibility1.value,
      responsibility2: e.target.elements.responsibility2.value,
      responsibility3: e.target.elements.responsibility3.value,
    };
    setWork([...work, newWork]);
    console.log(work);
    e.target.elements.id.value = '';
    e.target.elements.companyName.value = '';
    e.target.elements.positionTitle.value = '';
    e.target.elements.startDate.value = '';
    e.target.elements.endDate.value = '';
    e.target.elements.responsibility1.value = '';
    e.target.elements.responsibility2.value = '';
    e.target.elements.responsibility3.value = '';
    setIsModalOpen(false);
  }

  return (
    <>
      <section>
        <h2>Work Experience</h2>
        {work.map((company) => {
          return (
            <PracticalSectionDisplay
              key={company.id}
              id={company.id}
              companyName={company.companyName}
              positionTitle={company.positionTitle}
              startDate={company.startDate}
              endDate={company.endDate}
              setWork={setWork}
              work={work}
              responsibility1={company.responsibility1}
              responsibility2={company.responsibility2}
              responsibility3={company.responsibility3}
            />
          );
        })}
        <div className='buttonDiv'>
          <Button
            text={'Add New Work'}
            backgroundColor={'#4caf50'}
            clickHandler={toggleModal}
          />
        </div>
        <PracticalSectionForm
          dialogIsOpen={isModalOpen}
          handleSubmit={handleSubmit}
          className={'AddNewWork'}
        />
      </section>
    </>
  );
}
