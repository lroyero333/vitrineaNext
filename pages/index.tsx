import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "vitrineaapp://";
    setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.sv.vitrinnea.ltda";
    }, 2000);
  }, []);

  return (
    <div>
      <p>Redirigiendoo...</p>
    </div>
  );
}
