import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer2() {
  return (
    <footer className="border-t border-gray-200 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <div className="relative w-6 h-6 mr-2">
              <Image
                src="/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-purple-600 font-medium">stacklist</span>
          </Link>
          <span className="text-sm text-gray-500">© 2025 Stacks, Inc</span>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link
            href="/privacy"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookies"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Cookie Policy
          </Link>
          <Link
            href="/consent"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Consent Preferences
          </Link>
          <Link
            href="/feedback"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Submit Feedback
          </Link>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
