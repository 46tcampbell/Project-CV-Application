import '../styles/EducationSectionForm.css';
import Button from './Button';

export default function EducationSectionForm({
  dialogIsOpen,
  handleSubmit,
  handleSchoolNameChange,
  handleDegreeChange,
  handleStartDateChange,
  handleEndDateChange,
  schoolName,
  startDate,
  endDate,
  degree,
}) {
  return (
    <>
      <dialog open={dialogIsOpen}>
        <form method='dialog' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='schoolName'>School Name: </label>
            <input
              type='text'
              name='schoolName'
              id='schoolName'
              value={schoolName}
              onChange={handleSchoolNameChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='degree'>Degree: </label>
            <input
              type='text'
              name='degree'
              id='degree'
              value={degree}
              onChange={handleDegreeChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='startDate'>Start Date: </label>
            <input
              type='date'
              name='startDate'
              id='startDate'
              value={startDate}
              onChange={handleStartDateChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='endDate'>End Date: </label>
            <input
              type='date'
              name='endDate'
              id='endDate'
              value={endDate}
              onChange={handleEndDateChange}
              required
            />
          </div>
          <div className='buttonDiv'>
            <Button text={'Cancel'} backgroundColor={'#8f8b8b'} />
            <Button text={'Submit'} backgroundColor={'#4caf50'} />
          </div>
        </form>
      </dialog>
    </>
  );
}
