

const initialState = [
    {
        id: 1,
        name: "product 1",
        desc: "description",
        category: "category_id",
        price: 3990
    },
]

function productReduser(state = initialState, action) {
    switch (action.type) {
        case "NEWPRODUCTS":
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};

export {
    productReduser
}