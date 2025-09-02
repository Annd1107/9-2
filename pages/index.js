import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { useState, useEffect } from 'react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <h1>Hello World</h1>
    </div>
  );
}
