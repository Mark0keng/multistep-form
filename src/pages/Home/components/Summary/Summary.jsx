import { Box } from "@mui/material";
import classes from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import SubmitSection from "../../../../components/SubmitSection/SubmitSection";
import { setStep } from "../../action";

const Summary = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.homeReducer.step);

  const plan = useSelector((state) => state.homeReducer.plan);
  const addon = useSelector((state) => state.homeReducer.addon);

  const planPrice = plan.subscribe === "Yearly" ? plan.price * 10 : plan.price;
  const addonPrice = addon?.reduce((result, item) => {
    return result + item.price;
  }, 0);
  const totalPrice = planPrice + addonPrice;

  const prevHandler = () => {
    dispatch(setStep(currentStep - 2));
  };

  return (
    <>
      <h2>Finishing Up</h2>
      <p className={classes.subtitle}>
        Double-check everything looks OK before confirming
      </p>

      <Box className={classes.summarySection}>
        <Box className={classes.mainItem}>
          <Box>
            <h3>{plan.name}</h3>
            <p className={classes.changeNav} onClick={prevHandler}>
              Change
            </p>
          </Box>
          <Box alignSelf={"center"}>
            <h3>
              $
              {plan.subscribe === "Yearly"
                ? planPrice + "/yr"
                : planPrice + "/mo"}
            </h3>
          </Box>
        </Box>
        {addon?.map((item, index) => {
          return (
            <Box key={index} className={classes.addonItem}>
              <p className={classes.addonName}>{item.name}</p>
              <p className={classes.addonPrice}>
                +$
                {plan.subscribe === "Yearly"
                  ? item.price + "/yr"
                  : item.price + "/mo"}
              </p>
            </Box>
          );
        })}
      </Box>

      <Box className={classes.totalSection}>
        <p className={classes.totalName}>Total (per month)</p>
        <p className={classes.totalPrice}>
          +$
          {plan.subscribe === "Yearly"
            ? totalPrice + "/yr"
            : totalPrice + "/mo"}
        </p>
      </Box>
      <SubmitSection handleSubmit={null} />
    </>
  );
};

export default Summary;
