import { useState } from "react";
import { motion } from "motion/react";
import { Edit2, ChevronRight, Target, Minus, Plus } from "lucide-react";
import { mockUserData } from "../data/mock-data";
import { WeeklyChart } from "./weekly-chart";

interface ProfileScreenProps {
  onNavigateToHistory: () => void;
}

export function ProfileScreen({ onNavigateToHistory }: ProfileScreenProps) {
  // Get user data from localStorage
  const storedName = localStorage.getItem("stepzen_user_name") || mockUserData.name;
  const storedAvatar = localStorage.getItem("stepzen_user_avatar");
  const storedGoal = parseInt(localStorage.getItem("stepzen_user_goal") || mockUserData.goal.toString());
  
  const avatarUrl = storedAvatar 
    ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${storedAvatar}`
    : mockUserData.avatar;

  const [name, setName] = useState(storedName);
  const [isEditing, setIsEditing] = useState(false);
  const [goal, setGoal] = useState(storedGoal);
  const [isEditingGoal, setIsEditingGoal] = useState(false);

  const handleNameSave = () => {
    setIsEditing(false);
    localStorage.setItem("stepzen_user_name", name);
  };

  const handleGoalSave = () => {
    localStorage.setItem("stepzen_user_goal", goal.toString());
    // Trigger a small success feedback
    setIsEditingGoal(false);
    setTimeout(() => setIsEditingGoal(false), 100);
  };

  const incrementGoal = () => {
    const newGoal = Math.min(goal + 1000, 50000);
    setGoal(newGoal);
    localStorage.setItem("stepzen_user_goal", newGoal.toString());
  };

  const decrementGoal = () => {
    const newGoal = Math.max(goal - 1000, 1000);
    setGoal(newGoal);
    localStorage.setItem("stepzen_user_goal", newGoal.toString());
  };

  return (
    <div className="min-h-screen pb-24 pt-8 px-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-white text-3xl mb-2">
            Profile
          </h1>
          <p className="text-white/50">
            Your fitness journey
          </p>
        </motion.div>

        {/* Profile Card with Avatar and Editable Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative overflow-hidden rounded-[24px] p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg mb-6"
        >
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-[#A1FFCE] to-[#89F7FE] flex-shrink-0">
              <img 
                src={avatarUrl} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Edit */}
            <div className="flex-1">
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleNameSave}
                    onKeyDown={(e) => e.key === "Enter" && handleNameSave()}
                    autoFocus
                    className="bg-white/10 text-white px-3 py-2 rounded-lg border border-white/20 outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h2 className="text-white text-2xl">{name}</h2>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Edit2 className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                  </button>
                </div>
              )}
              <p className="text-white/60 mt-1">{mockUserData.city}</p>
            </div>
          </div>
        </motion.div>

        {/* Weekly Chart */}
        <div className="mb-6">
          <WeeklyChart />
        </div>

        {/* History Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={onNavigateToHistory}
          className="w-full relative overflow-hidden rounded-[24px] p-6 backdrop-blur-xl bg-gradient-to-r from-[#A1FFCE]/20 to-[#89F7FE]/20 border border-white/20 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] mb-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-white text-lg">See Step Count History</span>
            <ChevronRight className="w-6 h-6 text-white/80" strokeWidth={1.5} />
          </div>
        </motion.button>

        {/* Daily Goal Editor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative overflow-hidden rounded-[24px] p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-white/80" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-lg">Daily Step Goal</h3>
              <p className="text-white/50 text-sm">Adjust your target</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white/5 rounded-[20px] p-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={decrementGoal}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              <Minus className="w-5 h-5 text-white" strokeWidth={1.5} />
            </motion.button>
            
            <div className="text-center">
              <motion.div 
                key={goal}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-white text-3xl mb-1"
              >
                {goal.toLocaleString()}
              </motion.div>
              <div className="text-white/50 text-sm">steps per day</div>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={incrementGoal}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              <Plus className="w-5 h-5 text-white" strokeWidth={1.5} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
