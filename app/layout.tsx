import type { Metadata } from "next";
import "./globals.css";
import { RootProviders } from "@/components/root-providers";

export const metadata: Metadata = {
  title: "MY-AI-BUILDER - Build apps and sites with AI",
  description: "Turn ideas into apps in minutes. Writes production-ready code",
  openGraph: {
    title: 'MY-AI-BUILDER - Build apps and sites with AI',
    description: 'Turn ideas into apps in minutes - No coding needed',
    type: 'website',
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
