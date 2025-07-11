import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, TrendingUp, Users, Heart, Share2 } from "lucide-react";

export default function SocialMediaMarketing() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Social Media Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your brand presence across all major social platforms with our strategic social media marketing services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Amplify Your Brand's Voice
              </h2>
              <p className="text-gray-600 mb-6">
                Our social media marketing strategies help you connect with your audience, build brand awareness, and drive meaningful engagement across Facebook, Instagram, Twitter, LinkedIn, and more.
              </p>
              <div className="space-y-4">
                {[
                  "Content Strategy & Creation",
                  "Community Management",
                  "Social Media Advertising",
                  "Influencer Partnerships",
                  "Analytics & Reporting"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Growth Focused</h3>
                <p className="text-gray-600">Strategies designed to grow your follower base and engagement rates</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Audience Targeting</h3>
                <p className="text-gray-600">Precise targeting to reach your ideal customers on social platforms</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Heart className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Engagement</h3>
                <p className="text-gray-600">Build meaningful connections and increase brand loyalty</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Share2 className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Viral Content</h3>
                <p className="text-gray-600">Create shareable content that expands your reach organically</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Social Media Marketing Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Strategy Development",
                  description: "Analyze your brand and audience to create a tailored social media strategy"
                },
                {
                  step: "02",
                  title: "Content Creation",
                  description: "Develop engaging content that resonates with your target audience"
                },
                {
                  step: "03",
                  title: "Community Management",
                  description: "Engage with your audience and build lasting relationships"
                },
                {
                  step: "04",
                  title: "Performance Tracking",
                  description: "Monitor metrics and optimize campaigns for better results"
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Grow Your Social Media Presence?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a social media strategy that drives real results for your business
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Social Media Journey
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}