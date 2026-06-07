const InfoField = ({ label, value }) => (
  <p className="bg-white p-2 rounded-lg text-sm md:text-base text-[#2f4156b0]">
    <span className="font-medium text-[#2F4156]">{label}:</span> {value || <span className="text-gray-400 italic">Not added</span>}
  </p>
);

export default InfoField;
