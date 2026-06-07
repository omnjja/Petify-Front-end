import Button from "../shared/ui/Button";

const Photo = ({ image, onUpload, onDelete }) => (
  <div className="w-36 h-36 md:w-48 md:h-48 flex-shrink-0 relative">
    {image ? (
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-xl shadow-md"
      />
    ) : (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-xl">
        <p>No Photo</p>
      </div>
    )}
    <input
      type="file"
      accept="image/*"
      onChange={onUpload}
      className="absolute inset-0 opacity-0 cursor-pointer"
    />
    {image && (
      <Button
        onClick={onDelete}
        className="absolute top-1 right-1 bg-red-500 text-white hover:bg-red-600 !px-2 !py-1 !text-xs z-10 rounded-xl"
      >
        Delete
      </Button>
    )}
  </div>
);

export default Photo;
