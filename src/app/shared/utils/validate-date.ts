import { isValid, parse } from 'date-fns';

type DateFormat = 'dd/MM/yyyy' | 'yyyy-MM-dd' | "yyyy-MM-dd'T'HH:mm:ss";

interface FormatDateParams {
  dateFormat: DateFormat;
  date: string;
}

export function validateDate({ date, dateFormat }: FormatDateParams): boolean {
  const parsedDate = parse(date, dateFormat, new Date());

  return isValid(parsedDate);
}
