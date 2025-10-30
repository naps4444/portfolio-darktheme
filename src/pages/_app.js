import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// ✅ Dynamically import Loader (client-side only)
const Loader = dynamic(() => import("@/component/Loader"), { ssr: false });

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2.5 seconds
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <Component {...pageProps} />;
}
