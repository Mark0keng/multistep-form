import {
  SET_PERSONAL_INFO,
  SET_PLAN,
  SET_ADDON,
  SET_STEP,
  FETCH_POKEMON,
  SET_POKEMON,
} from "./constant";

export const setPersonalInfo = (personalInfo) => ({
  type: SET_PERSONAL_INFO,
  personalInfo,
});

export const setPlan = (plan) => ({
  type: SET_PLAN,
  plan,
});

export const setAddon = (addon) => ({
  type: SET_ADDON,
  addon,
});

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});

export const fetchPokemon = () => ({
  type: FETCH_POKEMON,
});

export const setPokemon = (pokemon) => ({
  type: SET_POKEMON,
  pokemon,
});
