export const textTruncate = (text: string, maxLength: number) =>
  text.length > maxLength ? text.slice(0, maxLength - 1) + "..." : text;

export const dateFormatter = (dateStr: string, long?: boolean) => {
  const date = new Date(dateStr);

  return new Intl.DateTimeFormat(
    "en-US",
    long
      ? {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }
      : undefined
  ).format(date);
};
