export default function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="flex items-center justify-between mb-4 border-b pb-4">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
      <div className="flex-grow mx-4">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)} 
            className="bg-gray-300 px-2"
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            className="w-12 text-center mx-2 border"
            min="1"
          />
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)} 
            className="bg-gray-300 px-2"
          >
            +
          </button>
        </div>
      </div>
      <button 
        onClick={() => removeItem(item.id)} 
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}
