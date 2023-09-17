import SignupForm from "@/components/forms/sign-up-form";
import Icons from "@/components/ui/icons";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
	return (
		<main className='flex justify-center items-center h-screen w-full'>
			<div className='flex items-center flex-col w-full max-w-xs space-y-4'>
				<Icons.logo height={16} />
				<div className='space-y-3 '>
					<h1 className='text-4xl font-bold tracking-tight text-center'>
						Get started now
					</h1>
					<p className='text-slate-500 text-center'>
						Create an account and create beautiful color palette
					</p>
				</div>
				<SignupForm />

				<div className='flex flex-col space-y-2'>
					<p className='text-xs text-slate-500'>Already have an account</p>
					<Link
						href={"/sign-in"}
						className='text-xs text-primary font-medium text-center'
					>
						Log back in
					</Link>
				</div>
			</div>
		</main>
	);
};

export default SignupPage;
