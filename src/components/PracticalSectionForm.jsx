import '../styles/PracticalSectionForm.css';
import Button from './Button';

export default function PracticalSectionForm({
  dialogIsOpen,
  handleSubmit,
  // handlecompanyNameChange,
  // handlepositionTitleChange,
  // handleStartDateChange,
  // handleEndDateChange,
  companyName = '',
  startDate = '',
  endDate = '',
  positionTitle = '',
  responsibility1 = '',
  responsibility2 = '',
  responsibility3 = '',
  id = crypto.randomUUID(),
}) {
  return (
    <>
      <dialog open={dialogIsOpen}>
        <form method='dialog' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='companyName'>Company Name: </label>
            <input
              type='text'
              name='companyName'
              id='companyName'
              defaultValue={companyName}
              // onChange={handlecompanyNameChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='positionTitle'>Position Title: </label>
            <input
              type='text'
              name='positionTitle'
              id='positionTitle'
              defaultValue={positionTitle}
              // onChange={handlepositionTitleChange}
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
          <div className='form-group'>
            <label htmlFor='responsibility1'>Responsibility 1: </label>
            <input
              type='text'
              name='responsibility1'
              id='responsibility1'
              defaultValue={responsibility1}
              // onChange={handleresponsibility1Change}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='responsibility2'>Responsibility 2: </label>
            <input
              type='text'
              name='responsibility2'
              id='responsibility2'
              defaultValue={responsibility2}
              // onChange={handleresponsibility1Change}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='responsibility3'>Responsibility 3: </label>
            <input
              type='text'
              name='responsibility3'
              id='responsibility3'
              defaultValue={responsibility3}
              // onChange={handleresponsibility1Change}
            />
          </div>
          <input type='hidden' name='id' id='id' value={id} />
          <div className='buttonDiv'>
            <Button text={'Cancel'} backgroundColor={'#8f8b8b'} />
            <Button text={'Submit'} backgroundColor={'#4caf50'} />
          </div>
        </form>
      </dialog>
    </>
  );
}
