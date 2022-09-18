import { Button, Modal } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Modal.scss";
import { UseCalculate } from "../../context/CalculateContext";

const Panel = ({ modalOpen, setModalOpen }) => {
  const { paymentPlan } = UseCalculate();

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Ödeme Planı"
        open={modalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{paymentPlan[0]}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default Panel;
