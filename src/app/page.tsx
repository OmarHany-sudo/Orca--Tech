import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title:
    "OrcaTech | Web Development & Cyber Security Company in Egypt & Saudi Arabia",
  description:
    "OrcaTech is a professional software company providing web development, backend systems, and cybersecurity solutions for businesses in Egypt, Saudi Arabia, and worldwide.",
};

export default function Home() {
  return <HomeClient />;
}