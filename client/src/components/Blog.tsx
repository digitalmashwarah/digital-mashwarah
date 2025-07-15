import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const posts = [
    {
      title: "Top Digital Marketing Trends for 2025",
      excerpt: "Discover the emerging trends that will shape digital marketing strategies in 2025...",
      image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      date: "January 15, 2025",
      category: "Marketing",
      content: `
        <h3>AI-Powered Personalization</h3>
        <p>Artificial Intelligence is revolutionizing how businesses connect with customers. AI-powered personalization enables brands to deliver tailored experiences at scale, from dynamic content recommendations to personalized email campaigns.</p>
        
        <h3>Voice Search Optimization</h3>
        <p>With the rise of smart speakers and voice assistants, optimizing for voice search has become crucial. Focus on conversational keywords and FAQ-style content to capture voice search queries.</p>
        
        <h3>Interactive Content</h3>
        <p>Interactive content like polls, quizzes, and AR experiences significantly increase engagement rates. This trend will dominate social media platforms and website experiences in 2025.</p>
        
        <h3>Privacy-First Marketing</h3>
        <p>With increasing privacy regulations and cookie deprecation, marketers must adapt to first-party data strategies and privacy-compliant targeting methods.</p>
        
        <h3>Short-Form Video Content</h3>
        <p>Short-form videos continue to drive engagement across platforms. Brands investing in creative, authentic video content will see the highest returns in 2025.</p>
      `
    },
    {
      title: "SEO Strategies That Actually Work",
      excerpt: "Learn proven SEO techniques that can boost your website's search rankings...",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      date: "January 10, 2025",
      category: "SEO",
      content: `
        <h3>Focus on E-A-T (Expertise, Authoritativeness, Trustworthiness)</h3>
        <p>Google prioritizes content that demonstrates expertise, authority, and trustworthiness. Build author profiles, gather quality backlinks, and create comprehensive, well-researched content.</p>
        
        <h3>Core Web Vitals Optimization</h3>
        <p>Page speed and user experience metrics directly impact rankings. Optimize your website's loading speed, interactivity, and visual stability to improve Core Web Vitals scores.</p>
        
        <h3>Semantic Search Optimization</h3>
        <p>Google's algorithm understands context and intent. Create content that covers topics comprehensively using related keywords and answering user questions naturally.</p>
        
        <h3>Local SEO for Businesses</h3>
        <p>Optimize Google My Business profiles, gather local reviews, and create location-specific content to dominate local search results.</p>
        
        <h3>Mobile-First Indexing</h3>
        <p>With Google's mobile-first indexing, ensure your website is fully optimized for mobile devices. Fast loading, responsive design, and mobile-friendly navigation are essential.</p>
        
        <h3>Featured Snippets Optimization</h3>
        <p>Structure your content to appear in featured snippets by using clear headers, bullet points, and answering common questions directly and concisely.</p>
      `
    },
    {
      title: "Social Media ROI: Measuring Success",
      excerpt: "How to track and measure the return on investment of your social media campaigns...",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      date: "January 5, 2025",
      category: "Social Media",
      content: `
        <h3>Define Clear Objectives</h3>
        <p>Before measuring ROI, establish specific goals: brand awareness, lead generation, sales conversion, or customer retention. Each objective requires different metrics and measurement approaches.</p>
        
        <h3>Track Conversion Metrics</h3>
        <p>Use UTM parameters, pixel tracking, and conversion funnels to monitor how social media traffic converts into leads and sales. This data directly correlates social media efforts to revenue.</p>
        
        <h3>Calculate Customer Lifetime Value</h3>
        <p>Social media often generates long-term customers. Calculate the lifetime value of customers acquired through social platforms to understand the true ROI of your campaigns.</p>
        
        <h3>Monitor Engagement Quality</h3>
        <p>High-quality engagement (comments, shares, saves) indicates genuine interest and leads to better conversion rates than vanity metrics like likes or follower counts.</p>
        
        <h3>Use Analytics Tools</h3>
        <p>Leverage platform-specific analytics (Facebook Insights, Instagram Analytics) and third-party tools (Google Analytics, Hootsuite) to track performance across all social channels.</p>
        
        <h3>Attribution Modeling</h3>
        <p>Implement multi-touch attribution to understand how social media contributes to the customer journey, especially for B2B businesses with longer sales cycles.</p>
        
        <h3>Regular Reporting and Optimization</h3>
        <p>Create monthly reports that connect social media metrics to business outcomes. Use these insights to optimize content strategy, posting times, and ad targeting for better ROI.</p>
      `
    }
  ];

  return (
    <section id="blog" className="py-12 md:py-20 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
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
                <Button 
                  variant="ghost" 
                  className="text-[hsl(218,65%,32%)] hover:text-[hsl(213,84%,55%)] p-0"
                  onClick={() => setSelectedPost(post)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{selectedPost.date}</span>
                <Tag className="h-4 w-4 ml-4 mr-2" />
                <span>{selectedPost.category}</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedPost(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold text-[hsl(218,65%,32%)] mb-4">{selectedPost.title}</h1>
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
