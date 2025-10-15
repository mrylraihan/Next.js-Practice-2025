import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';
import TestComp from './TestComp';

function Todo(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
      {showModal && <TestComp onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo;
