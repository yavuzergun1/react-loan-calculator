import React from "react";
import { UseCalculate } from "../../context/CalculateContext";
import { useEffect } from "react";

function AylikFaizHesabi() {
  const {
    creditAmount /* Girilen kredi tutarı */,
    installmentCount /* Girilen taksit sayısı */,
    paymentType /* Girilen ödeme tipi */,
    interest /* Girilen faiz oranı */,
    bsmv /* girilen bsmv miktarı  */,
    kkdf /*  girilen kkdf miktarı*/,
  } = UseCalculate();

  const kkdfRate = kkdf / 100000; /* kkdf oranı */
  const bsmvRate = bsmv / 100000; /* bsmv oranı */
  const totalInterest = interest + kkdfRate + bsmvRate; /* toplam faiz oranı */
  let remainingPrincipal =
    creditAmount; /* çekilen kredi miktarı kalan anaparanın ilk değeri olarak atandı*/
  let payments = []; /* değişkenleri içerecek dizi oluşturuldu */

  const count = () => {
    for (let i = 0; i < installmentCount; i++) {
      /* geri ödenen toplam taksit miktarı */
      const installmentAmount =
        creditAmount *
        ((totalInterest * (1 + totalInterest) ** installmentCount) /
          ((1 + totalInterest) ** installmentCount - 1));

      const monthlyInt =
        remainingPrincipal * interest * (30 / 30); /* aylık faiz tutarı */
      const weeklyInt =
        remainingPrincipal * interest * (7 / 30); /* haftalık faiz tutarı */
      const yearlyInt =
        remainingPrincipal * interest * (365 / 30); /* yıllık faiz tutarı */
      const payedPrincipal = installmentAmount - monthlyInt - kkdf - bsmv;
      remainingPrincipal = remainingPrincipal - payedPrincipal;
// Yukarıdaki değişkenler daha önce oluşturduğumuz payments dizisi içine alınıyor
      payments.push(
        installmentAmount,
        monthlyInt,
        remainingPrincipal,
        payedPrincipal
      );
    }
  };
  // Girilen değerlerden birinde değişiklik olursa useEffect tetiklenir ve count fonksiyonu çalışır.
  useEffect(() => {
    count();
    console.log(payments);
  }, [creditAmount, installmentCount, paymentType, interest, bsmv, kkdf]);

  return (
    <div>
      {payments[0]} {payments[1]}
     
    </div>
  );
}

export default AylikFaizHesabi;
