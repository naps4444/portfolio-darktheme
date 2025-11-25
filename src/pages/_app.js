import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/component/Layout";

// Dynamic imports (client-side only)
const Loader = dynamic(() => import("@/component/Loader"), { ssr: false });
const Skeleton = dynamic(() => import("@/component/Skeleton"), { ssr: false });

export default function App({ Component, pageProps }) {
  const [initialLoading, setInitialLoading] = useState(true); // Initial Loader
  const [pageLoading, setPageLoading] = useState(false);       // Skeleton Loader
  const router = useRouter();

  // --- Initial Loader ---
  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 2500); // your original 2.5s
    return () => clearTimeout(timer);
  }, []);

  // --- Skeleton Loader for page transitions ---
  useEffect(() => {
    const handleStart = () => {
      if (!initialLoading) setPageLoading(true); // Only after initial loader
    };
    const handleStop = () => setPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router, initialLoading]);

  return (
    <>
      {/* --- Main Layout --- */}
      <Layout>
        {/* Show skeleton loader only after initial loader */}
        {pageLoading ? <Skeleton /> : <Component {...pageProps} />}
      </Layout>

      {/* --- Initial Full-Screen Loader --- */}
      {initialLoading && (
        <div className="fixed inset-0 z-[9999] bg-[#222831] flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
}
