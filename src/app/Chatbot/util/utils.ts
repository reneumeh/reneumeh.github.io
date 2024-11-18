export function getUniqueId(): string {
  return Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
}

export const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

export const trimArray = (arr: any[], maxLength = 20): any[] => {
  let newArr = arr;

  if (arr.length > maxLength) {
    let cutoff = Math.ceil(arr.length - maxLength);
    cutoff = isEven(cutoff) ? cutoff : cutoff + 1;

    newArr = arr.slice(cutoff);
  }

  return newArr;
};

export const wait = (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export function timeRemaining(utcTimeStr: string): string {
  // Parse the input UTC time string to a Date object
  const utcTime = new Date(utcTimeStr + 'Z'); // Adding 'Z' to indicate UTC time

  // Get the current time in UTC
  const currentUtcTime = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = utcTime.getTime() - currentUtcTime.getTime();

  // Convert the time difference to a more readable format (days, hours, minutes, seconds)
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return `${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs`;
}

export function truncate(input: string | undefined, length :number): string {
    const updatedInput = input ? input : ""
  if (updatedInput.length > length) {
    return updatedInput.substring(0, length) + '...';
  }
  return updatedInput;
}


