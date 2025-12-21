import dayjs from 'dayjs';

export const formatDateTime = (date: string): string => {
  return dayjs(date).format('DD MMMM YYYY, HH:mm');
};