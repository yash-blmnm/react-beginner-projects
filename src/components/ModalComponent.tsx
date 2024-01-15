import { ReactNode } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type indexProps = {
    // children: React.HTML
    children: ReactNode
};

const ModalComponent:React.FC<indexProps> = ({ children }) => {
  return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {children}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
  );
}

export default ModalComponent;