export const getTypeColor = (type: string) => {
  switch (type) {
    case "FULL_TIME":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
    case "PART_TIME":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
    case "CONTRACT":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300";
    case "INTERNSHIP":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
  }
};
