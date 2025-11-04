import { useState } from "react";
import { motion } from "motion/react";
import { User, Target, ChevronRight, Minus, Plus } from "lucide-react";
import { avatarOptions } from "../data/mock-data";

interface OnboardingProps {
  onComplete: (data: { name: string; goal: number; avatar: string }) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(10000);
  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0].seed);
  const [errors, setErrors] = useState<{ name?: string; goal?: string }>({});

  const handleContinue = () => {
    const newErrors: { name?: string; goal?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    }
    
    if (goal < 1000) {
      newErrors.goal = "Goal should be at least 1000 steps";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Save to localStorage
    localStorage.setItem("stepzen_user_name", name);
    localStorage.setItem("stepzen_user_goal", goal.toString());
    localStorage.setItem("stepzen_user_avatar", selectedAvatar);
    localStorage.setItem("stepzen_onboarding_completed", "true");
    
    onComplete({ name, goal, avatar: selectedAvatar });
  };

  const incrementGoal = () => {
    setGoal((prev) => Math.min(prev + 1000, 50000));
  };

  const decrementGoal = () => {
    setGoal((prev) => Math.max(prev - 1000, 1000));
  };

  return (
    <div className="min-h-screen pt-12 pb-8 px-6 flex flex-col">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2 mb-8"
        >
          <div className="w-8 h-1 rounded-full bg-white"></div>
          <div className="w-8 h-1 rounded-full bg-white/30"></div>
          <div className="w-8 h-1 rounded-full bg-white/30"></div>
        </motion.div>

        {/* Section 1 - Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-white text-4xl mb-3">
            Welcome to StepZen 👋
          </h1>
          <p className="text-white/70 text-lg">
            Let's set up your profile to get started.
          </p>
        </motion.div>

        {/* Section 2 - Name Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          <label className="text-white/80 mb-3 block">
            What's your name?
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <User className="w-5 h-5 text-white/50" strokeWidth={1.5} />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              placeholder="Enter your name"
              className="w-full pl-12 pr-4 py-4 rounded-[24px] backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-white/40 transition-all shadow-lg"
            />
          </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-300 text-sm mt-2 ml-4"
            >
              {errors.name}
            </motion.p>
          )}
        </motion.div>

        {/* Section 3 - Step Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-6"
        >
          <label className="text-white/80 mb-3 block flex items-center gap-2">
            <Target className="w-5 h-5" strokeWidth={1.5} />
            Set your daily step goal
          </label>
          <div className="relative rounded-[24px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg p-4">
            <div className="flex items-center justify-between">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={decrementGoal}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Minus className="w-5 h-5 text-white" strokeWidth={1.5} />
              </motion.button>
              
              <div className="text-center">
                <div className="text-white text-3xl mb-1">
                  {goal.toLocaleString()}
                </div>
                <div className="text-white/50 text-sm">steps</div>
              </div>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={incrementGoal}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Plus className="w-5 h-5 text-white" strokeWidth={1.5} />
              </motion.button>
            </div>
          </div>
          <p className="text-white/50 text-sm mt-2 ml-4">
            You can change this later in your profile.
          </p>
          {errors.goal && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-300 text-sm mt-2 ml-4"
            >
              {errors.goal}
            </motion.p>
          )}
        </motion.div>

        {/* Section 4 - Avatar Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-8"
        >
          <label className="text-white/80 mb-4 block">
            Choose your avatar
          </label>
          <div className="overflow-x-auto pb-4 -mx-2 px-2">
            <div className="flex gap-4 min-w-max">
              {avatarOptions.map((avatar) => (
                <motion.button
                  key={avatar.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAvatar(avatar.seed)}
                  className={`relative w-20 h-20 rounded-full overflow-hidden transition-all ${
                    selectedAvatar === avatar.seed
                      ? "ring-4 ring-[#A1FFCE] shadow-[0_0_20px_rgba(161,255,206,0.5)]"
                      : "ring-2 ring-white/20"
                  }`}
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar.seed}`}
                    alt={avatar.label}
                    className="w-full h-full object-cover"
                  />
                  {selectedAvatar === avatar.seed && (
                    <motion.div
                      layoutId="avatar-selection"
                      className="absolute inset-0 bg-[#A1FFCE]/20"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
          <p className="text-white/50 text-sm mt-2 ml-4">
            You can change this anytime in your profile.
          </p>
        </motion.div>

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* Section 5 - Continue Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleContinue}
          className="w-full rounded-[24px] p-5 bg-gradient-to-r from-[#6DD5FA] to-[#2980B9] shadow-lg hover:shadow-xl transition-all mb-6 group"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-white text-lg">Let's Go</span>
            <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </div>
        </motion.button>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-white/40 text-center text-sm mb-4"
        >
          Every step matters.
        </motion.p>
      </div>
    </div>
  );
}
