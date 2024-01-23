import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_POKEMON } from "./constant";
import { fetchPokemon } from "../../domain/api";
import { setPokemon } from "./action";

function* doFetchPokemon() {
  try {
    const response = yield call(fetchPokemon);
    yield put(setPokemon(response));
  } catch (error) {
    console.log(error);
  }
}

export default function* homeSaga() {
  yield takeLatest(FETCH_POKEMON, doFetchPokemon);
}
