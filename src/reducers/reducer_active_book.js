// Not application state
export default function(state=null, action) {
    swtich(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }

    return state;
}
