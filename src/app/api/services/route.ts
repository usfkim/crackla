import { NextResponse } from 'next/server';

export async function GET() {
  const services = [
    {
      title: "Modern Website Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop",
      bgColor: "bg-blue-500"
    },
    {
      title: "Mobile App Development",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=300&h=200&fit=crop",
      bgColor: "bg-purple-600"
    },
    {
      title: "AI-Powered Chatbot",
      image: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=300&h=200&fit=crop",
      bgColor: "bg-teal-500"
    },
    {
      title: "Data Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      bgColor: "bg-indigo-500"
    },
    {
      title: "Cloud Migration Strategy",
      image: "https://images.unsplash.com/photo-1546514737-0f63be6e5fed?w=300&h=200&fit=crop",
      bgColor: "bg-sky-600"
    }
  ];
  return NextResponse.json(services);
}
