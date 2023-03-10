import { useContext } from "react";
import {
  secondContentStyle,
  btnSectionStyle,
  deleteBtnStyles,
} from "../../assets/styles/content-two.css";
import Modal from "../modal/index";
import useToggleModal from "../../hooks/useTogleModal";
import { ThemeContext } from "../../context/themeContext";
import { VariantInterface } from "../../model/common.interface";

const ContentTwo = () => {
  const { theme } = useContext(ThemeContext) as VariantInterface;
  const {
    toggleModal,
    showCTAModal,
    showRemoveModal,
    showDeleteModal,
    origin,
    disabledValue,
    disabledShowValue,
    removeCount,
    deleteCount,
  } = useToggleModal();

  return (
    <div className={secondContentStyle}>
      <div>
        <div className={btnSectionStyle}>
          <button
            onClick={() => toggleModal("Single CTA")}
            className={deleteBtnStyles[theme]}
          >
            Single CTA
          </button>
          <button
            onClick={() => toggleModal("Remove Modal")}
            className={deleteBtnStyles[theme]}
          >
            Remove {removeCount}
          </button>
          <button
            className={deleteBtnStyles[theme]}
            onClick={() => toggleModal("Delete Modal")}
          >
            {disabledShowValue ? `${disabledValue}` : `Delete ${deleteCount}`}
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
