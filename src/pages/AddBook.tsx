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
import { useAddABookMutation } from "@/redux/api/baseApi";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { formSchema } from "@/lib/form-validation";

const AddBook = () => {
  const navigate = useNavigate();
  // * Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "FICTION",
      isbn: "",
      copies: 1,
      available: true,
      description: "",
    },
  });

  // * Submit handler
  const [addABook, { data, isLoading, isError }] = useAddABookMutation();

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>{data?.message}</div>;
    }

    // * Call the addABook mutation with the form values
    addABook(values)
      .unwrap()
      .then(() => {
        toast("Book added successfully");
        navigate("/books");
      })
      .catch((error) => {
        toast("Error adding book:", error?.message);
      });

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
