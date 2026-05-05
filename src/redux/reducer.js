import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  SET_SORT,
} from "./actions";

const initialState = {
  books: [],
  loading: false,
  error: false,
  sortBy: "title", // ✅ default sorting
  order: "asc",
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return { ...state, loading: true };

    case FETCH_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.payload };

    case FETCH_BOOKS_FAILURE:
      return { ...state, loading: false, error: true };

    case SET_SORT:
      return {
        ...state,
        sortBy: action.payload.sortBy,
        order: action.payload.order,
      };

    default:
      return state;
  }
};