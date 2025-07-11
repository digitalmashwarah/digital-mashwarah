import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, FileText, TrendingUp, Users, Target } from "lucide-react";

export default function ContentMarketing() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Content Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Attract, engage, and convert your audience with strategic content that drives results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tell Your Story, Drive Results
              </h2>
              <p className="text-gray-600 mb-6">
                Our content marketing strategies help you build authority, engage your audience, and drive conversions through compelling storytelling and valuable content.
              </p>
              <div className="space-y-4">
                {[
                  "Content Strategy Development",
                  "Blog Writing & Management",
                  "Video Content Creation",
                  "Infographic Design",
                  "Email Newsletter Content"
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
                <FileText className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
                <p className="text-gray-600">High-quality, engaging content that resonates with your audience</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
                <p className="text-gray-600">Content optimized for search engines to improve visibility</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Audience Focused</h3>
                <p className="text-gray-600">Content tailored to your specific audience and their interests</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="h-10 w-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Goal Oriented</h3>
                <p className="text-gray-600">Strategic content designed to achieve your business objectives</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Compelling Content?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's develop a content strategy that engages your audience and drives business growth
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Start Your Content Journey
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}