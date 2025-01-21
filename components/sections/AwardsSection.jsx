import Image from 'next/image';
import t_one from '@/assets/t_six.png';
import t_two from '@/assets/t_three.svg';
import t_three from '@/assets/t_one.svg';


export default function AwardsSection() {
  const awards = [
    {
      title: "GMP Certified",
      image: t_one, // Import directly instead of using string path
      description: "Good Manufacturing Practice Certified"
    },
    {
      title: "ISO 9001:2015",
      image: t_two, // Replace with actual ISO image when available
      description: "Quality Management System"
    },
    {
      title: "Made in India",
      image: t_three, // Replace with actual FSSAI image when available
      description: "100% Natural Ingredients and Made in India"
    }
  ];

  return (
    <div className="py-16 bg-[#8de8f825]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl text-center mb-16 font-bold text-[#2A6177]">
          Awards & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image
                  src={award.image}
                  alt={award.title}
                  layout="responsive"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2A6177] mb-2">{award.title}</h3>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
