import { NextResponse } from 'next/server';

export async function GET() {
  const succesStory = [
    { name: "Brand Identity & Logo Design", icon: "🎨" },
    { name: "E-commerce Platform Development", icon: "🛒" },
    { name: "Social Media Marketing Campaign", icon: "📧" },
    { name: "Content Strategy & Copywriting", icon: "📰" },
    { name: "3D Product Modeling & Animation", icon: "📐" }
  ];
  return NextResponse.json(succesStory);
}
