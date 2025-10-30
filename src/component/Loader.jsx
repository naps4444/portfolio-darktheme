// components/Loader.js
"use client"; // ✅ essential

import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader-container">
      <InfinitySpin width="200" color="#222831" ariaLabel="infinity-spin-loading" />
      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #7e4cb19b;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
}
