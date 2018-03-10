import {sayHelloWorld} from "../httpCalls/getHelloWorld";
import {takeLatest, call} from "redux-saga/effects"
import {SAY_HELLO} from "../actions";

export function* sayHello(){
    try {
        const result = yield call(sayHelloWorld);
        console.log(result);
    }
    catch(e) {
        console.log("ERROR");
        console.log(e);
    }
}

export function* watchSayHelloButton() {
    yield [takeLatest(SAY_HELLO, sayHello)];
}

export default watchSayHelloButton();