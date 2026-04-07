import '../styles/Modal.css';
import GeneralInfoForm from './GeneralInfoForm';
// import Button from './Button';

export default function Modal({ form }) {
  let renderedForm;
  if (form === 'general') {
    renderedForm = <GeneralInfoForm />;
  }

  return (
    <>
      <dialog>{renderedForm}</dialog>
    </>
  );
}
