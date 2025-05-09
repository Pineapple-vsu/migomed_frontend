import styles from "./modal.module.css";
// import React from "react";
// import { useEffect, useState } from "react";

export const Modal = ({ isOpen, onClose, children, modalHeader }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close_button} onClick={onClose}></button>
        <h2>{modalHeader}</h2>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
