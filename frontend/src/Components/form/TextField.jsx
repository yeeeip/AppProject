import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const FormTextField = (props) => {
  const { name, control, placeholder, type} = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => {
        return (
          <TextField
            type={type}
            fullWidth
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            // disabled={disabled || formState.isSubmitting}
            autoComplete="off"
          />
        );
      }}
    />
  );
};

export default FormTextField;