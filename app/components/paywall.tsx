import React from "react";

interface PaywallProps {
  onPurchase: (credits: number, amount: number) => void;
}

const Paywall: React.FC<PaywallProps> = ({ onPurchase }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Purchase Credits
        </h2>
        <div className="flex flex-col space-y-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg"
            onClick={() => onPurchase(5, 7)}
          >
            $7 for 5 Credits
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg"
            onClick={() => onPurchase(1, 3)}
          >
            $3 for 1 Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paywall;
