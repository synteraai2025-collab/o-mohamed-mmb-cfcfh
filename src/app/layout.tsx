import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "o-mohamed-mmb-cfcfh",
  description: "Next.js app with TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <footer className="bg-muted border-t">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} o-mohamed-mmb-cfcfh. All rights reserved.
              </div>
              <nav className="flex items-center gap-6">
                <Link 
                  href="/privacy-policy" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
            <div className="mt-4 pt-4 border-t border-border text-center text-xs text-muted-foreground">
              Built with Next.js, TypeScript, and Tailwind CSS
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


