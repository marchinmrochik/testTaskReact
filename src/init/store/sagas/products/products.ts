import {call, put} from "redux-saga/effects";
import {getProductFailure, getProductSuccess} from "../../actions/productActions";

const fetchProducts = async () => {
    const API_PRODUCTS = 'https://random-data-api.com/api/restaurant/random_restaurant?size=100';
    const res = await fetch(API_PRODUCTS);
    return res.json()
}

export default function* productsSaga(): any {
    try {
        const response = yield call(fetchProducts);
        yield put(getProductSuccess(response))
    } catch (error) {
        yield put(getProductFailure());
    }
}