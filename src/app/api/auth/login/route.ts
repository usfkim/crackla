import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // In a real app, you'd validate the credentials against a database
  if (email === "user@example.com" && password === "password") {
    const user = {
      name: "Test User",
      email: "user@example.com",
    };
    // In a real app, you'd create a session and return a token
    return NextResponse.json({ user });
  }

  return new NextResponse(
    JSON.stringify({ message: "Invalid email or password" }),
    { status: 401 }
  );
}
