/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import classes from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../pages/Home/action";

const SubmitSection = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.homeReducer.step);

  const nextHandler = () => {
    if (currentStep === 5) {
      dispatch(setStep(1));
    } else {
      dispatch(setStep(currentStep + 1));
    }
  };

  const prevHandler = () => {
    dispatch(setStep(currentStep - 1));
  };
  return (
    <Box
      className={classes.submitSection}
      position={{ sm: "absolute", md: "inherit" }}
      padding={{ md: "20px 0px" }}
    >
      {currentStep !== 1 && (
        <button onClick={prevHandler} className={classes.backBtn}>
          Go Back
        </button>
      )}

      <button
        onClick={() => {
          handleSubmit ? handleSubmit() : null;
          nextHandler();
        }}
        className={classes.button}
      >
        Next Step
      </button>
    </Box>
  );
};

export default SubmitSection;
