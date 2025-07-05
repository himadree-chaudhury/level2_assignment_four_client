import { borrowFormSchema } from "@/lib/form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useBorrowABookMutation } from "@/redux/api/baseApi";
import { useNavigate } from "react-router";

const BorrowBookForm = ({ book }: { book: string }) => {
  const navigate = useNavigate();
  // * Define the form
  const form = useForm<z.infer<typeof borrowFormSchema>>({
    resolver: zodResolver(borrowFormSchema),
    defaultValues: {
      book: book,
      quantity: 1,
      dueDate: new Date(),
    },
  });

  // * Function to handle book editing
  const [borrowABook, { data, isLoading, isError }] = useBorrowABookMutation();
  function onSubmit(values: z.infer<typeof borrowFormSchema>) {
    const borrowDetails = {
      ...values,
      dueDate: format(values.dueDate, "yyyy-MM-dd HH:mm:ssXXX"),
    };

    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>{data?.message}</div>;
    }

    // * Call the borrowABook mutation with the form values
    borrowABook(borrowDetails)
      .unwrap()
      .then(() => {
        toast("Book borrowed successfully");
        navigate("/borrow-summary");
      })
      .catch((error) => {
        toast("Error borrowing book:", error?.message);
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
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
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  This is the due date for returning the book.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Borrow</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </form>
    </Form>
  );
};

export default BorrowBookForm;
