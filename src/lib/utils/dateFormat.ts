import { format } from "date-fns";
import { fr } from "date-fns/locale";

const dateFormat = (
  date: Date | string,
  pattern: string = "dd MMMM yyyy",
): string => {
  const dateObj = new Date(date);
  const output = format(dateObj, pattern, { locale: fr });
  return output;
};

export default dateFormat;
