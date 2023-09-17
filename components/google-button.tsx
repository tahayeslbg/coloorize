import React from "react";
import { Button } from "@/components/ui/button";
import Icons from "@/components/ui/icons";

const GoogleButton = () => {
	return (
		<Button type='button' variant='outline' className='w-full'>
			<Icons.google width={18} height={18} className='mr-2' />
			Continue with google
		</Button>
	);
};

export default GoogleButton;
