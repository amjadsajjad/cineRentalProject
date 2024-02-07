const initialState = {
    cartData: []
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cartData: [...state.cartData, action.payload]

            };

        case 'REMOVE_FROM_CART':
            return {
                ...state, cartData: state.cartData.filter(cart => cart.id !== action.payload.id)
            };
        
            default: state;
    }

}

export {initialState,reducer}