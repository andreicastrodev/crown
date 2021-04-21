import { all, call } from "redux-saga/effects";
import { fetchCollectionsSaga } from "./shop/shop.sagas";
import { userSagas } from "./user/user-saga";
import { cartSagas } from "./cart/cart.saga";
import { shopSagas } from "./shop/shop.sagas";
export default function* rootSaga() {
  yield all([
    call(fetchCollectionsSaga),
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
  ]);
}
