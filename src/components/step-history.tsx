import { motion } from "motion/react";
import { ArrowLeft, Footprints } from "lucide-react";
import { stepHistory } from "../data/mock-data";

interface StepHistoryProps {
  onBack: () => void;
}

export function StepHistory({ onBack }: StepHistoryProps) {
  return (
    <div className="min-h-screen pb-8 pt-8 px-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-4"
        >
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
          </button>
          <h1 className="text-white text-3xl">
            Step Count History
          </h1>
        </motion.div>

        {/* Scrollable List */}
        <div className="space-y-3 pb-20">
          {stepHistory.map((entry, index) => {
            const percentage = Math.min((entry.steps / entry.goal) * 100, 100);
            const isGoalMet = entry.steps >= entry.goal;

            return (
              <motion.div
                key={entry.date}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                className={`relative overflow-hidden rounded-[20px] p-5 backdrop-blur-xl border border-white/20 shadow-lg ${
                  index % 2 === 0 ? "bg-white/10" : "bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isGoalMet 
                        ? "bg-gradient-to-br from-[#A1FFCE] to-[#89F7FE]" 
                        : "bg-white/10"
                    }`}>
                      <Footprints className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-white text-sm mb-1">{entry.date}</div>
                      <div className="text-white/60 text-xs">
                        {entry.steps.toLocaleString()} Steps
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg ${isGoalMet ? "text-[#A1FFCE]" : "text-white/80"}`}>
                      {percentage.toFixed(0)}%
                    </div>
                    {isGoalMet && (
                      <div className="text-xs text-[#A1FFCE]">Goal met! ✓</div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ delay: index * 0.03 + 0.2, duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      isGoalMet
                        ? "bg-gradient-to-r from-[#A1FFCE] to-[#89F7FE]"
                        : "bg-gradient-to-r from-[#F8B500] to-[#FFDEE9]"
                    }`}
                  />
                </div>

                {/* Mini Sparkline Visual */}
                <div className="mt-2 flex items-end gap-1 h-8">
                  {[...Array(7)].map((_, i) => {
                    const height = Math.random() * 70 + 30; // Random height between 30-100%
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.03 + 0.1 + i * 0.05, duration: 0.4 }}
                        className="flex-1 bg-white/20 rounded-sm"
                      />
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sticky Summary Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-0 left-0 right-0 backdrop-blur-xl bg-white/10 border-t border-white/20 py-4 px-6"
        >
          <div className="max-w-md mx-auto text-center">
            <p className="text-white/60 text-sm">60-day data stored locally.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
