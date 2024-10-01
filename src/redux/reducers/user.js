
const initialState = {};

function userReduser(state=initialState, action) {
    switch (action.type) {
        case "NEWUSER":
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
};

export {
    userReduser
}