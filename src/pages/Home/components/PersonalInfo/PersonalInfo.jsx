import { TextField } from "@mui/material";
import classes from "./style.module.scss";
import { useState } from "react";
import SubmitSection from "../../../../components/SubmitSection/SubmitSection";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../../action";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.homeReducer.personalInfo);

  const [name, setName] = useState(personalInfo?.name || "");
  const [email, setEmail] = useState(personalInfo?.email || "");
  const [phone, setPhone] = useState(personalInfo?.phone || "");

  const handleSubmit = () => {
    dispatch(
      setPersonalInfo({
        name: name,
        email: email,
        phone: phone,
      })
    );
  };

  return (
    <>
      <h2>Personal Info</h2>
      <p className={classes.subtitle}>
        Please Provide your name, email address, and phone number
      </p>
      <label htmlFor="" className={classes.label}>
        Name
      </label>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        size="small"
        style={{ paddingBottom: 20 }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label htmlFor="" className={classes.label}>
        Email Address
      </label>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        size="small"
        style={{ paddingBottom: 30 }}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="" className={classes.label}>
        Phone Number
      </label>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        size="small"
        style={{ paddingBottom: 30 }}
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />

      <SubmitSection handleSubmit={handleSubmit} />
    </>
  );
};

export default PersonalInfo;
