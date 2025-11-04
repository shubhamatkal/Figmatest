import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";
import { last7DaysData } from "../data/mock-data";

export function WeeklyChart() {
  const totalSteps = last7DaysData.reduce((sum, day) => sum + day.steps, 0);
  const averageSteps = Math.round(totalSteps / last7DaysData.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="relative overflow-hidden rounded-[24px] p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg"
    >
      <h3 className="text-white text-xl mb-6">Last 7 Days</h3>

      <div className="h-[200px] mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={last7DaysData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A1FFCE" stopOpacity={0.9} />
                <stop offset="50%" stopColor="#89F7FE" stopOpacity={0.7} />
                <stop offset="100%" stopColor="#F8B500" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            />
            <Bar 
              dataKey="steps" 
              radius={[12, 12, 0, 0]}
              maxBarSize={40}
            >
              {last7DaysData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="url(#barGradient)"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-around pt-4 border-t border-white/10">
        <div className="text-center">
          <div className="text-white/60 text-sm mb-1">Total this week</div>
          <div className="text-white text-lg">{totalSteps.toLocaleString()} steps</div>
        </div>
        <div className="text-center">
          <div className="text-white/60 text-sm mb-1">Daily average</div>
          <div className="text-white text-lg">{averageSteps.toLocaleString()} steps</div>
        </div>
      </div>
    </motion.div>
  );
}
