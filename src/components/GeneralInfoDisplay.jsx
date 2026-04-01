import '../styles/GeneralInfoDisplay.css';
import Button from './Button';

export default function GeneralInfoDisplay() {
  return (
    <>
      <header>
        <h1>Thomas Campbell</h1>
        <address>
          <a href='mailto:tom.campbell.101@gmail.com'>
            tom.campbell.101@gmail.com
          </a>
          <a href='tel:+16303061542'>+1 (630) 306‑1542</a>
        </address>
        <div className='buttonDiv'>
          <Button text={'Edit'} backgroundColor={'#2196f3'} />
          <Button text={'Submit'} backgroundColor={'#4caf50'} />
        </div>
      </header>
    </>
  );
}
