export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const SET_SORT = "SET_SORT";

export const fetchBooks = () => (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });

  const mockBooks = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      publisher: "Penguin",
      isbn: "1111",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      publisher: "Plata",
      isbn: "2222",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      publisher: "HarperCollins",
      isbn: "3333",
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      publisher: "Rupa",
      isbn: "4444",
    },
  ];

  setTimeout(() => {
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: mockBooks });
  }, 300);
};

export const setSort = (sortBy, order) => ({
  type: SET_SORT,
  payload: { sortBy, order },
});