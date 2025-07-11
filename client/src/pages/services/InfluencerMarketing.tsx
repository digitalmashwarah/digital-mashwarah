import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, Users, Heart, TrendingUp, UserCheck } from "lucide-react";

export default function InfluencerMarketing() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Influencer Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the power of authentic influencer partnerships to expand your reach and build trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Authentic Influence, Real Results
              </h2>
              <p className="text-gray-600 mb-6">
                Our influencer marketing strategies connect your brand with the right creators to build authentic relationships and drive meaningful engagement.
              </p>
              <div className="space-y-4">
                {[
                  "Influencer Discovery & Outreach",
                  "Campaign Strategy Development",
                  "Content Collaboration",
                  "Performance Tracking & Analytics",
                  "Brand Partnership Management"
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
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Audience Reach</h3>
                <p className="text-gray-600">Access to engaged audiences through trusted influencers</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Heart className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Authentic Content</h3>
                <p className="text-gray-600">Genuine recommendations that build trust and credibility</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Awareness</h3>
                <p className="text-gray-600">Expand your reach and increase brand visibility</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <UserCheck className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Targeted Matching</h3>
                <p className="text-gray-600">Perfect influencer matches for your brand and audience</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Partner with Influencers?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's connect your brand with the right influencers to drive authentic engagement and growth
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Start Your Influencer Campaign
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}