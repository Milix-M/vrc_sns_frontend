import { format, formatDistanceToNowStrict } from 'date-fns'
import { ja } from 'date-fns/locale'

export const isValidDate = (date: unknown): date is Date => {
  return date instanceof Date && !isNaN(date.getTime());
};

export const dateSerializer = (
  date: unknown,
  formatType: 'standard' | 'dateonly' | 'distance'
) => {
  switch (formatType) {
    case 'standard':
      return format(date as Date, 'yyyy-MM-dd HH:mm:ss', { locale: ja })
    case 'dateonly':
      return format(date as Date, 'yyyy-MM-dd', { locale: ja })
    case 'distance':
      return formatDistanceToNowStrict(date as Date, { locale: ja })
  }
}
