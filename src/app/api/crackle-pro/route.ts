import { NextResponse } from 'next/server';

export async function GET() {
  const cracklePro = [
    {
      title: "Vetted & Verified Experts",
      description: "Our Crackla Pro freelancers are hand-picked and rigorously vetted for their exceptional skills and professionalism, ensuring you work with the best in the industry."
    },
    {
      title: "Dedicated Project Management",
      description: "Receive a dedicated project manager who will assist you in finding the right talent, managing your projects, and ensuring a seamless workflow from start to finish."
    },
    {
      title: "Enhanced Collaboration Tools",
      description: "Utilize our advanced collaboration tools, including real-time chat, file sharing, and project tracking, to keep your projects on schedule and your team in sync."
    },
    {
      title: "Secure & Flexible Payments",
      description: "Enjoy peace of mind with our secure payment system, offering flexible options such as per-project or hourly billing to suit your business needs."
    }
  ];
  return NextResponse.json(cracklePro);
}
