import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";


// * Define the form schema using Zod
const formSchema = z.object({
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
  available: z.boolean(),
  description: z
    .string()
    .max(50, {
      message: "Description must be at most 50 characters.",
    })
    .optional(),
});

const AddBook = () => {
  // * Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "FICTION",
      isbn: "",
      copies: 1,
      available: false,
      description: "",
    },
  });

  // * Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    
      console.log(values);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Add New Book</h1>
      <p className="mt-4">Here you can add a new book to the library.</p>
      <div className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Alice in Wonderland" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the title of the book.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input placeholder="Lewis Carroll" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the author of the book.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a genre" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Genres</SelectLabel>
                            <SelectItem value="FICTION">Fiction</SelectItem>
                            <SelectItem value="NON_FICTION">
                              Non-Fiction
                            </SelectItem>
                            <SelectItem value="MYSTERY">Mystery</SelectItem>
                            <SelectItem value="HISTORY">History</SelectItem>
                            <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                            <SelectItem value="FANTASY">Fantasy</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      This is the genre of the book.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <Input placeholder="978-3-16-148410-0" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the ISBN of the book.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Copies</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="1"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the number of copies available.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="available"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the availability status of the book.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Book Description" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the description of the book.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddBook;
