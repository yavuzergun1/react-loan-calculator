import React from "react";
import { UseCalculate } from "../../context/CalculateContext";
import { useEffect } from "react";
import { UseTax } from "../../context/TaxContext";

function PaymentCalculate() {
  const {
    creditAmount /* Girilen kredi tutarı */,
    installmentCount /* Girilen taksit sayısı */,
    paymentType /* Girilen ödeme tipi */,
    interest /* Girilen faiz oranı */,
    setPaymentPlan,
  } = UseCalculate();
  const { bsmv /* girilen bsmv miktarı  */, kkdf /*  girilen kkdf miktarı*/ } =
    UseTax();
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
      const monthlykkdf = remainingPrincipal * kkdfRate * (30 / 30);
      const monthlybsmv = remainingPrincipal * bsmvRate * (30 / 30);
      const monthlyInt =
        remainingPrincipal * interest * (30 / 30); /* aylık faiz tutarı */
      const weeklyInt =
        remainingPrincipal * interest * (7 / 30); /* haftalık faiz tutarı */
      const yearlyInt =
        remainingPrincipal * interest * (365 / 30); /* yıllık faiz tutarı */
      const paidPrincipal =
        installmentAmount /* eğer ödeme planı haftalık girilmişse weeklyInt değerini kullan, aylık girmişse monthlyInt değerini kullan. Yıllık değeri girmişse yearlyInt değerini kullan */ -
        (paymentType == "haftalik"
          ? weeklyInt
          : paymentType == "aylik"
          ? monthlyInt
          : yearlyInt) -
        kkdf -
        bsmv;
      remainingPrincipal = remainingPrincipal - paidPrincipal;
      // Yukarıdaki değişkenler daha önce oluşturduğumuz payments dizisi içine alınıyor
      payments.push(
        installmentAmount.toFixed(2),
        paidPrincipal.toFixed(2),
        remainingPrincipal.toFixed(2)
      );
      /* eğer ödeme planı haftalık girilmişse weeklyInt değerini gir, aylık girmişse monthlyInt değerini gir. Yıllık değeri girmişse yearlyInt değerini gir */
      if (paymentType == "haftalik") {
        payments.push(weeklyInt.toFixed(2));
      } else if (paymentType == "aylik") {
        payments.push(monthlyInt.toFixed(2));
      } else {
        payments.push(yearlyInt.toFixed(2));
      }
      payments.push(monthlybsmv.toFixed(2), monthlykkdf.toFixed(2));
    }
  };
  count();
  // Girilen değerlerden birinde değişiklik olursa useEffect tetiklenir ve setPaymentPlan çalışır
  useEffect(() => {
    setPaymentPlan(payments);
  }, [creditAmount, installmentCount, paymentType, interest, bsmv, kkdf]);

  return (
    <div>
      {payments[0]} {payments[1]}
    </div>
  );
}

export default PaymentCalculate;
