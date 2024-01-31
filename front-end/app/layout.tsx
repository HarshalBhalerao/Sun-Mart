import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import Loading from "@/components/ui/LoadingSkeleton";
import ErrorBoundary from "@/components/errors/ErrorBoundary";
import Error from "./error";

export const metadata: Metadata = {
  title: "Sun",
  description: "Best Place to buy farming equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {/* For Light and Dark theme, wrapped Navbar and children into ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
              <main>{children}</main>
            </Suspense>
          </ErrorBoundary>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
