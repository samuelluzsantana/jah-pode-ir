export const timeUtils = {
  isFriday: (): boolean => {
    const now = new Date();
    return now.getDay() === 5;
  },

  parseTime: (timeString: string): number => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  },

  formatTime: (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
  },

  addMinutes: (timeString: string, minutesToAdd: number): string => {
    const totalMinutes = timeUtils.parseTime(timeString) + minutesToAdd;
    return timeUtils.formatTime(totalMinutes);
  },

  getCurrentTime: (): string => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  },

  isTimeReached: (targetTime: string): boolean => {
    const current = timeUtils.parseTime(timeUtils.getCurrentTime());
    const target = timeUtils.parseTime(targetTime);
    return current >= target;
  },

  getTimeDifference: (targetTime: string): number => {
    const current = timeUtils.parseTime(timeUtils.getCurrentTime());
    const target = timeUtils.parseTime(targetTime);
    return target - current;
  },
};
