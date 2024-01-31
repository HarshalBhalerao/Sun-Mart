"use client";

import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import "../globals.css";

/**
 * Home Page
 *
 * Used Spline for configuring 3D animation of earth
 *
 */
export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Spline
        className="flex justify-center items-center"
        scene="https://prod.spline.design/GpH7auy76mQSZlNi/scene.splinecode"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ animation: "fade-down 0.5s" }}
      >
        <h1 className="scale-150 text-3xl md:text-6xl bg-gradient-to-r from-teal-600 to-violet-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          <Logo />
        </h1>
        <h1 className="pt-10 text-3xl md:text-5xl lg:text-6xl font-mono text-center dark:invert text-zinc-900 mb-6 w-3/4 leading-snug">
          Choose Sun for a greener, user-friendly, and sustainable future
        </h1>
        <div className="pt-6">
          <Link href={"/products"}>
            <Button variant="default" size="default" className="rounded-full">
              Check our Products
              <ArrowRightIcon className="pl-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
