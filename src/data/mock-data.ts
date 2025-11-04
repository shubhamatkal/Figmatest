// Mock data for the StepZen app

// Avatar options for onboarding
export const avatarOptions = [
  { id: 1, seed: "Felix", label: "Avatar 1" },
  { id: 2, seed: "Aneka", label: "Avatar 2" },
  { id: 3, seed: "Oliver", label: "Avatar 3" },
  { id: 4, seed: "Luna", label: "Avatar 4" },
  { id: 5, seed: "Max", label: "Avatar 5" },
  { id: 6, seed: "Sophie", label: "Avatar 6" },
  { id: 7, seed: "Charlie", label: "Avatar 7" },
  { id: 8, seed: "Mia", label: "Avatar 8" },
  { id: 9, seed: "Leo", label: "Avatar 9" },
  { id: 10, seed: "Emma", label: "Avatar 10" },
];

export const motivationalQuotes = [
  "Push yourself — because no one else is going to do it for you.",
  "The only bad workout is the one that didn't happen.",
  "Your body can stand almost anything. It's your mind you have to convince.",
  "Take care of your body. It's the only place you have to live.",
  "The groundwork for all happiness is good health.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "A journey of a thousand miles begins with a single step.",
  "Don't stop when you're tired. Stop when you're done.",
  "Strive for progress, not perfection.",
  "The difference between try and triumph is a little umph."
];

export const weatherData = {
  sunny: {
    icon: "☀️",
    temp: 29,
    condition: "Sunny",
    gradient: "from-amber-300 to-orange-400"
  },
  cloudy: {
    icon: "☁️",
    temp: 24,
    condition: "Cloudy",
    gradient: "from-slate-300 to-slate-400"
  },
  rainy: {
    icon: "🌧️",
    temp: 21,
    condition: "Rainy",
    gradient: "from-blue-300 to-blue-500"
  },
  partlyCloudy: {
    icon: "⛅",
    temp: 26,
    condition: "Partly Cloudy",
    gradient: "from-sky-300 to-sky-400"
  }
};

export const mockUserData = {
  name: "Shubham",
  steps: 12500, // Change to 12000+ to see overflow ring effect (set back to 6243 for normal view)
  goal: 10000,
  distance: 4.9, // km
  calories: 213,
  city: "Aurangabad",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shubham"
};

// Last 7 days step data
export const last7DaysData = [
  { day: "Mon", steps: 8234, date: "Oct 28" },
  { day: "Tue", steps: 9521, date: "Oct 29" },
  { day: "Wed", steps: 7845, date: "Oct 30" },
  { day: "Thu", steps: 10234, date: "Oct 31" },
  { day: "Fri", steps: 6789, date: "Nov 1" },
  { day: "Sat", steps: 8923, date: "Nov 2" },
  { day: "Sun", steps: 6243, date: "Nov 3" }
];

// 60-day step count history
export const stepHistory = [
  { date: "Nov 3, 2024", steps: 6243, goal: 10000 },
  { date: "Nov 2, 2024", steps: 8923, goal: 10000 },
  { date: "Nov 1, 2024", steps: 6789, goal: 10000 },
  { date: "Oct 31, 2024", steps: 10234, goal: 10000 },
  { date: "Oct 30, 2024", steps: 7845, goal: 10000 },
  { date: "Oct 29, 2024", steps: 9521, goal: 10000 },
  { date: "Oct 28, 2024", steps: 8234, goal: 10000 },
  { date: "Oct 27, 2024", steps: 7654, goal: 10000 },
  { date: "Oct 26, 2024", steps: 9876, goal: 10000 },
  { date: "Oct 25, 2024", steps: 11234, goal: 10000 },
  { date: "Oct 24, 2024", steps: 8456, goal: 10000 },
  { date: "Oct 23, 2024", steps: 7234, goal: 10000 },
  { date: "Oct 22, 2024", steps: 9123, goal: 10000 },
  { date: "Oct 21, 2024", steps: 8765, goal: 10000 },
  { date: "Oct 20, 2024", steps: 10543, goal: 10000 },
  { date: "Oct 19, 2024", steps: 9234, goal: 10000 },
  { date: "Oct 18, 2024", steps: 8876, goal: 10000 },
  { date: "Oct 17, 2024", steps: 7543, goal: 10000 },
  { date: "Oct 16, 2024", steps: 9987, goal: 10000 },
  { date: "Oct 15, 2024", steps: 11456, goal: 10000 },
  { date: "Oct 14, 2024", steps: 8234, goal: 10000 },
  { date: "Oct 13, 2024", steps: 7876, goal: 10000 },
  { date: "Oct 12, 2024", steps: 9543, goal: 10000 },
  { date: "Oct 11, 2024", steps: 8123, goal: 10000 },
  { date: "Oct 10, 2024", steps: 10876, goal: 10000 },
  { date: "Oct 9, 2024", steps: 9234, goal: 10000 },
  { date: "Oct 8, 2024", steps: 8654, goal: 10000 },
  { date: "Oct 7, 2024", steps: 7234, goal: 10000 },
  { date: "Oct 6, 2024", steps: 9876, goal: 10000 },
  { date: "Oct 5, 2024", steps: 11234, goal: 10000 },
  { date: "Oct 4, 2024", steps: 8567, goal: 10000 },
  { date: "Oct 3, 2024", steps: 7890, goal: 10000 },
  { date: "Oct 2, 2024", steps: 9345, goal: 10000 },
  { date: "Oct 1, 2024", steps: 8234, goal: 10000 },
  { date: "Sep 30, 2024", steps: 10123, goal: 10000 },
  { date: "Sep 29, 2024", steps: 9456, goal: 10000 },
  { date: "Sep 28, 2024", steps: 8234, goal: 10000 },
  { date: "Sep 27, 2024", steps: 7654, goal: 10000 },
  { date: "Sep 26, 2024", steps: 9234, goal: 10000 },
  { date: "Sep 25, 2024", steps: 11876, goal: 10000 },
  { date: "Sep 24, 2024", steps: 8543, goal: 10000 },
  { date: "Sep 23, 2024", steps: 7234, goal: 10000 },
  { date: "Sep 22, 2024", steps: 9876, goal: 10000 },
  { date: "Sep 21, 2024", steps: 8234, goal: 10000 },
  { date: "Sep 20, 2024", steps: 10543, goal: 10000 },
  { date: "Sep 19, 2024", steps: 9123, goal: 10000 },
  { date: "Sep 18, 2024", steps: 8765, goal: 10000 },
  { date: "Sep 17, 2024", steps: 7345, goal: 10000 },
  { date: "Sep 16, 2024", steps: 9654, goal: 10000 },
  { date: "Sep 15, 2024", steps: 11234, goal: 10000 },
  { date: "Sep 14, 2024", steps: 8456, goal: 10000 },
  { date: "Sep 13, 2024", steps: 7876, goal: 10000 },
  { date: "Sep 12, 2024", steps: 9234, goal: 10000 },
  { date: "Sep 11, 2024", steps: 8543, goal: 10000 },
  { date: "Sep 10, 2024", steps: 10234, goal: 10000 },
  { date: "Sep 9, 2024", steps: 9123, goal: 10000 },
  { date: "Sep 8, 2024", steps: 8765, goal: 10000 },
  { date: "Sep 7, 2024", steps: 7234, goal: 10000 },
  { date: "Sep 6, 2024", steps: 9876, goal: 10000 },
  { date: "Sep 5, 2024", steps: 11543, goal: 10000 }
];
