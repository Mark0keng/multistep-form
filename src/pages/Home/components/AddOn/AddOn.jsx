import { Box, Checkbox, Grid } from "@mui/material";
import classes from "./style.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddon } from "../../action";
import SubmitSection from "../../../../components/SubmitSection/SubmitSection";

const AddOn = () => {
  const addon = useSelector((state) => state.homeReducer.addon);

  const dispatch = useDispatch();
  const [data, setData] = useState(addon || []);
  const plan = useSelector((state) => state.homeReducer.plan);

  const handleChange = (addon) => {
    const exist = data?.filter((item) => {
      return addon.name === item.name;
    });

    if (exist.length === 0) {
      setData([...data, addon]);
    } else {
      const currentData = data?.reduce((result, item) => {
        if (item.name !== addon.name) {
          result.push(item);
        }
        return result;
      }, []);
      setData(currentData);
    }
  };

  const handleSubmit = () => {
    dispatch(setAddon(data));
  };

  return (
    <>
      <h2>Pick add-ons</h2>
      <p className={classes.subtitle}>
        Add-ons help enhance your gaming experience
      </p>

      <Grid container spacing={1} paddingTop={3} direction={{ xs: "column" }}>
        <Grid item xs={4}>
          <Box xs={6} className={classes.addonCard}>
            <Box className={classes.checkSection}>
              <Checkbox
                onChange={() => {
                  handleChange({
                    name: "Online Service",
                    price: plan.subscribe === "Yearly" ? 1 * 10 : 1,
                  });
                }}
              />
              <Box>
                <p className={classes.addonName}>Online Service</p>
                <p className={classes.addonDesc}>Access to multiplayer games</p>
              </Box>
            </Box>
            <Box className={classes.priceSection}>
              <p className={classes.addonPrice}>
                +$
                {plan.subscribe === "Yearly" ? 1 * 10 + "/yr" : 1 + "/mo"}
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.addonCard}>
            <Box className={classes.checkSection}>
              <Checkbox
                onChange={() => {
                  handleChange({
                    name: "Larger Storage",
                    price: plan.subscribe === "Yearly" ? 2 * 10 : 2,
                  });
                }}
              />
              <Box>
                <p className={classes.addonName}>Larger Storage</p>
                <p className={classes.addonDesc}>Extra 1TB of cloud save</p>
              </Box>
            </Box>
            <Box className={classes.priceSection}>
              <p className={classes.addonPrice}>
                +${plan.subscribe === "Yearly" ? 2 * 10 + "/yr" : 2 + "/mo"}
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box xs={6} className={classes.addonCard}>
            <Box className={classes.checkSection}>
              <Checkbox
                onChange={() => {
                  handleChange({
                    name: "Customizable Profile",
                    price: plan.subscribe === "Yearly" ? 2 * 10 : 2,
                  });
                }}
              />
              <Box>
                <p className={classes.addonName}>Customizable Profile</p>
                <p className={classes.addonDesc}>
                  Custom theme on your profile
                </p>
              </Box>
            </Box>
            <Box className={classes.priceSection}>
              <p className={classes.addonPrice}>
                +${plan.subscribe === "Yearly" ? 2 * 10 + "/yr" : 2 + "/mo"}
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <SubmitSection handleSubmit={handleSubmit} />
    </>
  );
};

export default AddOn;
