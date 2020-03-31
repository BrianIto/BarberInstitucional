// @ts-ignore
import {Actions} from "../Actions/actions"

const initialState = {
    opened: false,
}

const GeneralReducer = (state : object = initialState, {type, payload}) => {
    switch (type) {
        case Actions.setOpened:
            return {...state, opened: payload}
        default:
            return state
    }
}

export default GeneralReducer