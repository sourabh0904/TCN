// utils/chartUtils.js
export const generateCategoryColors = (categories, mode = "light") => {
  const baseColors = {
    light: ["#4f46e5", "#10b981", "#ef4444", "#f59e0b", "#8b5cf6"],
    dark: ["#818cf8", "#34d399", "#f87171", "#fbbf24", "#a78bfa"],
  };

  return categories.reduce((acc, category, index) => {
    acc[category.id] = baseColors[mode][index % baseColors[mode].length];
    return acc;
  }, {});
};
