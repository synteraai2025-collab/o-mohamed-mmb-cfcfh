import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { FileText } from "lucide-react";

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
      <body className="antialiased">
        {children}
        <footer className="bg-muted border-t mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 o-mohamed-mmb-cfcfh. All rights reserved.
              </p>
              <Link 
                href="/terms-and-conditions" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                <FileText className="h-4 w-4" />
                Terms and Conditions
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
