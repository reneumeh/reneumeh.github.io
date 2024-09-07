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

interface Country {
  country: string;
  code: string;
}

export function getCountryCode(countryName: string): string {
  const countries: Country[] = [
    { country: 'ALGERIA', code: 'ALG' },
    { country: 'ARAB SATELLITE COMMUNICATIONS ORGANIZATION', code: 'AB' },
    { country: 'ARGENTINA', code: 'ARGN' },
    { country: 'ASIA SATELLITE TELECOMMUNICATIONS COMPANY (ASIASAT)', code: 'AC' },
    { country: 'AUSTRALIA', code: 'AUS' },
    { country: 'AZERBAIJAN', code: 'AZER' },
    { country: 'BANGLADESH', code: 'BGD' },
    { country: 'BELARUS', code: 'BELA' },
    { country: 'BOLIVIA', code: 'BOL' },
    { country: 'BRAZIL', code: 'BRAZ' },
    { country: 'BULGARIA', code: 'BGR' },
    { country: 'CANADA', code: 'CA' },
    { country: 'CHILE', code: 'CHLE' },
    { country: 'RUSSIA', code: 'CIS' },
    { country: 'RUSSIAN FEDERATION', code: 'CIS' },
    { country: 'CZECH REPUBLIC', code: 'CZCH' },
    { country: 'CZECHIA', code: 'CZ' },
    { country: 'DENMARK', code: 'DEN' },
    { country: 'ECUADOR', code: 'ECU' },
    { country: 'EGYPT', code: 'EGYP' },
    { country: 'ESTONIA', code: 'EST' },
    {
      country: 'EUROPEAN ORGANISATION FOR THE EXPLOITATION OF METEOROLOGICAL SATELLITES',
      code: 'EUME',
    },
    { country: 'EUROPEAN SPACE AGENCY', code: 'ESA' },
    { country: 'EUROPEAN TELECOMMUNICATIONS SATELLITE ORGANIZATION', code: 'EUTE' },
    { country: 'FRANCE', code: 'FR' },
    { country: 'GERMANY', code: 'GER' },
    { country: 'GLOBALSTAR', code: 'GLOB' },
    { country: 'GREECE', code: 'GREC' },
    { country: 'HUNGARY', code: 'HUN' },
    { country: 'INDIA', code: 'IND' },
    { country: 'INDONESIA', code: 'INDO' },
    { country: 'INTERNATIONAL MOBILE SATELLITE ORGANIZATION (INMARSAT)', code: 'IM' },
    { country: 'INTERNATIONAL SPACE STATION', code: 'ISS' },
    { country: 'INTERNATIONAL TELECOMMUNICATIONS SATELLITE ORGANIZATION', code: 'ITSO' },
    { country: 'IRAN', code: 'IRAN' },
    { country: 'IRAQ', code: 'IRAK' },
    { country: 'ISRAEL', code: 'ISRA' },
    { country: 'ITALY', code: 'IT' },
    { country: 'JAPAN', code: 'JPN' },
    { country: 'KAZAKHSTAN', code: 'KAZ' },
    { country: 'KENYA', code: 'KEN' },
    { country: 'KUWAIT', code: 'KWT' },
    { country: 'LAOS', code: 'LAOS' },
    { country: 'LITHUANIA', code: 'LTU' },
    { country: 'LUXEMBOURG', code: 'LUXE' },
    { country: 'MALAYSIA', code: 'MALA' },
    { country: 'MEXICO', code: 'MEX' },
    { country: 'MOROCCO', code: 'MA' },
    { country: 'NETHERLANDS', code: 'NETH' },
    { country: 'NEW ICO', code: 'NICO' },
    { country: 'NEW ZEALAND', code: 'NZ' },
    { country: 'NIGERIA', code: 'NIG' },
    { country: 'NORTH ATLANTIC TREATY ORGANIZATION', code: 'NATO' },
    { country: 'NORTH KOREA', code: 'NKOR' },
    { country: 'NORWAY', code: 'NOR' },
    { country: 'OB NETWORKS', code: 'OB' },
    { country: 'ORBCOMM', code: 'ORB' },
    { country: 'PAKISTAN', code: 'PAKI' },
    { country: 'CHINA', code: 'PRC' },
    { country: 'PERU', code: 'PER' },
    { country: 'PHILIPPINES', code: 'RP' },
    { country: 'POLAND', code: 'POL' },
    { country: 'PORTUGAL', code: 'POR' },
    { country: 'QATAR', code: 'QAT' },
    { country: 'REGIONAL AFRICAN SATELLITE COMMUNICATIONS ORGANIZATION', code: 'RASC' },
    { country: 'REPUBLIC OF RWANDA', code: 'RWA' },
    { country: 'REPUBLIC OF SLOVENIA', code: 'SVN' },
    { country: 'REPUBLIC OF TUNISIA', code: 'TUN' },
    { country: 'SAUDI ARABIA', code: 'SAUD' },
    { country: 'SEA LAUNCH', code: 'SEAL' },
    { country: 'SINGAPORE', code: 'SING' },
    { country: 'SOCIETE EUROPEENNE DES SATELLITES', code: 'SES' },
    { country: 'SOUTH AFRICA', code: 'SAFR' },
    { country: 'SOUTH KOREA', code: 'SKOR' },
    { country: 'KOREA', code: 'SKOR' },
    { country: 'SPAIN', code: 'SPN' },
    { country: 'SWEDEN', code: 'SWED' },
    { country: 'TAIWAN', code: 'ROC' },
    { country: 'THAILAND', code: 'THAI' },
    { country: 'TURKEY', code: 'TURK' },
    { country: 'TURKMENISTAN/MONACO', code: 'TMMC' },
    { country: 'UNITED ARAB EMIRATES', code: 'UAE' },
    { country: 'UNITED KINGDOM', code: 'UK' },
    { country: 'UNITED STATES', code: 'US' },
    { country: 'US', code: 'US' },
    { country: 'USA', code: 'US' },
    { country: 'URUGUAY', code: 'URY' },
    { country: 'VENEZUELA', code: 'VENZ' },
    { country: 'VIETNAM', code: 'VTNM' },
  ];

  let country = countries.find((c) => c.country === countryName.toUpperCase());
  return country ? country.code : '';
}

export function truncate(input: string | undefined, length :number): string {
    const updatedInput = input ? input : ""
  if (updatedInput.length > length) {
    return updatedInput.substring(0, length) + '...';
  }
  return updatedInput;
}

export const conjunctionToolList: string[] = [
  'get_satellite_conjunction_data',
  'get_recent_satellite_conjunction_data',
  'get_constellation_conjunction_data',
];

