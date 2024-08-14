import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Head from "next/head"; // Import Head from next/head

// Define your navigation items here
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebTern",
  description: "Learn how to code websites and get employed!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/WebTern Logo.png" type="image/png" sizes="96x48" />
        <link rel="icon" href="/WebTern Logo.png" type="image/png" sizes="32x32" />
        {/* Additional meta tags */}
        <meta name="description" content="Learn how to code websites and get employed!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        {/* Include the FloatingNav component */}
        <FloatingNav navItems={navItems} />
        <main className="flex-grow">
          {children}
        </main>
        {/* Footer */}
        <footer className="bg-neutral-900 text-white py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="text-center md:text-left">
              <h5 className="text-lg font-bold mb-4">Company</h5>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="text-center">
              <h5 className="text-lg font-bold mb-4">Services</h5>
              <ul className="space-y-2">
                <li>Tutoring</li>
                <li>Courses</li>
                <li>Internship Placement</li>
                <li>Project-Based Learning</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="text-center md:text-right">
              <h5 className="text-lg font-bold mb-4">Follow Us</h5>
              <ul className="space-y-2">
                <li>YouTube</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>

          <div className="container mx-auto text-center mt-8">
            <p>© 2024 WebTern. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
