export function selectBook(book) {
    // selectBook is an ActionCreator
    return {
        type: "BOOK_SELECTED",
        payload: book
    };
}
