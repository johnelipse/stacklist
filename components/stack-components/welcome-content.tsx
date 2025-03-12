import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import StackDialog from "../dialogs/stack-dialog";

export default function WelcomeContent() {
  return (
    <div className="max-w-2xl mx-auto text-center mb-8">
      <h1 className="text-2xl font-semibold mb-2">Welcome to Stacklist</h1>
      <p className="text-gray-600 mb-8">
        Start saving, organizing, and sharing your
        <br />
        favorite things in just three simple steps!
      </p>

      <div className="space-y-6">
        {/* Step 1 */}
        <div className="bg-white rounded-xl border p-6 text-left">
          <h2 className="font-semibold mb-2">
            Step 1: Create Your First Stack
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            Start organizing your favorite links with personalized notes, making
            them easy to find and share.
          </p>
          <StackDialog />
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl border p-6 text-left">
          <h2 className="font-semibold mb-2">Step 2: Get the Apps</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Access and manage all your favorites seamlessly, whether you
            {"'"}
            re at home or on the move.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Download Apps
          </Button>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl border p-6 text-left">
          <h2 className="font-semibold mb-2">Step 3: Discover the Network</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Discover curated collections from the Stacklist community, find new
            favorites, and start saving them directly to your account!
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Sparkles className="h-4 w-4 mr-2" />
            Discover
          </Button>
        </div>
      </div>
    </div>
  );
}
