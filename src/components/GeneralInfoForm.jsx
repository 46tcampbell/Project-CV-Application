import '../styles/GeneralInfoForm.css';
import Button from './Button';

export default function GeneralInfoForm({
  dialogIsOpen,
  handleSubmit,
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  name,
  phone,
  email,
}) {
  return (
    <>
      <dialog open={dialogIsOpen}>
        <form method='dialog' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Full Name: </label>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone: </label>
            <input
              type='tel'
              name='phone'
              id='phone'
              value={phone}
              onChange={handlePhoneChange}
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
