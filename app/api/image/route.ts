import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();
  const generateRandomNo = () => {
    return Math.floor(Math.random() * 100000000) + 1;
  };
  const randomSeed = generateRandomNo();
  const imageUrl = 
    `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}&seed=${randomSeed}&width=300&height=300&nologo=True`;
    await fetch(imageUrl);

  return NextResponse.json({url: imageUrl});
}
