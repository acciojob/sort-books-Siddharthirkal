export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const SET_SORT = "SET_SORT";

export const fetchBooks = () => (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });

  const mockBooks = [
    { title: "A Book", author: "Author A", publisher: "Pub A", isbn: "1" },
    { title: "B Book", author: "Author B", publisher: "Pub B", isbn: "2" },
    { title: "C Book", author: "Author C", publisher: "Pub C", isbn: "3" },
    { title: "D Book", author: "Author D", publisher: "Pub D", isbn: "4" },
    { title: "E Book", author: "Author E", publisher: "Pub E", isbn: "5" },
    { title: "F Book", author: "Author F", publisher: "Pub F", isbn: "6" },
    { title: "G Book", author: "Author G", publisher: "Pub G", isbn: "7" },
    { title: "H Book", author: "Author H", publisher: "Pub H", isbn: "8" },
    { title: "I Book", author: "Author I", publisher: "Pub I", isbn: "9" },
    { title: "J Book", author: "Author J", publisher: "Pub J", isbn: "10" },
    { title: "K Book", author: "Author K", publisher: "Pub K", isbn: "11" },
    { title: "L Book", author: "Author L", publisher: "Pub L", isbn: "12" },
    { title: "M Book", author: "Author M", publisher: "Pub M", isbn: "13" },
    { title: "N Book", author: "Author N", publisher: "Pub N", isbn: "14" },
    { title: "O Book", author: "Author O", publisher: "Pub O", isbn: "15" },
  ];

  setTimeout(() => {
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: mockBooks });
  }, 200);
};

export const setSort = (sortBy, order) => ({
  type: SET_SORT,
  payload: { sortBy, order },
});