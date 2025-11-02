import React from "react";

const CartModal = ({ cart, onClose, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    // Background blur + semi black
    <div
      className="fixed inset-0 bg-blur-xxl bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose} // clicking outside closes modal
    >
      {/* Modal box */}
      <div
        className="bg-sky-100 p-6 rounded-lg shadow-2xl w-150 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // stops background click
      >
        <h2 className="text-xl font-bold text-center text-blue-900 mb-4">
          Your Cart 🛒
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Cart is empty 😢</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2"
                >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1 ml-3">
                  <p className="font-semibold text-green-800 text-sm">
                    {item.title}
                  </p>
                  <p className="text-gray-700 text-sm">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
            <p className="font-bold text-green-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              <div className="flex flex-col items-end">
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-4 text-xs text-red-600 hover:text-red-800 font-semibold transition-colors"
              >
                Remove
              </button>
            </div>
             
              </div>
            ))}
            <div className="text-right mt-4 font-bold text-lg text-green-900">
              Total: ${total.toFixed(2)}
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;

