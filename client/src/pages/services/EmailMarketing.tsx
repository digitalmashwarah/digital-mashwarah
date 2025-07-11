import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, Mail, TrendingUp, Users, Target } from "lucide-react";

export default function EmailMarketing() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Email Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build lasting relationships and drive conversions with strategic email marketing campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Direct Connection, Maximum Impact
              </h2>
              <p className="text-gray-600 mb-6">
                Our email marketing services help you nurture leads, retain customers, and drive sales through personalized, targeted email campaigns.
              </p>
              <div className="space-y-4">
                {[
                  "Email Campaign Strategy",
                  "List Building & Segmentation",
                  "Automated Email Sequences",
                  "Newsletter Design & Content",
                  "A/B Testing & Analytics"
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
                <Mail className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Emails</h3>
                <p className="text-gray-600">Tailored messages that speak directly to your audience</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">High ROI</h3>
                <p className="text-gray-600">Email marketing delivers exceptional return on investment</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Audience Segmentation</h3>
                <p className="text-gray-600">Targeted campaigns based on customer behavior and preferences</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automation</h3>
                <p className="text-gray-600">Automated sequences that nurture leads and drive conversions</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Boost Your Email Marketing?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create email campaigns that connect with your audience and drive results
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Email Marketing
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}