export function cartManipulation(id) {
    return {
        type: 'ADD_GOOD_TO_CART',
        payload: {
            id: id
        }
    }
}

export function cartManipulationRemove(id) {
    return {
        type: 'REMOVE_GOOD_TO_CART',
        payload: {
            id: id
        }
    }
}
