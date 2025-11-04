import { motion } from "motion/react";
import { weatherData } from "../data/mock-data";

interface WeatherCardProps {
  city: string;
}

export function WeatherCard({ city }: WeatherCardProps) {
  // Mock current weather (in production, this would come from an API)
  const currentWeather = weatherData.sunny;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className={`relative overflow-hidden rounded-[24px] p-6 backdrop-blur-xl bg-gradient-to-br ${currentWeather.gradient} bg-opacity-20 border border-white/20 shadow-lg`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-5xl">{currentWeather.icon}</div>
          <div>
            <div className="text-3xl text-white mb-1">
              {currentWeather.temp}°C
            </div>
            <div className="text-white/60 text-sm">
              {currentWeather.condition}
            </div>
          </div>
        </div>
        <div className="text-white/70 text-sm">
          {city}
        </div>
      </div>
    </motion.div>
  );
}
