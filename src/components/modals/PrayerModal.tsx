import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

interface PrayerModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  afterOpenModal?: () => void;
}

function PrayerModal({
  closeModal,
  modalIsOpen,
  afterOpenModal,
}: PrayerModalProps) {
  //   let subtitle;
  //   const [modalIsOpen, setIsOpen] = useState(false);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  //   }

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Prayer Modal</h2>
    </Modal>
  );
}

export default PrayerModal;
