import { format, formatDistanceToNowStrict } from 'date-fns'
import { ja } from 'date-fns/locale'

const dateSerializer = (date: unknown, formatType: 'standard' | 'distance') => {
  switch (formatType) {
    case 'standard':
      return format(date as Date, 'yyyy-MM-dd HH:mm:ss', { locale: ja })
    case 'distance':
      return formatDistanceToNowStrict(date as Date, { locale: ja })
  }
}

export default dateSerializer
