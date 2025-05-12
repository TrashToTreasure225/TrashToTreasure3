import React from 'react';
import { Leaf, Recycle, DollarSign, Factory } from 'lucide-react';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const About: React.FC = () => {
  const steps = [
    {
      icon: <Leaf size={24} />,
      title: "Waste Sorting",
      description: "Students sort school waste into organic and inorganic categories, learning sustainability firsthand.",
      delay: 100
    },
    {
      icon: <Recycle size={24} />,
      title: "Organic Processing",
      description: "Organic waste goes to Black Soldier Fly (BSF) maggot farms for efficient composting and resource recovery.",
      delay: 200
    },
    {
      icon: <DollarSign size={24} />,
      title: "Weekly Sales",
      description: "Inorganic waste is collected, sorted, and sold weekly, generating income for the program.",
      delay: 300
    },
    {
      icon: <Factory size={24} />,
      title: "Machine Purchase",
      description: "Each school contributes Rp10,000/week toward buying an RDF/pyrolysis machine for sustainable waste processing.",
      delay: 400
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About the Program</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our student-led initiative transforms school waste into meaningful impact through a circular economy approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-on-scroll">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={step.delay}
            />
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <div className="inline-block relative">
            <span className="animate-wave inline-block origin-bottom-right">🌱</span>
            <span className="text-lg font-medium text-primary-700 ml-2">
              Join our movement for a cleaner Bali!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
