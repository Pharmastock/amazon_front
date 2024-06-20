import QRCode from "qrcode.react";
import React from "react";
import { useSelector } from "react-redux";

// Utility function to detect if the user is on a mobile device
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export default function Payment() {
  const payAmount = useSelector((state) => state.total);
  const address = useSelector((state) => state.address);
  const amount = payAmount;
  const UPI_ID = "your_upi_id@oksbi"; // Replace 'your_upi_id' with your actual UPI ID
  const payeeName = "sagar ladani"; // Replace 'recipient_name' with the name of the recipient or your business name

  const paymentUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(
    payeeName
  )}&am=${amount}&cu=INR`;

  const googlePayUrl = `intent://upi/pay?pa=${UPI_ID}&pn=${encodeURIComponent(
    payeeName
  )}&am=${amount}&cu=INR#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;

  const phonePeUrl = `intent://upi/pay?pa=${UPI_ID}&pn=${encodeURIComponent(
    payeeName
  )}&am=${amount}&cu=INR#Intent;scheme=upi;package=com.phonepe.app;end`;

  return (
    <div>
      <h1 className="text-center">Payment</h1>

      <div className="pay-btn">
        <div className="card m-auto d-block p-2 mt-5">
          <button
            className="btn btn-primary d-block w-100 my-2"
            onClick={() => (window.location.href = googlePayUrl)}
          >
            Pay with Google Pay
          </button>
          <button
            className="btn btn-secondary d-block w-100 my-2"
            onClick={() => (window.location.href = phonePeUrl)}
          >
            Pay with PhonePe
          </button>
        </div>
      </div>
      <div className="qr-code">
        <div className="card w-25 m-auto d-block p-2 mt-5">
          <QRCode
            className="m-auto d-block h-75 w-75 my-3"
            value={paymentUrl}
          />
          <h3 className="text-center">Rs {payAmount}</h3>
        </div>
      </div>
    </div>
  );
}
