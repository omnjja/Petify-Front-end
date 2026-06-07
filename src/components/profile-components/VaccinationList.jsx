const VaccinationList = ({ vaccinations }) => (
  <div className="mt-4">
    <h3 className="font-medium text-[#2F4156]">Vaccination Dates</h3>
    <ul className="list-disc list-inside text-[#2f4156b0] mt-1 bg-white p-2 rounded-lg text-sm md:text-base">
      {vaccinations?.length > 0 ? (
        vaccinations.map((date, i) => <li key={i}>{date}</li>)
      ) : (
        <li className="list-none text-[#2f4156b0]">No vaccination dates</li>
      )}
    </ul>
  </div>
);

export default VaccinationList;