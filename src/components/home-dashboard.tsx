import { motion } from "motion/react";
import { StepProgressRing } from "./step-progress-ring";
import { QuoteCard } from "./quote-card";
import { WeatherCard } from "./weather-card";
import { mockUserData } from "../data/mock-data";

export function HomeDashboard() {
  // Get user data from localStorage or use mock data
  const userName = localStorage.getItem("stepzen_user_name") || mockUserData.name;
  const userGoal = parseInt(localStorage.getItem("stepzen_user_goal") || mockUserData.goal.toString());

  // Get current date
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric"
  });

  return (
    <div className="min-h-screen pb-24 pt-8 px-6">
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-white text-3xl mb-2">
            Hi, {userName} 👋
          </h1>
          <p className="text-white/50">
            {dateString}
          </p>
        </motion.div>

        {/* Main Step Progress Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-32"
        >
          <StepProgressRing
            steps={mockUserData.steps}
            goal={userGoal}
            distance={mockUserData.distance}
            calories={mockUserData.calories}
          />
        </motion.div>

        {/* Quote Card */}
        <div className="mb-6">
          <QuoteCard />
        </div>

        {/* Weather Card */}
        <div className="mb-6">
          <WeatherCard city={mockUserData.city} />
        </div>
      </div>
    </div>
  );
}
