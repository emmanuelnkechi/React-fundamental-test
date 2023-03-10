import { useState, useEffect } from "react";

const useToggleModal = () => {
  const [showCTAModal, setShowCTAModal] = useState(false);
  const [showRemoveModal, setRemoveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [origin, setOrigin] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [disabledShowValue, setDisabledShowValue] = useState(false);
  const [removeCount, setRemoveCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);

  useEffect(() => {}, [deleteCount]);

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
        setDisabledShowValue(false);
      }
      if (value === "Delete") {
        setDisabledShowValue(true);
        setDisabledValue(`Disabled ${deleteCount}`);
        let count = deleteCount + 1;
        setDeleteCount(count);
      }
    }
    if (value === "Cancel") {
      if (showDeleteModal) {
        let count = deleteCount + 1;
        setDeleteCount(count);
      }

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
    disabledShowValue,
    deleteCount,
  };
};

export default useToggleModal;
