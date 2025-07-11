import Layout from "@/components/Layout";
import BackToHomeButton from "@/components/BackToHomeButton";
import { CheckCircle, Monitor, Smartphone, Zap, Palette } from "lucide-react";

export default function WebDesign() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackToHomeButton />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Web Design & Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create stunning, high-converting websites that captivate your audience and drive business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Beautiful Websites That Convert
              </h2>
              <p className="text-gray-600 mb-6">
                Our expert designers and developers create custom websites that not only look amazing but also deliver exceptional user experiences and drive conversions.
              </p>
              <div className="space-y-4">
                {[
                  "Custom Website Design",
                  "Responsive Mobile Development",
                  "E-commerce Solutions",
                  "Content Management Systems",
                  "Website Speed Optimization"
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
                <Monitor className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                <p className="text-gray-600">Contemporary designs that reflect your brand and engage visitors</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Smartphone className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile-First</h3>
                <p className="text-gray-600">Responsive designs that work perfectly on all devices</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Zap className="h-10 w-10 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Loading</h3>
                <p className="text-gray-600">Optimized for speed to improve user experience and SEO</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Palette className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Focused</h3>
                <p className="text-gray-600">Designs that perfectly represent your brand identity</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Web Development Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understand your business goals, target audience, and requirements"
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Create wireframes and visual designs that reflect your brand"
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Build your website using modern technologies and best practices"
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description: "Launch your website and provide ongoing maintenance and support"
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
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a website that not only looks great but drives real business results
            </p>
            <a
              href="https://wa.me/923104090921"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Website Project
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}