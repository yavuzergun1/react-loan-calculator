import React from 'react'
import { UseCalculate } from '../../context/CalculateContext';

function AylikFaizHesabi() {
  const { principalAmount, installmentCount } = UseCalculate();
console.log(principalAmount, installmentCount);
     const kkdf = 342; /* girilen kkdf oranı */
     const bsmv = 228; /* girilen bsmv oranı */
     const interest = 0.0228; /* girilen faiz oranı */
     const kkdfRate = kkdf / 100000; /* kkdf oranı */
     const bsmvRate = bsmv / 100000; /* bsmv oranı */
     const totalInterest = interest + kkdfRate + bsmvRate; /* toplam faiz oranı */
   /*   const installmentCount = 12; */ /* taksit sayısı  */
     /* const principalAmount = 100000;  *//* çekilen kredi miktarı */
     const installmentAmount = /* geri ödenen taksit miktarı */
       principalAmount *
       ((totalInterest * (1 + totalInterest) ** installmentCount) /
         ((1 + totalInterest) ** installmentCount - 1));
     const weeklyInt = principalAmount * interest * (7 / 30); /* haftalık faiz tutarı */
     const mountlyInt = principalAmount * interest * (30 / 30); /* aylık faiz tutarı */
     const yearlyInt = principalAmount * interest * (365 / 30); /* yıllık faiz tutarı */
     const principal = installmentAmount - mountlyInt - kkdf - bsmv; 
     const kalanAnaPara = principalAmount - principal;
  return (
    <div>
      <div>aylık ödeme : {installmentAmount.toFixed(2)}TL </div>
      <div>faiz {mountlyInt.toFixed(2)}TL</div>
      <div>anapara {principal.toFixed(2)}TL</div> {/* kalan toplam ana para ödemesi miktarı */}
      <div>kalanAnaPara {kalanAnaPara.toFixed(2)}TL</div>
    </div>
  );
}

export default AylikFaizHesabi