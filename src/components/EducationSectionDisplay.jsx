import '../styles/EducationSectionDisplay.css';
import EducationSectionForm from './EducationSectionForm';
import Button from './Button';

export default function EducationSectionDisplay({
  toggleModal,
  schoolName,
  degree,
  startDate,
  endDate,
}) {
  return (
    <>
      <section>
        <h2>Education:</h2>
        <div className='schoolDiv'>
          <h3>{schoolName}</h3>
          <div className='studyDiv'>
            <p>{degree}</p>
            <p>{startDate + ' to ' + endDate}</p>
          </div>
        </div>

        <div className='buttonDiv'>
          <Button
            text={'Edit'}
            backgroundColor={'#2196f3'}
            clickHandler={toggleModal}
          />
        </div>
      </section>
    </>
  );
}

// const test = () => alert('Hey');
