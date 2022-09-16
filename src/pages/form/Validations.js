import React from "react";
import * as yup from "yup";
import { object, string, number, date, InferType, ref } from "yup";

const Validations = yup.object().shape({
  krediTutari: yup
    .number()
    .min(1000, "Kredi Tutarı En Az 1000TL olmalı")
    .max(100000, "Maksimum Kredi Tutarınız 100.000TL'dir")
    .required("Bu Alanı Boş Bırakmayınız"),
  odemeTipi: yup.string().required("Lütfen Ödeme Tipini Giriniz"),
  taksitSayisi: yup
    .number()
    .min(1, "Lütfen Geçerli Bir Değer Giriniz")
    .required("Bu Alanı Boş Bırakmayınız"),
  faizOrani: yup.number().required("Bu Alanı Boş Bırakmayınız"),
  bsmv: yup.number().required("Bu Alanı Boş Bırakmayınız"),
  kkdf: yup.number().required("Bu Alanı Boş Bırakmayınız"),
});

export default Validations;
