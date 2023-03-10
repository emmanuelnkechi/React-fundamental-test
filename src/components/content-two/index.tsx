import { useState } from "react";
import {
  secondContentStyle,
  btnSectionStyle,
  deleteBtnStyles,
} from "../../assets/styles/content-two.css";
import Modal from "../modal/index";
import useToggleModal from "../../hooks/useTogleModal";

const ContentTwo = () => {
  const {
    toggleModal,
    showCTAModal,
    showRemoveModal,
    showDeleteModal,
    origin,
    disabledValue,
    removeCount,
    deleteCount,
  } = useToggleModal();

  return (
    <div className={secondContentStyle}>
      <div>
        <div className={btnSectionStyle}>
          <button onClick={() => toggleModal("Single CTA")}>Single CTA</button>
          <button onClick={() => toggleModal("Remove Modal")}>
            Remove {removeCount}
          </button>
          <button
            className={deleteBtnStyles}
            onClick={() => toggleModal("Delete Modal")}
            disabled={disabledValue ? true : false}
          >
            {disabledValue
              ? `Disabled ${deleteCount}`
              : `Delete ${deleteCount}`}
          </button>
        </div>
        {showCTAModal && (
          <Modal
            showModal={showCTAModal}
            modalChange={toggleModal}
            title="Information"
            body={`You have clicked the ${origin} button`}
            okBtn={true}
          />
        )}

        {showRemoveModal && (
          <Modal
            showModal={showRemoveModal}
            modalChange={toggleModal}
            title="Remove?"
            body={`Are you sure you want to remove the Remove ${removeCount} button?`}
            cancelBtn={true}
            removeBtn={true}
          />
        )}

        {showDeleteModal && (
          <Modal
            showModal={showDeleteModal}
            modalChange={toggleModal}
            title="Delete?"
            body={`Are you sure you
            want to delete the Delete ${deleteCount} button? This cannot be undone!`}
            cancelBtn={true}
            deleteBtn={true}
          />
        )}
      </div>
    </div>
  );
};

export default ContentTwo;
