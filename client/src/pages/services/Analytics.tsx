import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, BarChart3, TrendingUp, Target, PieChart } from "lucide-react";

export default function Analytics() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Analytics & Reporting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make data-driven decisions with comprehensive analytics and insightful reporting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Data-Driven Success
              </h2>
              <p className="text-gray-600 mb-6">
                Our analytics and reporting services provide you with the insights needed to optimize your marketing performance and achieve better results.
              </p>
              <div className="space-y-4">
                {[
                  "Google Analytics Setup & Optimization",
                  "Custom Dashboard Creation",
                  "Performance Tracking & Monitoring",
                  "ROI & Conversion Analysis",
                  "Monthly Reporting & Insights"
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
                <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                <p className="text-gray-600">Deep insights into your marketing performance and trends</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                <p className="text-gray-600">Identify opportunities to improve your marketing ROI</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Goal Tracking</h3>
                <p className="text-gray-600">Monitor and measure your key business objectives</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <PieChart className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visual Reports</h3>
                <p className="text-gray-600">Clear, actionable reports that drive decision-making</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's set up comprehensive analytics to track your success and optimize your marketing
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Start Your Analytics Journey
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}