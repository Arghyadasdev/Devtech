import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#a3e635",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 16,
            background: "rgba(132,204,22,0.1)",
            border: "1px solid rgba(132,204,22,0.25)",
            padding: "4px 14px",
            borderRadius: 100,
          }}
        >
          404 — Page Not Found
        </span>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.03em",
            marginBottom: 16,
            lineHeight: 1.1,
          }}
        >
          Route Does Not Exist
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "var(--muted)",
            maxWidth: 480,
            lineHeight: 1.6,
            marginBottom: 36,
          }}
        >
          The page or route you are looking for has been moved or does not exist. Explore our platforms or get in touch.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" className="btn-violet" style={{ padding: "12px 24px", fontSize: 14 }}>
            Back to Home
          </Link>
          <Link href="/portfolio" className="btn-outline" style={{ padding: "12px 24px", fontSize: 14 }}>
            View Portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
