import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  image: string;
  bgColor: string;
}

async function getCategoryServices(category: string): Promise<Service[]> {
  // In a real application, you would fetch this data from a database
  // based on the category. For this example, we'll return a static list.
  const services: Service[] = [
    {
      title: "Vibe Coding",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      bgColor: "bg-pink-500"
    },
    {
      title: "Website Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      bgColor: "bg-green-600"
    },
    {
      title: "Video Editing",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop",
      bgColor: "bg-orange-500"
    },
    {
      title: "Software Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
      bgColor: "bg-yellow-500"
    },
    {
      title: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop",
      bgColor: "bg-green-700"
    }
  ];
  return services;
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const services = await getCategoryServices(slug);
  const categoryName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:underline">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="font-medium text-gray-700">{categoryName}</span>
      </div>
      <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link key={index} href={`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border-0 rounded-lg dark:bg-gray-700 hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{service.title}</h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
