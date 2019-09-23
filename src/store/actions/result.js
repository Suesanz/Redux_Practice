import * as actiontype from "./actionstypes";


export const saveResult = (res) => {
    return {
        type: actiontype.STORE_RESULT,
        result: res
    };
}
export const storeRes = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
};
export const deleteResult = (resID) => {
    return {
        type: actiontype.Delete_Result,
        resultId: resID
    };
};