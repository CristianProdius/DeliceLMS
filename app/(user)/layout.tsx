import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SanityLive } from "@/sanity/lib/live";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Delice School",
  description: "Learn how ot make great chiocolates | Delice School",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </ThemeProvider>

      <SanityLive />
    </ClerkProvider>
  );
}
