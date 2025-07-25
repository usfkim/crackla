import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  seller: {
    name: string;
    level: string;
    avatar: string;
  };
}

async function getServiceDetails(slug: string): Promise<Service> {
  // In a real application, you would fetch this data from a database
  // based on the slug. For this example, we'll return a static object.
  return {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    description: "I will create a professional and responsive website for your business. This includes up to 5 pages, a contact form, and basic SEO setup. I have over 5 years of experience in web development and have worked with clients from all over the world.",
    price: 500,
    rating: 4.9,
    reviews: 120,
    seller: {
      name: "John Doe",
      level: "Top Rated Seller",
      avatar: "/avatar.png",
    },
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceDetails(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:underline">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/category/programming-tech" className="hover:underline">Programming & Tech</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="font-medium text-gray-700">{service.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>

          <div className="flex items-center space-x-4 mb-6">
            <Image src={service.seller.avatar} alt={service.seller.name} width={40} height={40} className="rounded-full" />
            <div>
              <p className="font-semibold">{service.seller.name}</p>
              <p className="text-sm text-gray-500">{service.seller.level}</p>
            </div>
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star className="w-5 h-5" />
              <span className="font-bold">{service.rating}</span>
              <span className="text-gray-500">({service.reviews} reviews)</span>
            </div>
          </div>

          <Card className="overflow-hidden mb-8">
            <div className="relative h-96">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </Card>

          <h2 className="text-2xl font-bold mb-4">About this service</h2>
          <p className="text-gray-700 leading-relaxed">{service.description}</p>
        </div>

        <div>
          <Card className="p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Service Details</h3>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold">Price</p>
              <p className="text-2xl font-bold text-green-600">${service.price}</p>
            </div>
            <p className="text-sm text-gray-500 mb-6">Standard package includes 3 revisions.</p>
            <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
              Continue (${service.price})
            </Button>
            <p className="text-xs text-center mt-4 text-gray-500">You won't be charged yet</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
