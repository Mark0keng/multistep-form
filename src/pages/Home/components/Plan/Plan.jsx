import { Box, Grid } from "@mui/material";
import classes from "./style.module.scss";
import SubmitSection from "../../../../components/SubmitSection/SubmitSection";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlan } from "../../action";

const Plan = () => {
  const plan = useSelector((state) => state.homeReducer.plan);
  const checkInitial = plan?.subscribe === "Yearly" ? true : false;
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(plan?.name || "");
  const [data, setData] = useState(
    plan || {
      name: "",
      price: 0,
      subscribe: "Monthly",
    }
  );
  const [isChecked, setChecked] = useState(checkInitial || false);

  const handleSubmit = () => {
    dispatch(setPlan(data));
  };

  return (
    <>
      <h2>Select Plan</h2>
      <p className={classes.subtitle}>
        You have the option of monthly or yearly billing
      </p>

      <Grid
        container
        spacing={1}
        paddingTop={3}
        direction={{ xs: "column", md: "row" }}
      >
        <Grid item xs={4}>
          <Grid
            container
            component={Box}
            xs={12}
            direction={{ md: "column" }}
            className={
              selected === "Arcade" ? classes.planCardActive : classes.planCard
            }
            onClick={() => {
              setSelected("Arcade");
              setData({
                ...data,
                name: "Arcade",
                price: 9,
              });
            }}
          >
            <img className={classes.planIcon1} src="" alt="" />
            <Box paddingTop={{ md: 5 }}>
              <p className={classes.planName}>Arcade</p>
              <p className={classes.planPrice}>$9/mo</p>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Box
            xs={6}
            className={
              selected === "Advanced"
                ? classes.planCardActive
                : classes.planCard
            }
            onClick={() => {
              setSelected("Advanced");
              setData({
                ...data,
                name: "Advanced",
                price: 12,
              });
            }}
          >
            <img className={classes.planIcon2} src="" alt="" />
            <Box>
              <p className={classes.planName}>Advanced</p>
              <p className={classes.planPrice}>$12/mo</p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            xs={6}
            className={
              selected === "Pro" ? classes.planCardActive : classes.planCard
            }
            onClick={() => {
              setSelected("Pro");
              setData({
                ...data,
                name: "Pro",
                price: 15,
              });
            }}
          >
            <img className={classes.planIcon3} src="" alt="" />
            <Box>
              <p className={classes.planName}>Pro</p>
              <p className={classes.planPrice}>$15/mo</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.switchBox}>
        <div className={!isChecked ? classes.subLabelActive : classes.subLabel}>
          Monthly
        </div>
        <div>
          <input
            type="checkbox"
            id="switch"
            className={classes.switch}
            value={isChecked}
            checked={isChecked}
            onChange={() => {
              setChecked(isChecked ? false : true);
              setData({
                ...data,
                subscribe: isChecked ? "Monthly" : "Yearly",
              });
            }}
          />
          <label htmlFor="switch" className={classes.switchLabel}>
            Toggle
          </label>
        </div>
        <div className={isChecked ? classes.subLabelActive : classes.subLabel}>
          Yearly
        </div>
      </Box>

      <SubmitSection handleSubmit={handleSubmit} />
    </>
  );
};

export default Plan;
