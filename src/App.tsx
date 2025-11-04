import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Onboarding } from "./components/onboarding";
import { HomeDashboard } from "./components/home-dashboard";
import { ProfileScreen } from "./components/profile-screen";
import { StepHistory } from "./components/step-history";
import { BottomNav } from "./components/bottom-nav";

type Screen = "onboarding" | "home" | "profile" | "history";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>("onboarding");
  const [backgroundGradient, setBackgroundGradient] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  // Check if onboarding is completed
  useEffect(() => {
    const onboardingCompleted = localStorage.getItem("stepzen_onboarding_completed");
    if (onboardingCompleted === "true") {
      setActiveScreen("home");
    }
    setIsLoading(false);
  }, []);

  // Determine time-based gradient
  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      // Morning: #FCEABB → #F8B500
      setBackgroundGradient("bg-gradient-to-br from-[#FCEABB] to-[#F8B500]");
    } else if (hour >= 12 && hour < 18) {
      // Evening: #6DD5FA → #2980B9
      setBackgroundGradient("bg-gradient-to-br from-[#6DD5FA] to-[#2980B9]");
    } else {
      // Night: #0F2027 → #203A43 → #2C5364
      setBackgroundGradient("bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364]");
    }
  }, []);

  const handleOnboardingComplete = (data: { name: string; goal: number; avatar: string }) => {
    console.log("Onboarding completed with data:", data);
    setActiveScreen("home");
  };

  const handleTabChange = (tab: "home" | "profile") => {
    setActiveScreen(tab);
    // Refresh home screen when navigating to it to pick up any goal changes
    if (tab === "home") {
      setRefreshKey(prev => prev + 1);
    }
  };

  const handleNavigateToHistory = () => {
    setActiveScreen("history");
  };

  const handleBackToProfile = () => {
    setActiveScreen("profile");
  };

  const activeTab = activeScreen === "history" ? "profile" : (activeScreen as "home" | "profile");

  // Show loading state briefly while checking localStorage
  if (isLoading) {
    return (
      <div className={`min-h-screen ${backgroundGradient} transition-colors duration-1000 flex items-center justify-center`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-2xl"
        >
          StepZen
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${backgroundGradient} transition-colors duration-1000`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeScreen === "onboarding" && (
            <Onboarding onComplete={handleOnboardingComplete} />
          )}
          {activeScreen === "home" && <HomeDashboard key={refreshKey} />}
          {activeScreen === "profile" && (
            <ProfileScreen onNavigateToHistory={handleNavigateToHistory} />
          )}
          {activeScreen === "history" && (
            <StepHistory onBack={handleBackToProfile} />
          )}
        </motion.div>
      </AnimatePresence>

      {activeScreen !== "history" && activeScreen !== "onboarding" && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
}
