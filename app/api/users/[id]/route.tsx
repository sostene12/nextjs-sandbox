import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "../schema";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const singleUser = await prisma.user.findUnique({
    where: { id: id},
  });
  if (!singleUser)
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  return NextResponse.json(singleUser);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const user = await prisma.user.findUnique({ where: { id: id } });
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  const udpadtedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(udpadtedUser, { status: 200 });
}

export async function DELETE(request:NextRequest,{params:{id}}:Props){
    const user = await prisma.user.findUnique({where:{id:id}});
    if(!user)
        return NextResponse.json({error:'the user not found.'},{status:404});
    await prisma.user.delete({where:{id:user.id}});
    return NextResponse.json({});
}
