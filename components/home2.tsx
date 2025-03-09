import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Stacklist Cards",
  description:
    "Add your favorite cards, store, share, and stack them later for easy access.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
              <div className="w-10 h-8 bg-purple-200 rounded-md"></div>
            </div>
          </div>

          <h1 className="text-xl font-semibold mb-2">
            Add your favorite cards,
            <br />
            store, share, and stack
            <br />
            them later for easy access.
          </h1>

          <p className="text-gray-500 mb-6">
            Here{"'"}s where your saved cards will call home
          </p>

          <button className="w-full bg-purple-600 text-white rounded-lg py-3 font-medium hover:bg-purple-700 transition-colors mb-4">
            Create New Card
          </button>

          <a
            href="#"
            className="inline-flex items-center text-purple-600 hover:underline"
          >
            Download Chrome Extension
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </main>

      {/* Background Card Placeholders */}
      <div className="absolute top-20 left-4 w-72 h-32 bg-gray-50 rounded-lg opacity-50"></div>
      <div className="absolute top-60 left-4 w-72 h-32 bg-gray-50 rounded-lg opacity-50"></div>
      <div className="absolute top-20 right-4 w-72 h-32 bg-gray-50 rounded-lg opacity-50"></div>
      <div className="absolute top-60 right-4 w-72 h-32 bg-gray-50 rounded-lg opacity-50"></div>
    </div>
  );
}
