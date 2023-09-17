"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Icons from "@/components/ui/icons";
import Link from "next/link";
import React from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();
	const isAuthPath =
		pathname.includes("sign-in") || pathname.includes("sign-up");
	return (
		!isAuthPath && (
			<nav className='py-3 px-10 border-b border-border'>
				<div className='flex justify-between items-center'>
					<Link href={"/"}>
						<Icons.logo />
					</Link>
					<div className='flex items-center space-x-2'>
						<HoverCard openDelay={150} closeDelay={150}>
							<HoverCardTrigger
								className={buttonVariants({
									size: "sm",
									variant: "link",
									className: "cursor-default hover:no-underline",
								})}
							>
								Tools
							</HoverCardTrigger>
							<HoverCardContent align='end'>Taha</HoverCardContent>
						</HoverCard>
						<div className='w-[1px] h-5 bg-border' />
						<Link
							href={"/sign-in"}
							className={buttonVariants({ size: "sm", variant: "link" })}
						>
							Sign in
						</Link>
						<Link href={"/sign-up"} className={buttonVariants({ size: "sm" })}>
							Sign up
						</Link>
					</div>
				</div>
			</nav>
		)
	);
};

export default Header;
