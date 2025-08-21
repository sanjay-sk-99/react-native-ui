// Get today + next 4 days
export const getNextFiveDays = (baseDate = new Date()) => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 5; i++) {
    const nextDay = new Date(baseDate);
    nextDay.setDate(baseDate.getDate() + i);

    const month = nextDay.toLocaleString("default", { month: "long" });
    const isToday = today.toDateString() === nextDay.toDateString(); // compare actual dates

    const label = isToday
      ? `Today, ${nextDay.getDate()}`
      : `${nextDay.getDate()}`;

    days.push({
      fullDate: nextDay, // Store actual Date object
      label,
      month
    });
  }
  return days;
};
