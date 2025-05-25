// components/Services.tsx
import Image from 'next/image';

const services = [
  {
    title: "AI Consulting",
    description: "Strategic AI implementation and machine learning solutions.",
    image: "/service-Image1 - Copy.png", // Replace with your actual image path or use next/image
    link: "#",
  },
  {
    title: "Data Engineering",
    description: "Scalable data infrastructure and pipeline development.",
    image: "/service-Image2 - Copy.png",
    link: "#",
  },
  {
    title: "LLM Development",
    description: "Enterprise-grade language models customized for your specific use cases.",
    image: "/service-Image2 - Copy.png",
    link: "#",
  },
];

export default function ServicePage() {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Service</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center mt-4 text-blue-600 hover:underline font-medium"
                >
                  Learn More
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
