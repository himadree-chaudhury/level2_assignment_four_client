import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  useDeleteABookMutation,
  useGetAllBooksQuery,
} from "@/redux/api/baseApi";
import { Link } from "react-router";
import EditBookForm from "@/components/layout/EditBookForm";
import BorrowBookForm from "@/components/layout/BorrowBookForm";

const AllBooks = () => {
  const { data, isError, isLoading } = useGetAllBooksQuery(undefined);

  // * Define the Book interface to match the structure of the book data
  interface Book {
    _id: string;
    title: string;
    author: string;
    genre:
      | "FICTION"
      | "NON_FICTION"
      | "MYSTERY"
      | "HISTORY"
      | "BIOGRAPHY"
      | "FANTASY";
    isbn: string;
    copies: number;
    available: boolean;
    description?: string;
  }
  const allBooks: Book[] = data?.data || [];

  // * Function to handle book deletion
  const [deleteABook, { isLoading: isDeleting }] = useDeleteABookMutation();
  if (isDeleting) {
    return <div>Loading...</div>;
  }

  const handleDeleteBook = (bookId: string) => {
    deleteABook(bookId);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{data.message}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">All Books</h1>
      <p className="mt-4">Here you can view all the books in the library.</p>
      <div className="flex md:justify-end">
        <Button className="mt-4">
          <Link to="/create-book" className="text-white">
            Add New Book
          </Link>
        </Button>
      </div>
      <div className="mt-8 rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
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
                <TableCell
                  className={cn(
                    book.available ? "text-green-600" : "text-red-600",
                  )}
                >
                  {book.available ? "Available" : "Unavailable"}
                </TableCell>
                <TableCell className="flex gap-1 text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Borrow</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Borrow Book</DialogTitle>
                        <DialogDescription>
                          Here you can borrow the book{" "}
                          <span className="font-semibold">{book.title}</span>.
                          Please confirm the details before proceeding.
                        </DialogDescription>
                      </DialogHeader>
                      <BorrowBookForm book={book._id} />
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Book</DialogTitle>
                        <DialogDescription>
                          Make changes to the book details here. Click save when
                          you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <EditBookForm book={book} />
                    </DialogContent>
                  </Dialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the book.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteBook(book._id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
