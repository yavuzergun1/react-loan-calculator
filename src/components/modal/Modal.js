import { Button, Modal } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";

const Panel = ({isModalOpen}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

 

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

  return (
    <>
          <Button type="primary"
              >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        // onOk={handleOk}
        // onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default Panel;
