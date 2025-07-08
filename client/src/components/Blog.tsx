import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const posts = [
    {
      title: "Top Digital Marketing Trends for 2025",
      excerpt: "Discover the emerging trends that will shape digital marketing strategies in 2025...",
      image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      date: "January 15, 2025",
      category: "Marketing"
    },
    {
      title: "SEO Strategies That Actually Work",
      excerpt: "Learn proven SEO techniques that can boost your website's search rankings...",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      date: "January 10, 2025",
      category: "SEO"
    },
    {
      title: "Social Media ROI: Measuring Success",
      excerpt: "How to track and measure the return on investment of your social media campaigns...",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      date: "January 5, 2025",
      category: "Social Media"
    }
  ];

  return (
    <section id="blog" className="py-20 digital-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in digital marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <Tag className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-[hsl(218,65%,32%)] mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="text-[hsl(218,65%,32%)] hover:text-[hsl(213,84%,55%)] p-0">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
