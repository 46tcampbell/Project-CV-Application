import '../styles/EducationSectionForm.css';
import Button from './Button';

export default function EducationSectionForm({
  dialogIsOpen,
  handleSubmit,
  schoolName = '',
  startDate = '',
  endDate = '',
  degree = '',
  id = crypto.randomUUID(),
  className = '',
}) {
  return (
    <>
      <dialog open={dialogIsOpen} className={className}>
        <form method='dialog' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='schoolName'>School Name: </label>
            <input
              type='text'
              name='schoolName'
              id='schoolName'
              defaultValue={schoolName}
              // onChange={handleSchoolNameChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='degree'>Degree: </label>
            <input
              type='text'
              name='degree'
              id='degree'
              defaultValue={degree}
              // onChange={handleDegreeChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='startDate'>Start Date: </label>
            <input
              type='date'
              name='startDate'
              id='startDate'
              defaultValue={startDate}
              // onChange={handleStartDateChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='endDate'>End Date: </label>
            <input
              type='date'
              name='endDate'
              id='endDate'
              defaultValue={endDate}
              // onChange={handleEndDateChange}
              required
            />
          </div>
          <input type='hidden' name='id' id='id' value={id} />
          <div className='buttonDiv'>
            <Button text={'Submit'} backgroundColor={'#4caf50'} />
          </div>
        </form>
      </dialog>
    </>
  );
}
