"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [text, setText] = useState("");
  const [bg, setBg] = useState("#f28f36"); 
  const [color, setColor] = useState("#000");
  const [size, setSize] = useState(16);

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let raf;
    const animate = () => {
      setCursorPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.2,
        y: prev.y + (mousePos.y - prev.y) * 0.2,
      }));
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [mousePos]);

  useEffect(() => {
    const enter = (e) => {
      setHover(true);
      setText(e.detail.text);
      setBg(e.detail.bg);
      setColor(e.detail.color);
      setSize(e.detail.size || 70);
    };
    const leave = (e) => {
      setHover(false);
      setText("");
      setBg(e.detail?.bg || "#f28f36"); 
      setColor(e.detail?.color || "#000");
      setSize(16);
    };

    window.addEventListener("cursor-enter", enter);
    window.addEventListener("cursor-leave", leave);
    return () => {
      window.removeEventListener("cursor-enter", enter);
      window.removeEventListener("cursor-leave", leave);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: cursorPos.y,
        left: cursorPos.x,
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        color: color,
        fontSize: 12,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        transform: "translate(-8%, -8%)",
        transition:
          "width 0.2s ease, height 0.2s ease, background 0.2s ease, color 0.2s ease",
        zIndex: 999999,
      }}
    >
      {hover && text}
    </div>
  );
}
