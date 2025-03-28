import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "@/components/providers/sidebar-provider";

export const metadata: Metadata = {
  title: "Delice School",
  description: "Learn how ot make great chiocolates | Delice School",
};

export default function DashboardLayout({
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
        <SidebarProvider>
          <div className="h-full">{children}</div>
        </SidebarProvider>
      </ThemeProvider>

      <SanityLive />
    </ClerkProvider>
  );
}
