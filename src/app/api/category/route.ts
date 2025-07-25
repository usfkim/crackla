import { NextResponse } from 'next/server';

export async function GET() {
  const category = [
    { name: "Web & App Development", icon: "💻" },
    { name: "Creative & Design", icon: "🎨" },
    { name: "Digital Marketing & SEO", icon: "📢" },
    { name: "Content & Translation", icon: "✍️" },
    { name: "Video Production & Animation", icon: "🎬" },
    { name: "Artificial Intelligence", icon: "🤖" },
    { name: "Audio & Music Production", icon: "🎵" },
    { name: "Business & Finance", icon: "💼" },
    { name: "Strategy & Consulting", icon: "🎯" }
  ];
  return NextResponse.json(category);
}
