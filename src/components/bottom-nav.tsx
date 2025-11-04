import { motion } from "motion/react";
import { Home, User } from "lucide-react";

interface BottomNavProps {
  activeTab: "home" | "profile";
  onTabChange: (tab: "home" | "profile") => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 backdrop-blur-xl bg-white/10 border-t border-white/20">
      <div className="max-w-md mx-auto flex items-center justify-around px-8 py-4">
        <button
          onClick={() => onTabChange("home")}
          className="relative flex flex-col items-center gap-1 py-2 px-6"
        >
          {activeTab === "home" ? (
            <Home className="w-6 h-6 text-white" fill="white" strokeWidth={1.5} />
          ) : (
            <Home className="w-6 h-6 text-white/50" strokeWidth={1.5} />
          )}
          <span className={`text-xs ${activeTab === "home" ? "text-white" : "text-white/50"}`}>
            Home
          </span>
          {activeTab === "home" && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>

        <button
          onClick={() => onTabChange("profile")}
          className="relative flex flex-col items-center gap-1 py-2 px-6"
        >
          {activeTab === "profile" ? (
            <User className="w-6 h-6 text-white" fill="white" strokeWidth={1.5} />
          ) : (
            <User className="w-6 h-6 text-white/50" strokeWidth={1.5} />
          )}
          <span className={`text-xs ${activeTab === "profile" ? "text-white" : "text-white/50"}`}>
            Profile
          </span>
          {activeTab === "profile" && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      </div>
    </div>
  );
}
