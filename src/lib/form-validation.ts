import z from "zod";

// * Define the form schema using Zod
export const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "Author must be at least 2 characters.",
  }),
  genre: z.enum(
    ["FICTION", "NON_FICTION", "MYSTERY", "HISTORY", "BIOGRAPHY", "FANTASY"],
    {
      message: "Please select a valid genre.",
    },
  ),
  isbn: z.string().min(10, {
    message: "ISBN must be at least 10 characters.",
  }),
  copies: z.number().min(1, {
    message: "Copies must be at least 1.",
  }),
  available: z.boolean().optional(),
  description: z
    .string()
    .max(100, {
      message: "Description must be at most 100 characters.",
    })
    .optional(),
});

export const editFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "Author must be at least 2 characters.",
  }),
  genre: z.enum(
    ["FICTION", "NON_FICTION", "MYSTERY", "HISTORY", "BIOGRAPHY", "FANTASY"],
    {
      message: "Please select a valid genre.",
    },
  ),
  copies: z.number().min(1, {
    message: "Copies must be at least 1.",
  }),
  description: z
    .string()
    .max(100, {
      message: "Description must be at most 100 characters.",
    })
    .optional(),
});

export const borrowFormSchema = z.object({
  book: z.string().min(1, {
    message: "Please select a book to borrow.",
  }),
    quantity: z.number().min(1, {
        message: "Quantity must be at least 1.",
    }),
  dueDate: z.date({
    message: "Please select a valid due date.",
  }),
});