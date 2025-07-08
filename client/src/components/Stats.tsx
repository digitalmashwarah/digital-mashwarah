import { useCounter } from "@/hooks/useCounter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver();
  const clientsCount = useCounter(500, isVisible);
  const campaignsCount = useCounter(1200, isVisible);
  const roiCount = useCounter(350, isVisible);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-[hsl(218,65%,32%)] mb-2">
              {clientsCount}
            </div>
            <p className="text-lg text-gray-600">Clients Served</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-[hsl(218,65%,32%)] mb-2">
              {campaignsCount}
            </div>
            <p className="text-lg text-gray-600">Campaigns Completed</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-[hsl(218,65%,32%)] mb-2">
              {roiCount}%
            </div>
            <p className="text-lg text-gray-600">ROI %</p>
          </div>
        </div>
      </div>
    </section>
  );
}
