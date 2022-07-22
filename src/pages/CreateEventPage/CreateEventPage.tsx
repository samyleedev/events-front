import React from "react";
import Header from "../../components/header/Header";
import CreateEventForm from "../../components/create_event_form/CreateEventForm";
import "./CreateEventPage.scss";
const CreateEventPage = () => {
  return (
    <div className="CreateEventPage">
      <Header />
      <div className="body">
        <CreateEventForm />
      </div>
    </div>
  );
};

export default CreateEventPage;
