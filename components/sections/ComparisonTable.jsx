export default function ComparisonTable() {
  const features = [
    "Natural Ingredients",
    "No Side Effects",
    "Clinically Tested",
    "Ayurvedic Formula",
    "Quick Results",
    "Money Back Guarantee"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl text-center mb-16 font-bold text-[#2A6177]">
          Why Choose Sampoorna Arogya?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left">Features</th>
                <th className="px-6 py-4 text-center">Sampoorna Arogya</th>
                <th className="px-6 py-4 text-center">Other Brands</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-6 py-4">{feature}</td>
                  <td className="px-6 py-4 text-center text-green-500">✓</td>
                  <td className="px-6 py-4 text-center text-red-500">✗</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
