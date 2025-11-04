import { motion } from "motion/react";
import { Footprints } from "lucide-react";

interface StepProgressRingProps {
  steps: number;
  goal: number;
  distance: number;
  calories: number;
}

export function StepProgressRing({ steps, goal, distance, calories }: StepProgressRingProps) {
  const percentage = (steps / goal) * 100;
  const isOverGoal = steps > goal;
  const displayPercentage = Math.min(percentage, 100);
  const overflowPercentage = isOverGoal ? percentage - 100 : 0;
  
  const circumference = 2 * Math.PI * 120; // radius = 120
  const strokeDashoffset = circumference - (displayPercentage / 100) * circumference;
  const overflowDashoffset = circumference - (overflowPercentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-full max-w-[320px] mx-auto">
      {/* SVG Progress Ring */}
      <svg className="w-[280px] h-[280px] -rotate-90" viewBox="0 0 280 280">
        {/* Background circle */}
        <circle
          cx="140"
          cy="140"
          r="120"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="12"
        />
        
        {/* Main progress circle - simple gradient */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A1FFCE" />
            <stop offset="100%" stopColor="#6DD5FA" />
          </linearGradient>
          
          {/* Overflow gradient - yellow/gold */}
          <linearGradient id="overflowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
        
        {/* Main ring */}
        <motion.circle
          cx="140"
          cy="140"
          r="120"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Overflow ring - shows only the excess */}
        {isOverGoal && (
          <motion.circle
            cx="140"
            cy="140"
            r="120"
            fill="none"
            stroke="url(#overflowGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ 
              strokeDashoffset: overflowDashoffset
            }}
            transition={{ 
              duration: 2, 
              ease: "easeOut", 
              delay: 2
            }}
          />
        )}
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <Footprints className="w-12 h-12 mb-4 text-white/80" strokeWidth={1.5} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="text-5xl mb-1 text-white">
            {steps.toLocaleString()}
          </div>
          <div className="text-white/60 tracking-wide">
            Steps
          </div>
        </motion.div>
      </div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -bottom-16 left-0 right-0 flex justify-center gap-12"
      >
        <div className="text-center">
          <div className="text-white/90 text-xl mb-1">{distance} km</div>
          <div className="text-white/50 text-sm">Distance</div>
        </div>
        <div className="text-center">
          <div className="text-white/90 text-xl mb-1">{calories} kcal</div>
          <div className="text-white/50 text-sm">Calories</div>
        </div>
      </motion.div>
    </div>
  );
}
