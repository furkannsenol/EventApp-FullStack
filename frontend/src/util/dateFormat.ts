export function formatDate(inputDate: string) {
    const options: Intl.DateTimeFormatOptions = {  month: 'long', day: 'numeric',weekday:'long', };
    return new Date(inputDate).toLocaleDateString('tr-TR', options);
  } //3 Kasım Cuma 
