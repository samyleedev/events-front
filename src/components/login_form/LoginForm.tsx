import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";

import axios from "axios";
import "./LoginForm.scss";

const onSubmit = async (formData: any) => {
  try {
    const credentials = {
      email: formData["email"],
      password: formData["password"],
    };
    const { data } = await axios.post(
      "http://localhost:3000/users/login",
      credentials
    );
    localStorage.setItem("token", data.access_token);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
const LoginForm = () => {
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

  const showPassword = () => {
    setPasswordIsHidden(!passwordIsHidden);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
      <form>
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          variant="standard"
          id="email"
          label="Email"
          // name="email"
          {...register("email")}
          // error={errors.email ? true : false}
          // helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          margin="dense"
          type={passwordIsHidden ? "password" : "text"}
          variant="standard"
          id="password"
          label="Mot de passe"
          // name="password"
          {...register("password")}
          //   error={errors.password ? true : false}
          //   helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={showPassword}>
                  {passwordIsHidden ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <p className="error">{errors.unauthorized?.message}</p> */}

        <button className="submit_btn" type="submit">
          <p>JE ME CONNECTE</p>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
