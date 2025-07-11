import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, MousePointer, Target, TrendingUp, DollarSign } from "lucide-react";

export default function GoogleAds() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Google Ads & PPC
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive immediate results with targeted Google Ads campaigns that convert clicks into customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Instant Visibility, Maximum ROI
              </h2>
              <p className="text-gray-600 mb-6">
                Our Google Ads specialists create high-converting campaigns that put your business at the top of search results, driving qualified traffic and maximizing your advertising budget.
              </p>
              <div className="space-y-4">
                {[
                  "Search Ads Campaign Setup",
                  "Display & Video Advertising",
                  "Shopping Ads Management",
                  "Remarketing Campaigns",
                  "Landing Page Optimization"
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
                <MousePointer className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Targeted Traffic</h3>
                <p className="text-gray-600">Reach customers actively searching for your products or services</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Precise Targeting</h3>
                <p className="text-gray-600">Advanced audience targeting based on demographics, interests, and behavior</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                <p className="text-gray-600">Real-time monitoring and optimization for better results</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <DollarSign className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Budget Control</h3>
                <p className="text-gray-600">Maximum ROI with intelligent budget allocation and bidding</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Google Ads Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Account Setup",
                  description: "Set up your Google Ads account with proper structure and tracking"
                },
                {
                  step: "02",
                  title: "Campaign Creation",
                  description: "Develop targeted campaigns with compelling ad copy and keywords"
                },
                {
                  step: "03",
                  title: "Launch & Monitor",
                  description: "Launch campaigns and continuously monitor performance metrics"
                },
                {
                  step: "04",
                  title: "Optimize & Scale",
                  description: "Optimize for better performance and scale successful campaigns"
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
              Ready to Drive Targeted Traffic?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create Google Ads campaigns that deliver immediate results and maximize your ROI
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Google Ads Campaign
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}