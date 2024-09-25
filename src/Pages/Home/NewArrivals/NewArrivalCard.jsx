

const NewArrivalCard = ({ data }) => {
    const { id, name, image, price, Ratings } = data;
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <img src={image} alt={name} className="w-full h-auto object-cover" />
        <h4 className="mt-2 text-lg font-bold">Name: {name}</h4>
        <h2 className="text-md">Price: {price}</h2>
        <h2 className="text-md">Ratings: {Ratings}</h2>
      </div>
    );
  };
  
  export default NewArrivalCard;