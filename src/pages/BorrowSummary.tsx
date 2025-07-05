import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

const BorrowSummary = () => {
  const { data, error, isLoading } = useGetBorrowSummaryQuery(undefined);

  // * Define the BorrowedBook interface to match the structure of the borrowed book data
  interface BorrowedBook {
    totalQuantity: number;
    book: {
      title: string;
      isbn: string;
    };
  }

  const borrowedBooks: BorrowedBook[] = data?.data || [];
  console.log(data?.data);
  return (
    <div>
      <h1 className="text-2xl font-bold">Borrow Summary</h1>
      <p className="mt-4">Here you can view the summary of borrowed books.</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching borrow summary</p>}

      {!borrowedBooks || borrowedBooks.length === 0 ? (
        <p>No borrowed books found.</p>
      ) : (
        borrowedBooks.map((book, index) => (
          <div key={index}>
            <p>
              <span className="font-bold">Total Borrowed: </span>
              {book.totalQuantity}
            </p>
            <p>
              <span className="font-bold">Book Title: </span>
              {book.book?.title}
            </p>
            <p>
              <span className="font-bold">Book ISBN: </span>
              {book.book?.isbn}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BorrowSummary;
