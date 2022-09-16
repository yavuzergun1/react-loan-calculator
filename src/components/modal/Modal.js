import { Button, Modal } from "antd";
import React, { useState } from "react";
import 'antd/dist/antd.css'

const Panel = ({ modalOpen, setModalOpen }) => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);

const ShowModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={ShowModal}>
        Hesapla
      </Button>
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
