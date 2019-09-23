import * as actionType from '../actions/actionstypes'

const initialState = {

    res: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.STORE_RESULT:
            return {
                ...state,
                res: state.res.concat({id: new Date(), value: action.result})
            }
        case actionType.Delete_Result:
            const updateArr = state.res.filter(res => res.id !== action.resultId)
            return {
                ...state,
                res: updateArr
            }
    }


    return state

}
export default reducer;