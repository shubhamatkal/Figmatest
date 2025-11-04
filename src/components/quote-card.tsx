import { useState } from "react";
import { motion } from "motion/react";
import { RefreshCw } from "lucide-react";
import { motivationalQuotes } from "../data/mock-data";

export function QuoteCard() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="relative overflow-hidden rounded-[24px] p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <motion.p
          key={quoteIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/90 leading-relaxed italic flex-1"
        >
          "{motivationalQuotes[quoteIndex]}"
        </motion.p>
        
        <motion.button
          onClick={handleRefresh}
          className="flex-shrink-0 p-2 rounded-full hover:bg-white/10 transition-colors"
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isRefreshing ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <RefreshCw className="w-5 h-5 text-white/70" strokeWidth={1.5} /> */}
        </motion.button>
      </div>
    </motion.div>
  );
}
