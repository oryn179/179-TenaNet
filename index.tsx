import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, PlaySquare, BookOpen } from "lucide-react";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Define course plans
type Plan = {
  name: string;
  price?: number;
  description?: string[];
};

const plans: Plan[] = [
  { name: "Standard (Only Videos)", price: 238 },
  { name: "VIP (Only Books)", price: 348 },
  {
    name: "VVIP (Books + Videos + Social Media App Methods)",
    price: 590,
    description: [
      "How To Get YouTube Premium",
      "How To Get Prime Video Premium",
      "How To Get Crunchyroll Premium",
    ],
  },
  { name: "Premium", description: ["We are cooking"] },
];

const Root = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <React.StrictMode>
      <App />

      {/* Ethical Hacking Course Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-red-500">
            Ethical Hacking Course
          </h2>
          <p className="text-gray-400 mb-8">
            Learn practical ethical hacking techniques with real-world methods.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition"
          >
            Buy Paid Course
          </button>
        </div>
      </section>

      {/* Modal for Course Selection */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-900 rounded-2xl p-6 w-full max-w-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => {
                  setModalOpen(false);
                  setSelectedPlan(null);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4 text-center">
                Choose Your Plan
              </h3>

              <div className="space-y-4">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    onClick={() => plan.price && setSelectedPlan(plan)}
                    className={`border rounded-xl p-4 cursor-pointer transition ${
                      selectedPlan?.name === plan.name
                        ? "border-red-500 bg-zinc-800"
                        : "border-zinc-700 hover:border-red-400"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{plan.name}</span>
                      {plan.price ? (
                        <span className="font-bold">{plan.price} ETB</span>
                      ) : (
                        <span className="text-sm text-gray-400">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {plan.description && (
                      <div className="mt-3 text-sm text-gray-400 space-y-2">
                        {plan.description.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            {item.includes("YouTube") && <Youtube size={16} />}
                            {item.includes("Prime") && <PlaySquare size={16} />}
                            {item.includes("Crunchyroll") && <BookOpen size={16} />}
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {selectedPlan?.price && (
                <button className="w-full mt-6 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-bold transition">
                  Pay (ETB {selectedPlan.price})
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment Info Section */}
      <section className="py-16 px-6 bg-cyber-gray text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Payment Option</h2>

          <div className="bg-zinc-900 rounded-xl p-6 space-y-4 shadow-lg">
            <p className="text-lg font-semibold">Telebirr Account</p>
            <p>Phone No: <span className="font-bold">0978366565</span></p>
            <p>Name: <span className="font-bold">Alemseged</span></p>

            <button
              className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-bold transition"
              onClick={() => alert("Please send your transaction on Telegram")}
            >
              DONE
            </button>

            <p className="mt-4 text-gray-400">
              Please send your transaction on Telegram
            </p>

            <a
              href="https://t.me/Confirm_TenaNet_BOT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              Send On Telegram
            </a>

            <p className="mt-4 text-gray-400">
              Please wait for us to see your transaction.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              If your transaction does not appear within 24 hours, contact us via{" "}
              <a
                href="https://t.me/oryn179"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-red-500 font-bold animate-pulse"
              >
                Contact here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);
