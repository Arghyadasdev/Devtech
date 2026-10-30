"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="sec-label">Showcase</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              fontFamily: "var(--sans)",
            }}
          >
            See Us <span className="gradient-text">In Action</span>
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: 960,
            margin: "0 auto",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "#000",
            boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
          }}
        >
          <video
            ref={videoRef}
            src="/video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "auto", display: "block" }}
          />

          {/* Controls overlay */}
          <div
            style={{
              position: "absolute",
              left: 16,
              bottom: 16,
              display: "flex",
              gap: 8,
            }}
          >
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(9,9,11,0.7)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(9,9,11,0.7)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
