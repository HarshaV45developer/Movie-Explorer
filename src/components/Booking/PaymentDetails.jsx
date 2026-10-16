import React, { useState } from "react";

import { Button } from "@mui/material";

const PaymentDetails = ({ totalAmount, onSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const [formData, setFormData] = useState({
    upiId: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    bank: "",
    wallet: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  };

  const validatePayment = () => {
    if (paymentMethod === "UPI") {
      if (!formData.upiId.trim()) {
        return "Please enter your UPI ID.";
      }
    }

    if (paymentMethod === "CARD") {
      if (
        !formData.cardName.trim() ||
        !formData.cardNumber.trim() ||
        !formData.expiry.trim() ||
        !formData.cvv.trim()
      ) {
        return "Please fill all card details.";
      }
    }

    if (paymentMethod === "NETBANKING") {
      if (!formData.bank) {
        return "Please select your bank.";
      }
    }

    if (paymentMethod === "WALLET") {
      if (!formData.wallet) {
        return "Please select your wallet.";
      }
    }

    return "";
  };

  const handlePay = () => {
    const validationError = validatePayment();

    if (validationError) {
      setError(validationError);
      return;
    }

    onSuccess();
  };

  return (
    <div className="theme-card theme-border mt-6 rounded-2xl border p-6">
      <h2 className="theme-text text-xl font-bold">Payment</h2>

      <p className="theme-text-secondary mt-1 text-sm">
        Complete your demo payment
      </p>

      {/* METHODS */}

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["UPI", "CARD", "NETBANKING", "WALLET"].map((method) => {
          const active = paymentMethod === method;

          return (
            <button
              key={method}
              type="button"
              onClick={() => setPaymentMethod(method)}
              className={`rounded-lg border px-3 py-3 text-xs font-bold transition sm:text-sm ${
                active
                  ? "border-red-600 bg-red-600 text-white"
                  : "theme-border theme-text hover:border-red-600"
              }`}
            >
              {method}
            </button>
          );
        })}
      </div>

      {/* UPI */}

      {paymentMethod === "UPI" && (
        <div className="mt-5">
          <label className="theme-text text-sm font-semibold">UPI ID</label>

          <input
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            placeholder="example@upi"
            className="theme-input mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-red-600"
          />
        </div>
      )}

      {/* CARD */}

      {paymentMethod === "CARD" && (
        <div className="mt-5 space-y-4">
          <div>
            <label className="theme-text text-sm font-semibold">
              Card Holder Name
            </label>

            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              placeholder="Enter name on card"
              className="theme-input mt-2 w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="theme-text text-sm font-semibold">
              Card Number
            </label>

            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="theme-input mt-2 w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="theme-text text-sm font-semibold">Expiry</label>

              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="theme-input mt-2 w-full rounded-lg border px-4 py-3"
              />
            </div>

            <div>
              <label className="theme-text text-sm font-semibold">CVV</label>

              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="•••"
                maxLength={4}
                className="theme-input mt-2 w-full rounded-lg border px-4 py-3"
              />
            </div>
          </div>
        </div>
      )}

      {/* NET BANKING */}

      {paymentMethod === "NETBANKING" && (
        <div className="mt-5">
          <label className="theme-text text-sm font-semibold">
            Select Bank
          </label>

          <select
            name="bank"
            value={formData.bank}
            onChange={handleChange}
            className="theme-input mt-2 w-full rounded-lg border px-4 py-3"
          >
            <option value="">Select your bank</option>

            <option value="SBI">State Bank of India</option>

            <option value="HDFC">HDFC Bank</option>

            <option value="ICICI">ICICI Bank</option>

            <option value="AXIS">Axis Bank</option>
          </select>
        </div>
      )}

      {/* WALLET */}

      {paymentMethod === "WALLET" && (
        <div className="mt-5">
          <label className="theme-text text-sm font-semibold">
            Select Wallet
          </label>

          <select
            name="wallet"
            value={formData.wallet}
            onChange={handleChange}
            className="theme-input mt-2 w-full rounded-lg border px-4 py-3"
          >
            <option value="">Select wallet</option>

            <option value="PAYTM">Paytm</option>

            <option value="PHONEPE">PhonePe</option>

            <option value="AMAZONPAY">Amazon Pay</option>
          </select>
        </div>
      )}

      {/* ERROR */}

      {error && (
        <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
      )}

      {/* PAY */}

      <Button
        fullWidth
        variant="contained"
        onClick={handlePay}
        className="!mt-6 !bg-red-600 !py-3.5 !text-base !font-semibold !normal-case !shadow-none hover:!bg-red-700"
      >
        Pay ₹{totalAmount}
      </Button>
    </div>
  );
};

export default PaymentDetails;
