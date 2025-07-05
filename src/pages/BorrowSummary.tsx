import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <div className="mt-8 rounded-lg border border-gray-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Title</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Copies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow></TableRow>
              {borrowedBooks.map((book, index) => (
                <TableRow key={index}>
                  <TableCell>{book.book?.title}</TableCell>
                  <TableCell>{book.book?.isbn}</TableCell>
                  <TableCell>{book.totalQuantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default BorrowSummary;
