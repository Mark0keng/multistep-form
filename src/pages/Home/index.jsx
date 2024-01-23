import { Box, Grid } from "@mui/material";
import classes from "./style.module.scss";
import { useSelector } from "react-redux";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Plan from "./components/Plan/Plan";
import AddOn from "./components/AddOn/AddOn";
import Summary from "./components/Summary/Summary";
import ThankYou from "./components/ThankYou/ThankYou";

const Home = () => {
  const currentStep = useSelector((state) => state.homeReducer.step);
  const currentPersonalInfo = useSelector(
    (state) => state.homeReducer.personalInfo
  );
  const currentPlan = useSelector((state) => state.homeReducer.plan);
  const currentAddon = useSelector((state) => state.homeReducer.addon);

  console.log(currentPersonalInfo, currentPlan, currentAddon);

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Plan />;
      case 3:
        return <AddOn />;
      case 4:
        return <Summary />;
      case 5:
        return <ThankYou />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.mobileNav} display={{ sm: "block", md: "none" }}>
        <Box className={classes.navSection}>
          {currentStep === 1 ? (
            <div className={classes.stepIconActive}>1</div>
          ) : (
            <div className={classes.stepIcon}>1</div>
          )}

          {currentStep === 2 ? (
            <div className={classes.stepIconActive}>2</div>
          ) : (
            <div className={classes.stepIcon}>2</div>
          )}

          {currentStep === 3 ? (
            <div className={classes.stepIconActive}>3</div>
          ) : (
            <div className={classes.stepIcon}>3</div>
          )}

          {currentStep === 4 ? (
            <div className={classes.stepIconActive}>4</div>
          ) : (
            <div className={classes.stepIcon}>4</div>
          )}
        </Box>
      </Box>
      <Box
        className={classes.mobileNav}
        display={{ md: "none", sm: "absolute" }}
      ></Box>
      <Box
        className={classes.card}
        width={{ xs: "80vw", sm: "80vw", md: "70vw" }}
      >
        <Grid container spacing={3} justifyContent={"start"}>
          <Grid
            component={Box}
            item
            display={{ xs: "none", md: "block" }}
            md={4}
            lg={3}
          >
            <div className={classes.sidebar}>
              <div className={classes.stepNavigation}>
                {currentStep === 1 ? (
                  <div className={classes.stepIconActive}>1</div>
                ) : (
                  <div className={classes.stepIcon}>1</div>
                )}
                <div style={{ paddingTop: 3 }}>
                  <h5 className={classes.stepNumber}>STEP 1</h5>
                  <h5 className={classes.stepInfo}>YOUR INFO</h5>
                </div>
              </div>
              <div className={classes.stepNavigation}>
                {currentStep === 2 ? (
                  <div className={classes.stepIconActive}>2</div>
                ) : (
                  <div className={classes.stepIcon}>2</div>
                )}
                <div style={{ paddingTop: 3 }}>
                  <h5 className={classes.stepNumber}>STEP 2</h5>
                  <h5 className={classes.stepInfo}>SELECT PLAN</h5>
                </div>
              </div>
              <div className={classes.stepNavigation}>
                {currentStep === 3 ? (
                  <div className={classes.stepIconActive}>3</div>
                ) : (
                  <div className={classes.stepIcon}>3</div>
                )}
                <div style={{ paddingTop: 3 }}>
                  <h5 className={classes.stepNumber}>STEP 3</h5>
                  <h5 className={classes.stepInfo}>ADD ONS</h5>
                </div>
              </div>
              <div className={classes.stepNavigation}>
                {currentStep === 4 ? (
                  <div className={classes.stepIconActive}>4</div>
                ) : (
                  <div className={classes.stepIcon}>4</div>
                )}
                <div style={{ paddingTop: 3 }}>
                  <h5 className={classes.stepNumber}>STEP 4</h5>
                  <h5 className={classes.stepInfo}>SUMMARY</h5>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className={classes.mainSection}>{renderComponent()}</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
