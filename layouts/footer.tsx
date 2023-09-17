"use client"
import React from "react";
import {usePathname} from "next/navigation"

const Footer = () => {
	const pathname = usePathname()
	const isAuthPath = pathname.includes("sign-in") || pathname.includes("sign-up")
	return !isAuthPath && (
		<footer className='w-full py-8 px-10 bg-slate-100 text-sm text-slate-500'>
			© Coloorize all rights reserved, 2023
		</footer>
	);
};

export default Footer;
