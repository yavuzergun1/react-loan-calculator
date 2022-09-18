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
        <table>
          <tr>
            <th> Taksit No</th>
            <th> Taksit Tutarı</th>
            <th> Ana Para</th>
            <th> Kalan Ana Para</th>
            <th> Faiz Tutarı</th>
            <th> KKDF</th>
            <th> BSMV</th>
          </tr>
          <tr>
            <th>{paymentPlan[0] && 1}</th>
            <th>{paymentPlan[0]}</th>
            <th>{paymentPlan[1]}</th>
            <th>{paymentPlan[2]}</th>
            <th>{paymentPlan[3]}</th>
            <th>{paymentPlan[4]}</th>
            <th>{paymentPlan[5]}</th>
          </tr>

          <tr>
            <th>{paymentPlan[6] && 2}</th>
            <th>{paymentPlan[6]}</th>
            <th>{paymentPlan[7]}</th>
            <th>{paymentPlan[8]}</th>
            <th>{paymentPlan[9]}</th>
            <th>{paymentPlan[10]}</th>
            <th>{paymentPlan[11]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[12] && 3}</th>
            <th>{paymentPlan[12]}</th>
            <th>{paymentPlan[13]}</th>
            <th>{paymentPlan[14]}</th>
            <th>{paymentPlan[15]}</th>
            <th>{paymentPlan[16]}</th>
            <th>{paymentPlan[17]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[18] && 4}</th>
            <th>{paymentPlan[18]}</th>
            <th>{paymentPlan[19]}</th>
            <th>{paymentPlan[20]}</th>
            <th>{paymentPlan[21]}</th>
            <th>{paymentPlan[22]}</th>
            <th>{paymentPlan[23]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[24] && 5}</th>
            <th>{paymentPlan[24]}</th>
            <th>{paymentPlan[25]}</th>
            <th>{paymentPlan[26]}</th>
            <th>{paymentPlan[27]}</th>
            <th>{paymentPlan[28]}</th>
            <th>{paymentPlan[29]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[30] && 6}</th>
            <th>{paymentPlan[30]}</th>
            <th>{paymentPlan[31]}</th>
            <th>{paymentPlan[32]}</th>
            <th>{paymentPlan[33]}</th>
            <th>{paymentPlan[34]}</th>
            <th>{paymentPlan[35]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[36] && 7}</th>
            <th>{paymentPlan[36]}</th>
            <th>{paymentPlan[37]}</th>
            <th>{paymentPlan[38]}</th>
            <th>{paymentPlan[39]}</th>
            <th>{paymentPlan[40]}</th>
            <th>{paymentPlan[41]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[42] && 8}</th>
            <th>{paymentPlan[42]}</th>
            <th>{paymentPlan[43]}</th>
            <th>{paymentPlan[44]}</th>
            <th>{paymentPlan[45]}</th>
            <th>{paymentPlan[46]}</th>
            <th>{paymentPlan[47]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[48] && 9}</th>
            <th>{paymentPlan[48]}</th>
            <th>{paymentPlan[49]}</th>
            <th>{paymentPlan[50]}</th>
            <th>{paymentPlan[51]}</th>
            <th>{paymentPlan[52]}</th>
            <th>{paymentPlan[53]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[54] && 10}</th>
            <th>{paymentPlan[54]}</th>
            <th>{paymentPlan[55]}</th>
            <th>{paymentPlan[56]}</th>
            <th>{paymentPlan[57]}</th>
            <th>{paymentPlan[58]}</th>
            <th>{paymentPlan[59]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[60] && 11}</th>
            <th>{paymentPlan[60]}</th>
            <th>{paymentPlan[61]}</th>
            <th>{paymentPlan[62]}</th>
            <th>{paymentPlan[63]}</th>
            <th>{paymentPlan[64]}</th>
            <th>{paymentPlan[65]}</th>
          </tr>
          <tr>
            <th>{paymentPlan[66] && 12}</th>
            <th>{paymentPlan[66]}</th>
            <th>{paymentPlan[67]}</th>
            <th>{paymentPlan[68]}</th>
            <th>{paymentPlan[69]}</th>
            <th>{paymentPlan[70]}</th>
            <th>{paymentPlan[71]}</th>
          </tr>
        </table>
      </Modal>
    </>
  );
};

export default Panel;
