import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import { Link } from "react-router";

const AllBooks = () => {
  const { data, isError, isLoading } = useGetAllBooksQuery(undefined);

  // Define the Book interface to match the structure of the book data
  interface Book {
    _id: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    available: boolean;
  }
  const allBooks: Book[] = data?.data || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{data.message}</div>;
  }

  console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold">All Books</h1>
      <p className="mt-4">Here you can view all the books in the library.</p>
      <div className="flex justify-end">
        <Button className="mt-4">Add New Book</Button>
      </div>
      <div className="mt-8">
        <Table>
          <TableCaption>A list of all books.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allBooks.map((book) => (
              <TableRow key={book._id}>
                <TableCell className="font-medium">
                  <Link to={`/books/${book._id}`} className="hover:underline">
                    {book.title}
                  </Link>
                </TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>
                  {book.available ? "Available" : "Not Available"}
                </TableCell>
                <TableCell className="flex gap-1 text-right">
                  <Button>Edit</Button>
                  <Button variant="destructive">Delete</Button>
                  <Button variant="outline">Borrow</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllBooks;
