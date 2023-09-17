import SigninForm from "@/components/forms/sign-in-form";
import { buttonVariants } from "@/components/ui/button";
import Icons from "@/components/ui/icons";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
	return (
		<main className='flex justify-center items-center h-screen w-full'>
			<div className='flex items-center flex-col w-full max-w-xs space-y-4'>
				<Icons.logo height={16} />
				<div className='space-y-3 '>
					<h1 className='text-4xl font-bold tracking-tight text-center'>
						Welcome back
					</h1>
					<p className='text-slate-500 text-center'>Choose your preferred sign in method</p>
				</div>
				<SigninForm />
				<div className='p-2.5 flex items-start bg-slate-100 rounded-sm space-x-1'>
					<span>🧙‍♀️</span>
					<span className='text-xs text-slate-500 font-medium'>
						We&#39;ll email you magic code to sign in password-free.
					</span>
				</div>
				<div className='flex flex-col space-y-2'>
					<p className='text-xs text-slate-500'>
						Don&#39;t have an account yet?
					</p>
					<Link
						href={"/sign-up"}
						className='text-xs text-primary font-medium text-center'
					>
						Sign up for free
					</Link>
				</div>
			</div>
		</main>
	);
};

export default SignInPage;
