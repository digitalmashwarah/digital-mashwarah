import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, Palette, Star, Eye, Sparkles } from "lucide-react";

export default function BrandingDesign() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Branding & Design
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create a memorable brand identity that sets you apart and connects with your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Brand, Your Identity
              </h2>
              <p className="text-gray-600 mb-6">
                Our branding and design services help you create a cohesive visual identity that reflects your values and resonates with your target audience.
              </p>
              <div className="space-y-4">
                {[
                  "Logo Design & Brand Identity",
                  "Brand Guidelines Development",
                  "Marketing Material Design",
                  "Website & Digital Design",
                  "Brand Strategy Consultation"
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
                <Palette className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
                <p className="text-gray-600">Unique, creative designs that make your brand memorable</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Star className="h-10 w-10 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Excellence</h3>
                <p className="text-gray-600">Professional branding that elevates your business presence</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Eye className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visual Impact</h3>
                <p className="text-gray-600">Designs that capture attention and leave lasting impressions</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Sparkles className="h-10 w-10 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Consistency</h3>
                <p className="text-gray-600">Cohesive branding across all touchpoints and platforms</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Your Brand?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a brand identity that truly represents your business and connects with your audience
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Branding Journey
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}