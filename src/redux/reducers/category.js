

const initialState = [];

function categoryReduser(state=initialState, action) {
    switch (action.type) {
        case "NEWCATEGORY":
            return action.payload;
        default:
            return state;
    }
};

export {
    categoryReduser
}