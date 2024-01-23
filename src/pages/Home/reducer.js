import { produce } from "immer";
import { SET_ADDON, SET_PERSONAL_INFO, SET_PLAN, SET_STEP } from "./constant";

export const initialState = {
  data: {},
  step: 1,
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP:
        draft.step = action.step;
        break;
      case SET_PERSONAL_INFO:
        draft.personalInfo = action.personalInfo;
        break;
      case SET_PLAN:
        draft.plan = action.plan;
        break;
      case SET_ADDON:
        draft.addon = action.addon;
        break;
      default:
        break;
    }
  });

export default homeReducer;
