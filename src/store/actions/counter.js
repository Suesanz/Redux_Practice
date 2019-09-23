import * as actiontype from './actionstypes'


export const increment = () => {
    return {
        type: actiontype.INCREMENT
    };
};
export const decrement = () => {
    return {
        type: actiontype.DECREMENT
    };
};
export const add = (value) => {
    return {
        type: actiontype.ADD,
        val: value
    };
};
export const sub = (value) => {
    return {
        type: actiontype.SUB,
        val: value
    };
};