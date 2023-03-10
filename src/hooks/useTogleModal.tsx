import { useState } from "react";

const useToggleModal = () => {
  const [showCTAModal, setShowCTAModal] = useState(false);
  const [showRemoveModal, setRemoveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [origin, setOrigin] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [removeCount, setRemoveCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);

  const toggleModal = (value: string) => {
    if (value === "Single CTA" || value === "Ok") {
      setOrigin(value);
      setShowCTAModal(!showCTAModal);
    }
    if (value === "Remove Modal" || value === "Remove") {
      setRemoveModal(!showRemoveModal);
      if (value === "Remove") {
        let count = removeCount + 1;
        setRemoveCount(count);
      }
    }
    if (value === "Delete Modal" || value === "Delete") {
      setShowDeleteModal(!showDeleteModal);
      if (value === "Delete Modal") {
        let count = deleteCount + 1;
        setDeleteCount(count);
      }
      if (value === "Delete") {
        setDisabledValue(`Disabled ${removeCount}`);
      }
    }
    if (value === "Cancel") {
      setShowCTAModal(false);
      setRemoveModal(false);
      setShowDeleteModal(false);
    }
  };

  return {
    toggleModal,
    showCTAModal,
    showRemoveModal,
    showDeleteModal,
    origin,
    disabledValue,
    removeCount,
    deleteCount,
  };
};

export default useToggleModal;
