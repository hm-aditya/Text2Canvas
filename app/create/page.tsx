"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { RiAiGenerate2 } from "react-icons/ri";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  prompt: z.string().min(6, {
    message: "Prompt must be at least 6 characters long",
  }),
});
export default function Page() {
  const [outputImage, setOutputImage] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await fetch("/api/image", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.status === 200) {
        setOutputImage(data.url);
      } else {
        console.log(data.error);
      toast({variant:"destructive",description:data.error});
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="w-full  min-h-dvh h-full flex justify-start items-center pt-[78px] flex-col">
      <div className="w-full p-3 ">
        <h1 className="font-bold text-3xl text-white text-center tracking-tight">
          Create
        </h1>
        <p className="text-center text-white/50">
          Generate Quality Images from text prompt for free
        </p>
      </div>
      <div className="flex w-full h-[calc(100dvh-200px)] md:flex-row flex-col gap-3">
        <div className="__form flex-[2] gap-2 flex flex-col justify-center items-start">
          <p className="text-center w-full lg:text-left text-white/80 tracking-tight">
            Type your prompt below to Generate an Image
          </p>
          <div className="gap-2 flex w-full px-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex gap-2"
              >
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="w-full max-w-full lg:max-w-[75%]">
                      <FormControl>
                        <Input
                          className="w-full transition-all border border-gray-400 rounded-md"
                          placeholder="Type your prompt here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  onClick={() => onSubmit}
                  loading={loading}
                  className="flex items-center justify-center px-4 py-2 text-md text-white rounded-lg tracking-tighter bg-blue-600 hover:text-black hover:bg-cyan-400"
                >
                  Generate <RiAiGenerate2 />
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="__output flex-[1] min-h-[300px] lg:min-h-full lg:h-full bg-white/10 rounded-lg relative overflow-hidden">
          {outputImage ? (
            <Image
              src={outputImage}
              width={300}
              height={300}
              alt="output"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full p-3  flex justify-center items-center text-center text-white/60 tracking-tight">
              Enter your prompt to Generate an Image
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
