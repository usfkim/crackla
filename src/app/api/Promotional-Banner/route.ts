import { NextResponse } from 'next/server';

export async function GET() {
  const promotionalBanner = {
    title: "Ready to Launch Your Next Big Idea?",
    description: "Our community of expert freelancers is here to help you bring your vision to life. Get started today and turn your dreams into reality.",
    buttonText: "Discover Your Perfect Freelancer"
  };
  return NextResponse.json(promotionalBanner);
}
