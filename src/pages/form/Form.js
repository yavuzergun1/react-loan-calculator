import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import validationSchema from "./Validations";
import "./form.scss";
import Panel from "../../components/modal/Modal";
import { useState } from "react";
import AylikFaizHesabi from "../../components/aylikFaizHesabi/AylikFaizHesabi";
import { UseCalculate } from "../../context/CalculateContext";

function Form() {
  const {
    setCreditAmount,
    setInstallmentCount,
    setPaymentType,
    setInterest,
    setBsmv,
    setKkdf,
  } = UseCalculate();
  // Submit butonuna tıklandığında Modal'ın açılmasını sağlıyor
  const [modalOpen, setModalOpen] = useState(false);
  // Formlar Formik ile oluşturuldu
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    // Başlangıç değerleri boş olarak oluşturuldu
    initialValues: {
      krediTutari: "",
      taksitSayisi: "",
      odemeTipi: "",
      faizOrani: "",
      bsmv: "",
      kkdf: "",
    },
    onSubmit: (values) => {
      setModalOpen(true);
      setCreditAmount(values.krediTutari);
      setInstallmentCount(values.taksitSayisi);
      setPaymentType(values.odemeTipi);
      setInterest(values.faizOrani / 100);
      setBsmv(values.bsmv);
      setKkdf(values.kkdf);
      console.log(values);
    },
    // form validasyonları yup ile oluşturuldu
    validationSchema,
  });

  return (
    <div className="form-body">
      <div className="forms-container">
        {/* Formlar için Material UI kullanıldı */}
        <FormControl>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& > :not(style)": { m: 2, width: "100%" },
            }}
            autoComplete="off"
          >
            <Box
              sx={{
                "& > :not(style)": { m: 2, width: "100%" },
              }}
            >
              <FormLabel id="demo-row-radio-buttons-group-label">
                Ödeme Tipi
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="odemeTipi"
              >
                <FormControlLabel
                  value="haftalik"
                  control={<Radio />}
                  label="haftalık Ödeme"
                  onChange={handleChange}
                  name="odemeTipi"
                />
                <FormControlLabel
                  value="aylik"
                  control={<Radio />}
                  label="Aylık Ödeme"
                  onChange={handleChange}
                  name="odemeTipi"
                />
                <FormControlLabel
                  value="yillik"
                  control={<Radio />}
                  label="Yıllık Ödeme"
                  onChange={handleChange}
                  name="odemeTipi"
                />
                <div style={{ color: "red" }}>
                  {touched.odemeTipi && errors.odemeTipi}
                </div>
              </RadioGroup>
              <div className="input-container">
                <TextField
                  id="outlined-basic"
                  label="Kredi Tutarı"
                  name="krediTutari"
                  variant="outlined"
                  error={
                    touched.krediTutari && errors.krediTutari ? true : false
                  }
                  helperText={touched.krediTutari && errors.krediTutari}
                  type="number"
                  onChange={handleChange}
                  value={values.krediTutari}
                />
                <TextField
                  id="outlined-basic"
                  label="Taksit Sayısı"
                  name="taksitSayisi"
                  variant="outlined"
                  type="number"
                  value={values.taksitSayisi}
                  InputProps={{
                    inputProps:
                      values.odemeTipi == "aylik"
                        ? { max: 24 }
                        : values.odemeTipi == "yillik"
                        ? { max: 2 }
                        : { max: 104 },
                  }}
                  error={
                    touched.taksitSayisi && errors.taksitSayisi ? true : false
                  }
                  helperText={touched.taksitSayisi && errors.taksitSayisi}
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Faiz Oranı"
                  name="faizOrani"
                  variant="outlined"
                  error={touched.faizOrani && errors.faizOrani ? true : false}
                  helperText={touched.faizOrani && errors.faizOrani}
                  type="number"
                  onChange={handleChange}
                  value={values.faizOrani}
                />
                <TextField
                  id="outlined-basic"
                  label="Bsmv Vergi Oranı"
                  name="bsmv"
                  variant="outlined"
                  error={touched.bsmv && errors.bsmv ? true : false}
                  helperText={touched.bsmv && errors.bsmv}
                  type="number"
                  onChange={handleChange}
                  value={values.bsmv}
                />
                <TextField
                  id="outlined-basic"
                  label="Kkdf Vergi Oranı"
                  name="kkdf"
                  variant="outlined"
                  error={touched.kkdf && errors.kkdf ? true : false}
                  helperText={touched.kkdf && errors.kkdf}
                  type="number"
                  onChange={handleChange}
                  value={values.kkdf}
                />
              </div>
              {/* onSubmit çalıştığında Panel componentine modalOpen değerini gönderir */}
              <Panel modalOpen={modalOpen} setModalOpen={setModalOpen} />
              <Button type="onSubmit" variant="contained">
                Hesapla
              </Button>
            </Box>
          </Box>
        </FormControl>
      </div>
      <AylikFaizHesabi />
    </div>
  );
}

export default Form;
