// Get the number of days in a month
export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// Get the first day of the month (0 = Sunday, 1 = Monday, ...)
export const getStartDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// Generate the calendar days (including previous and next month's filler days)
export const generateCalendarDays = (year, month) => {
  const days = [];
  const totalDays = getDaysInMonth(year, month);
  const startDay = getStartDayOfMonth(year, month);

  // Previous month's filler days
  const prevMonthDays = getDaysInMonth(year, month - 1);
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
    });
  }

  // Current month's days
  for (let i = 1; i <= totalDays; i++) {
    days.push({
      day: i,
      isCurrentMonth: true,
    });
  }

  // Next month's filler days
  const nextMonthStart = days.length % 7 ? 7 - (days.length % 7) : 0;
  for (let i = 1; i <= nextMonthStart; i++) {
    days.push({
      day: i,
      isCurrentMonth: false,
    });
  }

  return days;
};
