
const initialState = [];

function discountReduser(state=initialState, action) {
    switch (action.type) {
        case "NEWDISCOUNTS":
            return {
                ...state,
                discounts: action.payload
            };
        default:
            return state;
    }
};

export {
    discountReduser
}