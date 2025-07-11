import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, Search, TrendingUp, Target, BarChart3 } from "lucide-react";

export default function SEO() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SEO & Search Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dominate search results and drive organic traffic with our comprehensive SEO strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Rank Higher, Get Found More
              </h2>
              <p className="text-gray-600 mb-6">
                Our SEO experts use proven strategies to improve your search rankings, increase organic traffic, and boost your online visibility across all major search engines.
              </p>
              <div className="space-y-4">
                {[
                  "Keyword Research & Strategy",
                  "On-Page Optimization",
                  "Technical SEO Audit",
                  "Link Building & Outreach",
                  "Local SEO & Maps Optimization"
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
                <Search className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Keyword Research</h3>
                <p className="text-gray-600">Target the right keywords to attract your ideal customers</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Organic Growth</h3>
                <p className="text-gray-600">Sustainable traffic growth through white-hat SEO techniques</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local SEO</h3>
                <p className="text-gray-600">Dominate local search results and Google Maps listings</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <BarChart3 className="h-10 w-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                <p className="text-gray-600">Track rankings, traffic, and conversion improvements</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our SEO Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "SEO Audit",
                  description: "Comprehensive analysis of your current SEO performance and opportunities"
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Create a customized SEO roadmap based on your goals and competition"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Execute on-page, technical, and off-page optimization strategies"
                },
                {
                  step: "04",
                  title: "Monitoring & Reporting",
                  description: "Track progress and adjust strategies for continuous improvement"
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's boost your search rankings and drive more qualified traffic to your website
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Start Your SEO Journey
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}