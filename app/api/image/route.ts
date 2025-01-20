import { authOptions } from "@/utils/authOptions";
import prisma from "@/utils/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { prompt}: { prompt: string } = await request.json();
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const generateRandomNo = () => {
    return Math.floor(Math.random() * 100000000) + 1;
  };
  const randomSeed = generateRandomNo();
  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}&seed=${randomSeed}&width=300&height=300&nologo=True`;
  await fetch(imageUrl);
  await prisma.post.create({
    data: {
      seed: randomSeed,
      url: imageUrl,
      prompt: prompt,
      userId: user.id,
    }
  })
  return NextResponse.json({ url: imageUrl });
}

export async function GET() {
  const session= await getServerSession(authOptions);
  if (!session){
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const posts = await prisma.post.findMany({
    where: {
      userId: user.id,
    },
  });
  return NextResponse.json({ posts });
}
