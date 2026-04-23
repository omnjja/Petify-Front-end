import React from 'react'

const PetType = ({pet}) => {
  return (
    <div key={pet.id} className="flex flex-col items-center gap-2">
      <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] overflow-hidden flex items-center transition-transform duration-300 hover:scale-[1.03]">
        <img
          src={pet.photo}
          alt={pet.type}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="text-[#2F4156] font-semibold">{pet.type}</div>
    </div>
  );
}

export default PetType
