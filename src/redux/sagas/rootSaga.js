import { call } from "redux-saga/effects";

import {watchSayHelloButton} from "./sayHelloSaga"

export default function* rootSaga () {
yield [
    call(watchSayHelloButton)
];
}
