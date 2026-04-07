import '../styles/GeneralInfoDisplay.css';
import GeneralInfoForm from './GeneralInfoForm';
import Button from './Button';

export default function GeneralInfoDisplay({
  toggleModal,
  name,
  phone,
  email,
}) {
  return (
    <>
      <header>
        <h1>{name}</h1>
        <address>
          <a href={'mailto:' + email}>{email}</a>
          <a href={'tel:+' + phone}>{phone}</a>
        </address>
        <div className='buttonDiv'>
          <Button
            text={'Edit'}
            backgroundColor={'#2196f3'}
            clickHandler={toggleModal}
          />
        </div>
      </header>
    </>
  );
}

// const test = () => alert('Hey');
