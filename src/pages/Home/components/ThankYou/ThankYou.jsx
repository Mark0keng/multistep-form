import { Box } from "@mui/material";
import classes from "./style.module.scss";

const ThankYou = () => {
  return (
    <>
      <Box className={classes.mainSection}>
        <Box textAlign={"center"}>
          <img src="" alt="" className={classes.icon} />

          <h2 className={classes.title}>Thank You!</h2>
          <p className={classes.desc}>
            Thank for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </Box>
      </Box>
    </>
  );
};

export default ThankYou;
