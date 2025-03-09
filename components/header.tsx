import { Plus, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderComp() {
  return (
    <header className="border-b fixed w-full top-0 border-gray-200 bg-white/40 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <div className="relative w-6 h-6 text-purple-500">
              <Image
                src="/logo.svg"
                alt="Stacklist Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/dashboard" className="font-medium text-black">
              Cards
            </Link>
            <Link
              href="/dashboard/stacks"
              className="font-medium text-gray-500 hover:text-black"
            >
              Stacks
            </Link>
            <div className="h-4 border-l border-gray-300 mx-2"></div>
            <Link
              href="/discover"
              className="flex items-center text-gray-500 hover:text-black"
            >
              Discover
              <span className="ml-1 text-purple-600">✨</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Find a card"
              className="py-1.5 pl-10 pr-4 bg-gray-100 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute inset-y-0 right-2 flex items-center">
              <span className="text-xs text-gray-400">⌘K</span>
            </button>
          </div>

          <button className="p-1.5 bg-purple-600 rounded-lg text-white hover:bg-purple-700">
            <Plus className="h-5 w-5" />
          </button>

          <button className="ml-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/profile.avif"
                alt="User Avatar"
                fill
                className="object-cover"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
