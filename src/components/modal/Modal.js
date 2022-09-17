import { Button, Modal } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Modal.scss";

const Panel = ({ modalOpen, setModalOpen }) => {
  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={modalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default Panel;
