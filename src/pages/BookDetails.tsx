import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetBookByIdQuery(id);

  interface BookDetails {
    _id: string;
    title: string;
    author: string;
    genre:
      | "FICTION"
      | "NON_FICTION"
      | "SCIENCE"
      | "HISTORY"
      | "BIOGRAPHY"
      | "FANTASY";
    isbn: string;
    description?: string;
    copies: number;
    available: boolean;
  }

  const bookDetails: BookDetails = data?.data || {};

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{data.message}</div>;
  }
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold">Book Details</h1>
      <p className="mt-4">
        Here you can view the details of the{" "}
        <span className="font-semibold">{bookDetails.title}</span>.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold capitalize">Title: {bookDetails.title}</h2>
        <p>
          <strong>Author:</strong> {bookDetails.author}
        </p>
        <p>
          <strong>Genre:</strong> {bookDetails.genre}
        </p>
        <p>
          <strong>ISBN:</strong> {bookDetails.isbn}
        </p>

        <p>
          <strong>Copies:</strong> {bookDetails.copies}
        </p>
        <p>
          <strong>Available:</strong> {bookDetails.available ? "Yes" : "No"}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {bookDetails.description || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
