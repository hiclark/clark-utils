export const formatHours = (hours: number): string =>
  hours > 1 ? `${hours} hours` : `${hours} hour`;

export const formatMinutes = (minutes: number): string =>
  minutes > 1 ? `${minutes} minutes` : `${minutes} minute`;

export const formatTime = (hours: number): string => {
  const minutes = hours * 60;
  const isHourInteger = Number.isInteger(hours);

  const integerInHours = Math.floor(hours);
  const decimalInMinutes = Math.round((hours % 1) * 60);

  if (isHourInteger) {
    return formatHours(hours);
  } else if (minutes > 60) {
    return `${formatHours(integerInHours)} and ${formatMinutes(
      decimalInMinutes,
    )}`;
  }

  return formatMinutes(minutes);
};
