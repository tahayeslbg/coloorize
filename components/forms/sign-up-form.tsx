"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icons from "../ui/icons";
import GoogleButton from "../google-button";

const formSchema = z.object({
	emailAddress: z.string().email({ message: "Email address must be valid" }),
});

const SignupForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			emailAddress: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-3'>
				<GoogleButton />
				<p className='text-center text-xs text-slate-500'>
					Or continue with email
				</p>
				<FormField
					control={form.control}
					name='emailAddress'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='Email Address...' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					disabled={form.getValues().emailAddress === ""}
					type='submit'
					className='w-full'
				>
					Continue
					{/* <span className='flex -space-x-2'>
						<Icons.dot width={20} height={20} className='animate-ping' />
						<Icons.dot
							width={20}
							height={20}
							className='animate-ping delay-100'
						/>
						<Icons.dot
							width={20}
							height={20}
							className='animate-ping delay-200'
						/>
					</span> */}
				</Button>
			</form>
		</Form>
	);
};

export default SignupForm;
