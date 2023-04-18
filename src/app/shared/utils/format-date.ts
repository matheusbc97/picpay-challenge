import { format, parse } from 'date-fns';

type DateFormat = 'dd/MM/yyyy' | 'yyyy-MM-dd' | "yyyy-MM-dd'T'HH:mm:ss";

interface FormatDateParams {
  originalDateFormat: DateFormat;
  toFormat: DateFormat;
  date: string;
}

export function formatDate({
  date,
  originalDateFormat,
  toFormat,
}: FormatDateParams): string {
  const parsedDate = parse(date, originalDateFormat, new Date());
  const result = format(parsedDate, toFormat);

  return result;
}
