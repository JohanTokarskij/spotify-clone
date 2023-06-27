export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: "BQA1IT5zdgLYS20tfuMboYaX9exH4vF4P_MCORkJ5mncRTQyIlRJZzCj8RmnapvicOREpg5SwsnIwzoSdfWbtZjZPgIz9XMU8P4Y93VIAZDQtgxalZX4I_A0TyoTPMnIGy4c4SvemHCakx8ZuFolPP9KYBKBGBDwOsXlc4ccibbLV0IKlfNoGzw"
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }
        case 'SET_TOKEN':
            return { ...state, token: action.token}
        default:
            return state;
    }
}

export default reducer