import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
	const { fullName } = await req.json();
	const data = await prisma.user.create({ data: { fullName: fullName } });


	return NextResponse.json(data);
}
