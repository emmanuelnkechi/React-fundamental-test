import {
  modal,
  modalContent,
  modalTitle,
  modalBody,
  modalFoot,
  modalFootOkBtn,
  modalFootCancelBtn,
  modalFootRemoveBtn,
  modalFootDeleteBtn,
} from "../../assets/styles/modal.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "../../assets/styles/modal.css";

type Props = {
  showModal: boolean;
  modalChange: (value: string) => void;
  title: string;
  body: string;
  okBtn?: boolean;
  removeBtn?: boolean;
  cancelBtn?: boolean;
  deleteBtn?: boolean;
};

const Modal = ({
  showModal,
  modalChange,
  title,
  body,
  okBtn = false,
  removeBtn = false,
  cancelBtn = false,
  deleteBtn = false,
}: Props) => {
  return (
    <div
      id="myModal"
      className={modal}
      style={{
        ...assignInlineVars({
          [styles.display]: showModal ? "block" : "none",
        }),
      }}
    >
      <div className={modalContent}>
        {title && <div className={modalTitle}>{title}</div>}
        {body && (
          <div className={modalBody}>
            <p>{body}</p>
          </div>
        )}
        <div className={modalFoot}>
          {okBtn && (
            <button
              className={modalFootOkBtn}
              onClick={() => modalChange("Ok")}
            >
              OK
            </button>
          )}
          {cancelBtn && (
            <button
              className={modalFootCancelBtn}
              onClick={() => modalChange("Cancel")}
            >
              Cancel
            </button>
          )}
          {removeBtn && (
            <button
              className={modalFootRemoveBtn}
              onClick={() => modalChange("Remove")}
            >
              Remove
            </button>
          )}
          {deleteBtn && (
            <button
              className={modalFootDeleteBtn}
              onClick={() => modalChange("Delete")}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
