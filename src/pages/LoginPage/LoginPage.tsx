import React from "react";
import Header from "../../components/header/Header";
import LoginForm from "../../components/login_form/LoginForm";
import "./LoginPage.scss";
const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Header />
      <div className="body">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
