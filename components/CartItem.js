export default function CartItem({ item, updateQuantity, removeItem }) {
    return (
      <div className="flex items-center justify-between mb-4">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
        <div>
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
          <div className="flex items-center">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
        </div>
        <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
      </div>
    );
  }
  