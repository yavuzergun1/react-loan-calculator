import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import validationSchema from "./Validations";
function Form() {
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        krediTutari: "",
        taksitSayisi: "",
        odemeTipi: "",
      },

      onSubmit: (values) => {
        console.log(values);
        console.log(values.krediTutari);
      },
    });

  return (
    <div>
      <div className="forms-container">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& > :not(style)": { m: 2, width: "28ch" },
          }}
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Kredi Tutarı"
            name="krediTutari"
            variant="outlined"
            required
            error={
              touched.krediTutari && values.krediTutari < 1000 ? true : false
            }
            helperText={
              touched.krediTutari && values.krediTutari < 1000
                ? "Kredi Tutarı En Az 1000TL'dir"
                : ""
            }
            type="number"
            // InputProps={{ inputProps: { min: 1000 } }}
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
            InputProps={{ inputProps: { max: 24 } }}
            error={
              touched.taksitSayisi && values.taksitSayisi < 1 ? true : false
            }
            onChange={handleChange}
            required
          />
          <button type="onSubmit">Submit</button>
        </Box>
        <FormControl>
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
              name="haftalik"
            />
            <FormControlLabel
              value="aylik"
              control={<Radio />}
              label="Aylık Ödeme"
              onChange={handleChange}
              name="aylik"
            />
            <FormControlLabel
              value="yillik"
              control={<Radio />}
              label="Yıllık Ödeme"
              onChange={handleChange}
              name="yillik"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default Form;
