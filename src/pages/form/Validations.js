import React from "react";
import * as yup from "yup";
import { object, string, number, date, InferType, ref } from "yup";

const Validations = yup.object().shape({
  // Bunlar signUp componentinde bulunan initial values kısmındaki email, password, confirmPassword ile eşleşiyor
  krediTutari: number().required(),
  taksitSayisi: number().min(0).required() /* minimum 5 karakter olması şartı */,
  odemeTipi: string().required() ,
});

export default Validations;
