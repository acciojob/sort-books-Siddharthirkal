import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, setSort } from "../redux/actions";

const BooksList = () => {
  const dispatch = useDispatch();

  const { books, loading, error, sortBy, order } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value, order));
  };

  const handleOrderChange = (e) => {
    dispatch(setSort(sortBy, e.target.value));
  };

  const sortedBooks = [...books].sort((a, b) => {
    if (!sortBy) return 0;

    const valA = (a[sortBy] || "").toLowerCase();
    const valB = (b[sortBy] || "").toLowerCase();

    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching books</h2>;

  return (
    <div>
      <h1>Books List</h1>

      {/* Dropdowns */}
      <select onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="publisher">Publisher</option>
      </select>

      <select onChange={handleOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {/* Table */}
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
          </tr>
        </thead>

        <tbody>
          {sortedBooks.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;