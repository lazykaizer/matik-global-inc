/**
 * Comprehensive World Country Codes Dataset with Flags and Dial Codes
 * Auto-generated with authentic Unicode flag emojis
 */

export interface CountryCodeItem {
  iso: string;
  country: string;
  code: string;
  flag: string;
  priority?: boolean;
}

export interface PhoneRule {
  maxDigits: number;
  placeholder: string;
}

export const COUNTRY_PHONE_RULES: Record<string, PhoneRule> = {
  '+91': { maxDigits: 10, placeholder: 'Phone number' },       // India: 10 digits
  '+1': { maxDigits: 10, placeholder: 'Phone number' },        // US & Canada: 10 digits
  '+44': { maxDigits: 10, placeholder: 'Phone number' },       // UK: 10 digits
  '+61': { maxDigits: 9, placeholder: 'Phone number' },        // Australia: 9 digits
  '+49': { maxDigits: 11, placeholder: 'Phone number' },       // Germany: 11 digits
  '+33': { maxDigits: 9, placeholder: 'Phone number' },        // France: 9 digits
  '+65': { maxDigits: 8, placeholder: 'Phone number' },        // Singapore: 8 digits
  '+81': { maxDigits: 10, placeholder: 'Phone number' },       // Japan: 10 digits
  '+971': { maxDigits: 9, placeholder: 'Phone number' },       // UAE: 9 digits
  '+41': { maxDigits: 9, placeholder: 'Phone number' },        // Switzerland: 9 digits
  '+31': { maxDigits: 9, placeholder: 'Phone number' },        // Netherlands: 9 digits
  '+966': { maxDigits: 9, placeholder: 'Phone number' },       // Saudi Arabia: 9 digits
  '+55': { maxDigits: 11, placeholder: 'Phone number' },       // Brazil: 11 digits
  '+86': { maxDigits: 11, placeholder: 'Phone number' },       // China: 11 digits
  '+7': { maxDigits: 10, placeholder: 'Phone number' },        // Russia / Kazakhstan: 10 digits
  '+39': { maxDigits: 10, placeholder: 'Phone number' },       // Italy: 10 digits
  '+34': { maxDigits: 9, placeholder: 'Phone number' },        // Spain: 9 digits
  '+64': { maxDigits: 9, placeholder: 'Phone number' },        // New Zealand: 9 digits
  '+27': { maxDigits: 9, placeholder: 'Phone number' },        // South Africa: 9 digits
  '+52': { maxDigits: 10, placeholder: 'Phone number' },       // Mexico: 10 digits
  '+82': { maxDigits: 10, placeholder: 'Phone number' },       // South Korea: 10 digits
  '+60': { maxDigits: 10, placeholder: 'Phone number' },       // Malaysia: 10 digits
  '+62': { maxDigits: 11, placeholder: 'Phone number' },       // Indonesia: 11 digits
  '+63': { maxDigits: 10, placeholder: 'Phone number' },       // Philippines: 10 digits
  '+84': { maxDigits: 10, placeholder: 'Phone number' },       // Vietnam: 10 digits
  '+92': { maxDigits: 10, placeholder: 'Phone number' },       // Pakistan: 10 digits
  '+880': { maxDigits: 10, placeholder: 'Phone number' },      // Bangladesh: 10 digits
  '+94': { maxDigits: 9, placeholder: 'Phone number' },        // Sri Lanka: 9 digits
  '+977': { maxDigits: 10, placeholder: 'Phone number' },      // Nepal: 10 digits
  '+46': { maxDigits: 9, placeholder: 'Phone number' },        // Sweden: 9 digits
  '+47': { maxDigits: 8, placeholder: 'Phone number' },        // Norway: 8 digits
  '+45': { maxDigits: 8, placeholder: 'Phone number' },        // Denmark: 8 digits
  '+358': { maxDigits: 10, placeholder: 'Phone number' },      // Finland: 10 digits
  '+353': { maxDigits: 9, placeholder: 'Phone number' },       // Ireland: 9 digits
  '+32': { maxDigits: 9, placeholder: 'Phone number' },        // Belgium: 9 digits
  '+43': { maxDigits: 11, placeholder: 'Phone number' },       // Austria: 11 digits
  '+48': { maxDigits: 9, placeholder: 'Phone number' },        // Poland: 9 digits
  '+30': { maxDigits: 10, placeholder: 'Phone number' },       // Greece: 10 digits
  '+351': { maxDigits: 9, placeholder: 'Phone number' },       // Portugal: 9 digits
  '+90': { maxDigits: 10, placeholder: 'Phone number' },       // Turkey: 10 digits
  '+972': { maxDigits: 9, placeholder: 'Phone number' },       // Israel: 9 digits
  '+20': { maxDigits: 10, placeholder: 'Phone number' },       // Egypt: 10 digits
  '+234': { maxDigits: 10, placeholder: 'Phone number' },      // Nigeria: 10 digits
  '+254': { maxDigits: 9, placeholder: 'Phone number' },       // Kenya: 9 digits
  '+974': { maxDigits: 8, placeholder: 'Phone number' },       // Qatar: 8 digits
  '+968': { maxDigits: 8, placeholder: 'Phone number' },       // Oman: 8 digits
  '+965': { maxDigits: 8, placeholder: 'Phone number' },       // Kuwait: 8 digits
  '+973': { maxDigits: 8, placeholder: 'Phone number' },       // Bahrain: 8 digits
  '+852': { maxDigits: 8, placeholder: 'Phone number' },       // Hong Kong: 8 digits
  '+886': { maxDigits: 9, placeholder: 'Phone number' },       // Taiwan: 9 digits
};

export function getCountryPhoneRule(code?: string): PhoneRule {
  if (!code) return { maxDigits: 10, placeholder: 'Phone number' };
  const clean = code.startsWith('+') ? code : `+${code}`;
  const rule = COUNTRY_PHONE_RULES[clean];
  return {
    maxDigits: rule ? rule.maxDigits : 10,
    placeholder: 'Phone number',
  };
}

export const WORLD_COUNTRIES: CountryCodeItem[] = [
  {
    "iso": "US",
    "country": "United States",
    "code": "+1",
    "flag": "🇺🇸",
    "priority": true
  },
  {
    "iso": "IN",
    "country": "India",
    "code": "+91",
    "flag": "🇮🇳",
    "priority": true
  },
  {
    "iso": "GB",
    "country": "United Kingdom",
    "code": "+44",
    "flag": "🇬🇧",
    "priority": true
  },
  {
    "iso": "CA",
    "country": "Canada",
    "code": "+1",
    "flag": "🇨🇦",
    "priority": true
  },
  {
    "iso": "AU",
    "country": "Australia",
    "code": "+61",
    "flag": "🇦🇺",
    "priority": true
  },
  {
    "iso": "DE",
    "country": "Germany",
    "code": "+49",
    "flag": "🇩🇪",
    "priority": true
  },
  {
    "iso": "FR",
    "country": "France",
    "code": "+33",
    "flag": "🇫🇷",
    "priority": true
  },
  {
    "iso": "AE",
    "country": "United Arab Emirates",
    "code": "+971",
    "flag": "🇦🇪",
    "priority": true
  },
  {
    "iso": "SG",
    "country": "Singapore",
    "code": "+65",
    "flag": "🇸🇬",
    "priority": true
  },
  {
    "iso": "SA",
    "country": "Saudi Arabia",
    "code": "+966",
    "flag": "🇸🇦",
    "priority": true
  },
  {
    "iso": "JP",
    "country": "Japan",
    "code": "+81",
    "flag": "🇯🇵",
    "priority": true
  },
  {
    "iso": "CH",
    "country": "Switzerland",
    "code": "+41",
    "flag": "🇨🇭",
    "priority": true
  },
  {
    "iso": "NL",
    "country": "Netherlands",
    "code": "+31",
    "flag": "🇳🇱",
    "priority": true
  },
  {
    "iso": "AF",
    "country": "Afghanistan",
    "code": "+93",
    "flag": "🇦🇫",
    "priority": false
  },
  {
    "iso": "AL",
    "country": "Albania",
    "code": "+355",
    "flag": "🇦🇱",
    "priority": false
  },
  {
    "iso": "DZ",
    "country": "Algeria",
    "code": "+213",
    "flag": "🇩🇿",
    "priority": false
  },
  {
    "iso": "AD",
    "country": "Andorra",
    "code": "+376",
    "flag": "🇦🇩",
    "priority": false
  },
  {
    "iso": "AO",
    "country": "Angola",
    "code": "+244",
    "flag": "🇦🇴",
    "priority": false
  },
  {
    "iso": "AG",
    "country": "Antigua and Barbuda",
    "code": "+1268",
    "flag": "🇦🇬",
    "priority": false
  },
  {
    "iso": "AR",
    "country": "Argentina",
    "code": "+54",
    "flag": "🇦🇷",
    "priority": false
  },
  {
    "iso": "AM",
    "country": "Armenia",
    "code": "+374",
    "flag": "🇦🇲",
    "priority": false
  },
  {
    "iso": "AT",
    "country": "Austria",
    "code": "+43",
    "flag": "🇦🇹",
    "priority": false
  },
  {
    "iso": "AZ",
    "country": "Azerbaijan",
    "code": "+994",
    "flag": "🇦🇿",
    "priority": false
  },
  {
    "iso": "BS",
    "country": "Bahamas",
    "code": "+1242",
    "flag": "🇧🇸",
    "priority": false
  },
  {
    "iso": "BH",
    "country": "Bahrain",
    "code": "+973",
    "flag": "🇧🇭",
    "priority": false
  },
  {
    "iso": "BD",
    "country": "Bangladesh",
    "code": "+880",
    "flag": "🇧🇩",
    "priority": false
  },
  {
    "iso": "BB",
    "country": "Barbados",
    "code": "+1246",
    "flag": "🇧🇧",
    "priority": false
  },
  {
    "iso": "BY",
    "country": "Belarus",
    "code": "+375",
    "flag": "🇧🇾",
    "priority": false
  },
  {
    "iso": "BE",
    "country": "Belgium",
    "code": "+32",
    "flag": "🇧🇪",
    "priority": false
  },
  {
    "iso": "BZ",
    "country": "Belize",
    "code": "+501",
    "flag": "🇧🇿",
    "priority": false
  },
  {
    "iso": "BJ",
    "country": "Benin",
    "code": "+229",
    "flag": "🇧🇯",
    "priority": false
  },
  {
    "iso": "BT",
    "country": "Bhutan",
    "code": "+975",
    "flag": "🇧🇹",
    "priority": false
  },
  {
    "iso": "BO",
    "country": "Bolivia",
    "code": "+591",
    "flag": "🇧🇴",
    "priority": false
  },
  {
    "iso": "BA",
    "country": "Bosnia and Herzegovina",
    "code": "+387",
    "flag": "🇧🇦",
    "priority": false
  },
  {
    "iso": "BW",
    "country": "Botswana",
    "code": "+267",
    "flag": "🇧🇼",
    "priority": false
  },
  {
    "iso": "BR",
    "country": "Brazil",
    "code": "+55",
    "flag": "🇧🇷",
    "priority": false
  },
  {
    "iso": "BN",
    "country": "Brunei",
    "code": "+673",
    "flag": "🇧🇳",
    "priority": false
  },
  {
    "iso": "BG",
    "country": "Bulgaria",
    "code": "+359",
    "flag": "🇧🇬",
    "priority": false
  },
  {
    "iso": "BF",
    "country": "Burkina Faso",
    "code": "+226",
    "flag": "🇧🇫",
    "priority": false
  },
  {
    "iso": "BI",
    "country": "Burundi",
    "code": "+257",
    "flag": "🇧🇮",
    "priority": false
  },
  {
    "iso": "KH",
    "country": "Cambodia",
    "code": "+855",
    "flag": "🇰🇭",
    "priority": false
  },
  {
    "iso": "CM",
    "country": "Cameroon",
    "code": "+237",
    "flag": "🇨🇲",
    "priority": false
  },
  {
    "iso": "CV",
    "country": "Cape Verde",
    "code": "+238",
    "flag": "🇨🇻",
    "priority": false
  },
  {
    "iso": "CF",
    "country": "Central African Republic",
    "code": "+236",
    "flag": "🇨🇫",
    "priority": false
  },
  {
    "iso": "TD",
    "country": "Chad",
    "code": "+235",
    "flag": "🇹🇩",
    "priority": false
  },
  {
    "iso": "CL",
    "country": "Chile",
    "code": "+56",
    "flag": "🇨🇱",
    "priority": false
  },
  {
    "iso": "CN",
    "country": "China",
    "code": "+86",
    "flag": "🇨🇳",
    "priority": false
  },
  {
    "iso": "CO",
    "country": "Colombia",
    "code": "+57",
    "flag": "🇨🇴",
    "priority": false
  },
  {
    "iso": "KM",
    "country": "Comoros",
    "code": "+269",
    "flag": "🇰🇲",
    "priority": false
  },
  {
    "iso": "CG",
    "country": "Congo",
    "code": "+242",
    "flag": "🇨🇬",
    "priority": false
  },
  {
    "iso": "CD",
    "country": "Congo (DRC)",
    "code": "+243",
    "flag": "🇨🇩",
    "priority": false
  },
  {
    "iso": "CR",
    "country": "Costa Rica",
    "code": "+506",
    "flag": "🇨🇷",
    "priority": false
  },
  {
    "iso": "HR",
    "country": "Croatia",
    "code": "+385",
    "flag": "🇭🇷",
    "priority": false
  },
  {
    "iso": "CU",
    "country": "Cuba",
    "code": "+53",
    "flag": "🇨🇺",
    "priority": false
  },
  {
    "iso": "CY",
    "country": "Cyprus",
    "code": "+357",
    "flag": "🇨🇾",
    "priority": false
  },
  {
    "iso": "CZ",
    "country": "Czech Republic",
    "code": "+420",
    "flag": "🇨🇿",
    "priority": false
  },
  {
    "iso": "DK",
    "country": "Denmark",
    "code": "+45",
    "flag": "🇩🇰",
    "priority": false
  },
  {
    "iso": "DJ",
    "country": "Djibouti",
    "code": "+253",
    "flag": "🇩🇯",
    "priority": false
  },
  {
    "iso": "DM",
    "country": "Dominica",
    "code": "+1767",
    "flag": "🇩🇲",
    "priority": false
  },
  {
    "iso": "DO",
    "country": "Dominican Republic",
    "code": "+1809",
    "flag": "🇩🇴",
    "priority": false
  },
  {
    "iso": "EC",
    "country": "Ecuador",
    "code": "+593",
    "flag": "🇪🇨",
    "priority": false
  },
  {
    "iso": "EG",
    "country": "Egypt",
    "code": "+20",
    "flag": "🇪🇬",
    "priority": false
  },
  {
    "iso": "SV",
    "country": "El Salvador",
    "code": "+503",
    "flag": "🇸🇻",
    "priority": false
  },
  {
    "iso": "GQ",
    "country": "Equatorial Guinea",
    "code": "+240",
    "flag": "🇬🇶",
    "priority": false
  },
  {
    "iso": "ER",
    "country": "Eritrea",
    "code": "+291",
    "flag": "🇪🇷",
    "priority": false
  },
  {
    "iso": "EE",
    "country": "Estonia",
    "code": "+372",
    "flag": "🇪🇪",
    "priority": false
  },
  {
    "iso": "SZ",
    "country": "Eswatini",
    "code": "+268",
    "flag": "🇸🇿",
    "priority": false
  },
  {
    "iso": "ET",
    "country": "Ethiopia",
    "code": "+251",
    "flag": "🇪🇹",
    "priority": false
  },
  {
    "iso": "FJ",
    "country": "Fiji",
    "code": "+679",
    "flag": "🇫🇯",
    "priority": false
  },
  {
    "iso": "FI",
    "country": "Finland",
    "code": "+358",
    "flag": "🇫🇮",
    "priority": false
  },
  {
    "iso": "GA",
    "country": "Gabon",
    "code": "+241",
    "flag": "🇬🇦",
    "priority": false
  },
  {
    "iso": "GM",
    "country": "Gambia",
    "code": "+220",
    "flag": "🇬🇲",
    "priority": false
  },
  {
    "iso": "GE",
    "country": "Georgia",
    "code": "+995",
    "flag": "🇬🇪",
    "priority": false
  },
  {
    "iso": "GH",
    "country": "Ghana",
    "code": "+233",
    "flag": "🇬🇭",
    "priority": false
  },
  {
    "iso": "GR",
    "country": "Greece",
    "code": "+30",
    "flag": "🇬🇷",
    "priority": false
  },
  {
    "iso": "GD",
    "country": "Grenada",
    "code": "+1473",
    "flag": "🇬🇩",
    "priority": false
  },
  {
    "iso": "GT",
    "country": "Guatemala",
    "code": "+502",
    "flag": "🇬🇹",
    "priority": false
  },
  {
    "iso": "GN",
    "country": "Guinea",
    "code": "+224",
    "flag": "🇬🇳",
    "priority": false
  },
  {
    "iso": "GW",
    "country": "Guinea-Bissau",
    "code": "+245",
    "flag": "🇬🇼",
    "priority": false
  },
  {
    "iso": "GY",
    "country": "Guyana",
    "code": "+592",
    "flag": "🇬🇾",
    "priority": false
  },
  {
    "iso": "HT",
    "country": "Haiti",
    "code": "+509",
    "flag": "🇭🇹",
    "priority": false
  },
  {
    "iso": "HN",
    "country": "Honduras",
    "code": "+504",
    "flag": "🇭🇳",
    "priority": false
  },
  {
    "iso": "HK",
    "country": "Hong Kong",
    "code": "+852",
    "flag": "🇭🇰",
    "priority": false
  },
  {
    "iso": "HU",
    "country": "Hungary",
    "code": "+36",
    "flag": "🇭🇺",
    "priority": false
  },
  {
    "iso": "IS",
    "country": "Iceland",
    "code": "+354",
    "flag": "🇮🇸",
    "priority": false
  },
  {
    "iso": "ID",
    "country": "Indonesia",
    "code": "+62",
    "flag": "🇮🇩",
    "priority": false
  },
  {
    "iso": "IR",
    "country": "Iran",
    "code": "+98",
    "flag": "🇮🇷",
    "priority": false
  },
  {
    "iso": "IQ",
    "country": "Iraq",
    "code": "+964",
    "flag": "🇮🇶",
    "priority": false
  },
  {
    "iso": "IE",
    "country": "Ireland",
    "code": "+353",
    "flag": "🇮🇪",
    "priority": false
  },
  {
    "iso": "IL",
    "country": "Israel",
    "code": "+972",
    "flag": "🇮🇱",
    "priority": false
  },
  {
    "iso": "IT",
    "country": "Italy",
    "code": "+39",
    "flag": "🇮🇹",
    "priority": false
  },
  {
    "iso": "CI",
    "country": "Ivory Coast",
    "code": "+225",
    "flag": "🇨🇮",
    "priority": false
  },
  {
    "iso": "JM",
    "country": "Jamaica",
    "code": "+1876",
    "flag": "🇯🇲",
    "priority": false
  },
  {
    "iso": "JO",
    "country": "Jordan",
    "code": "+962",
    "flag": "🇯🇴",
    "priority": false
  },
  {
    "iso": "KZ",
    "country": "Kazakhstan",
    "code": "+7",
    "flag": "🇰🇿",
    "priority": false
  },
  {
    "iso": "KE",
    "country": "Kenya",
    "code": "+254",
    "flag": "🇰🇪",
    "priority": false
  },
  {
    "iso": "KI",
    "country": "Kiribati",
    "code": "+686",
    "flag": "🇰🇮",
    "priority": false
  },
  {
    "iso": "KW",
    "country": "Kuwait",
    "code": "+965",
    "flag": "🇰🇼",
    "priority": false
  },
  {
    "iso": "KG",
    "country": "Kyrgyzstan",
    "code": "+996",
    "flag": "🇰🇬",
    "priority": false
  },
  {
    "iso": "LA",
    "country": "Laos",
    "code": "+856",
    "flag": "🇱🇦",
    "priority": false
  },
  {
    "iso": "LV",
    "country": "Latvia",
    "code": "+371",
    "flag": "🇱🇻",
    "priority": false
  },
  {
    "iso": "LB",
    "country": "Lebanon",
    "code": "+961",
    "flag": "🇱🇧",
    "priority": false
  },
  {
    "iso": "LS",
    "country": "Lesotho",
    "code": "+266",
    "flag": "🇱🇸",
    "priority": false
  },
  {
    "iso": "LR",
    "country": "Liberia",
    "code": "+231",
    "flag": "🇱🇷",
    "priority": false
  },
  {
    "iso": "LY",
    "country": "Libya",
    "code": "+218",
    "flag": "🇱🇾",
    "priority": false
  },
  {
    "iso": "LI",
    "country": "Liechtenstein",
    "code": "+423",
    "flag": "🇱🇮",
    "priority": false
  },
  {
    "iso": "LT",
    "country": "Lithuania",
    "code": "+370",
    "flag": "🇱🇹",
    "priority": false
  },
  {
    "iso": "LU",
    "country": "Luxembourg",
    "code": "+352",
    "flag": "🇱🇺",
    "priority": false
  },
  {
    "iso": "MO",
    "country": "Macau",
    "code": "+853",
    "flag": "🇲🇴",
    "priority": false
  },
  {
    "iso": "MG",
    "country": "Madagascar",
    "code": "+261",
    "flag": "🇲🇬",
    "priority": false
  },
  {
    "iso": "MW",
    "country": "Malawi",
    "code": "+265",
    "flag": "🇲🇼",
    "priority": false
  },
  {
    "iso": "MY",
    "country": "Malaysia",
    "code": "+60",
    "flag": "🇲🇾",
    "priority": false
  },
  {
    "iso": "MV",
    "country": "Maldives",
    "code": "+960",
    "flag": "🇲🇻",
    "priority": false
  },
  {
    "iso": "ML",
    "country": "Mali",
    "code": "+223",
    "flag": "🇲🇱",
    "priority": false
  },
  {
    "iso": "MT",
    "country": "Malta",
    "code": "+356",
    "flag": "🇲🇹",
    "priority": false
  },
  {
    "iso": "MR",
    "country": "Mauritania",
    "code": "+222",
    "flag": "🇲🇷",
    "priority": false
  },
  {
    "iso": "MU",
    "country": "Mauritius",
    "code": "+230",
    "flag": "🇲🇺",
    "priority": false
  },
  {
    "iso": "MX",
    "country": "Mexico",
    "code": "+52",
    "flag": "🇲🇽",
    "priority": false
  },
  {
    "iso": "MD",
    "country": "Moldova",
    "code": "+373",
    "flag": "🇲🇩",
    "priority": false
  },
  {
    "iso": "MC",
    "country": "Monaco",
    "code": "+377",
    "flag": "🇲🇨",
    "priority": false
  },
  {
    "iso": "MN",
    "country": "Mongolia",
    "code": "+976",
    "flag": "🇲🇳",
    "priority": false
  },
  {
    "iso": "ME",
    "country": "Montenegro",
    "code": "+382",
    "flag": "🇲🇪",
    "priority": false
  },
  {
    "iso": "MA",
    "country": "Morocco",
    "code": "+212",
    "flag": "🇲🇦",
    "priority": false
  },
  {
    "iso": "MZ",
    "country": "Mozambique",
    "code": "+258",
    "flag": "🇲🇿",
    "priority": false
  },
  {
    "iso": "MM",
    "country": "Myanmar",
    "code": "+95",
    "flag": "🇲🇲",
    "priority": false
  },
  {
    "iso": "NA",
    "country": "Namibia",
    "code": "+264",
    "flag": "🇳🇦",
    "priority": false
  },
  {
    "iso": "NP",
    "country": "Nepal",
    "code": "+977",
    "flag": "🇳🇵",
    "priority": false
  },
  {
    "iso": "NZ",
    "country": "New Zealand",
    "code": "+64",
    "flag": "🇳🇿",
    "priority": false
  },
  {
    "iso": "NI",
    "country": "Nicaragua",
    "code": "+505",
    "flag": "🇳🇮",
    "priority": false
  },
  {
    "iso": "NE",
    "country": "Niger",
    "code": "+227",
    "flag": "🇳🇪",
    "priority": false
  },
  {
    "iso": "NG",
    "country": "Nigeria",
    "code": "+234",
    "flag": "🇳🇬",
    "priority": false
  },
  {
    "iso": "MK",
    "country": "North Macedonia",
    "code": "+389",
    "flag": "🇲🇰",
    "priority": false
  },
  {
    "iso": "NO",
    "country": "Norway",
    "code": "+47",
    "flag": "🇳🇴",
    "priority": false
  },
  {
    "iso": "OM",
    "country": "Oman",
    "code": "+968",
    "flag": "🇴🇲",
    "priority": false
  },
  {
    "iso": "PK",
    "country": "Pakistan",
    "code": "+92",
    "flag": "🇵🇰",
    "priority": false
  },
  {
    "iso": "PA",
    "country": "Panama",
    "code": "+507",
    "flag": "🇵🇦",
    "priority": false
  },
  {
    "iso": "PG",
    "country": "Papua New Guinea",
    "code": "+675",
    "flag": "🇵🇬",
    "priority": false
  },
  {
    "iso": "PY",
    "country": "Paraguay",
    "code": "+595",
    "flag": "🇵🇾",
    "priority": false
  },
  {
    "iso": "PE",
    "country": "Peru",
    "code": "+51",
    "flag": "🇵🇪",
    "priority": false
  },
  {
    "iso": "PH",
    "country": "Philippines",
    "code": "+63",
    "flag": "🇵🇭",
    "priority": false
  },
  {
    "iso": "PL",
    "country": "Poland",
    "code": "+48",
    "flag": "🇵🇱",
    "priority": false
  },
  {
    "iso": "PT",
    "country": "Portugal",
    "code": "+351",
    "flag": "🇵🇹",
    "priority": false
  },
  {
    "iso": "QA",
    "country": "Qatar",
    "code": "+974",
    "flag": "🇶🇦",
    "priority": false
  },
  {
    "iso": "RO",
    "country": "Romania",
    "code": "+40",
    "flag": "🇷🇴",
    "priority": false
  },
  {
    "iso": "RU",
    "country": "Russia",
    "code": "+7",
    "flag": "🇷🇺",
    "priority": false
  },
  {
    "iso": "RW",
    "country": "Rwanda",
    "code": "+250",
    "flag": "🇷🇼",
    "priority": false
  },
  {
    "iso": "KN",
    "country": "Saint Kitts and Nevis",
    "code": "+1869",
    "flag": "🇰🇳",
    "priority": false
  },
  {
    "iso": "LC",
    "country": "Saint Lucia",
    "code": "+1758",
    "flag": "🇱🇨",
    "priority": false
  },
  {
    "iso": "VC",
    "country": "Saint Vincent",
    "code": "+1784",
    "flag": "🇻🇨",
    "priority": false
  },
  {
    "iso": "WS",
    "country": "Samoa",
    "code": "+685",
    "flag": "🇼🇸",
    "priority": false
  },
  {
    "iso": "SM",
    "country": "San Marino",
    "code": "+378",
    "flag": "🇸🇲",
    "priority": false
  },
  {
    "iso": "ST",
    "country": "Sao Tome and Principe",
    "code": "+239",
    "flag": "🇸🇹",
    "priority": false
  },
  {
    "iso": "SN",
    "country": "Senegal",
    "code": "+221",
    "flag": "🇸🇳",
    "priority": false
  },
  {
    "iso": "RS",
    "country": "Serbia",
    "code": "+381",
    "flag": "🇷🇸",
    "priority": false
  },
  {
    "iso": "SC",
    "country": "Seychelles",
    "code": "+248",
    "flag": "🇸🇨",
    "priority": false
  },
  {
    "iso": "SL",
    "country": "Sierra Leone",
    "code": "+232",
    "flag": "🇸🇱",
    "priority": false
  },
  {
    "iso": "SK",
    "country": "Slovakia",
    "code": "+421",
    "flag": "🇸🇰",
    "priority": false
  },
  {
    "iso": "SI",
    "country": "Slovenia",
    "code": "+386",
    "flag": "🇸🇮",
    "priority": false
  },
  {
    "iso": "SB",
    "country": "Solomon Islands",
    "code": "+677",
    "flag": "🇸🇧",
    "priority": false
  },
  {
    "iso": "SO",
    "country": "Somalia",
    "code": "+252",
    "flag": "🇸🇴",
    "priority": false
  },
  {
    "iso": "ZA",
    "country": "South Africa",
    "code": "+27",
    "flag": "🇿🇦",
    "priority": false
  },
  {
    "iso": "ES",
    "country": "Spain",
    "code": "+34",
    "flag": "🇪🇸",
    "priority": false
  },
  {
    "iso": "LK",
    "country": "Sri Lanka",
    "code": "+94",
    "flag": "🇱🇰",
    "priority": false
  },
  {
    "iso": "SD",
    "country": "Sudan",
    "code": "+249",
    "flag": "🇸🇩",
    "priority": false
  },
  {
    "iso": "SR",
    "country": "Suriname",
    "code": "+597",
    "flag": "🇸🇷",
    "priority": false
  },
  {
    "iso": "SE",
    "country": "Sweden",
    "code": "+46",
    "flag": "🇸🇪",
    "priority": false
  },
  {
    "iso": "SY",
    "country": "Syria",
    "code": "+963",
    "flag": "🇸🇾",
    "priority": false
  },
  {
    "iso": "TW",
    "country": "Taiwan",
    "code": "+886",
    "flag": "🇹🇼",
    "priority": false
  },
  {
    "iso": "TJ",
    "country": "Tajikistan",
    "code": "+992",
    "flag": "🇹🇯",
    "priority": false
  },
  {
    "iso": "TZ",
    "country": "Tanzania",
    "code": "+255",
    "flag": "🇹🇿",
    "priority": false
  },
  {
    "iso": "TH",
    "country": "Thailand",
    "code": "+66",
    "flag": "🇹🇭",
    "priority": false
  },
  {
    "iso": "TG",
    "country": "Togo",
    "code": "+228",
    "flag": "🇹🇬",
    "priority": false
  },
  {
    "iso": "TO",
    "country": "Tonga",
    "code": "+676",
    "flag": "🇹🇴",
    "priority": false
  },
  {
    "iso": "TT",
    "country": "Trinidad and Tobago",
    "code": "+1868",
    "flag": "🇹🇹",
    "priority": false
  },
  {
    "iso": "TN",
    "country": "Tunisia",
    "code": "+216",
    "flag": "🇹🇳",
    "priority": false
  },
  {
    "iso": "TR",
    "country": "Turkey",
    "code": "+90",
    "flag": "🇹🇷",
    "priority": false
  },
  {
    "iso": "TM",
    "country": "Turkmenistan",
    "code": "+993",
    "flag": "🇹🇲",
    "priority": false
  },
  {
    "iso": "UG",
    "country": "Uganda",
    "code": "+256",
    "flag": "🇺🇬",
    "priority": false
  },
  {
    "iso": "UA",
    "country": "Ukraine",
    "code": "+380",
    "flag": "🇺🇦",
    "priority": false
  },
  {
    "iso": "UY",
    "country": "Uruguay",
    "code": "+598",
    "flag": "🇺🇾",
    "priority": false
  },
  {
    "iso": "UZ",
    "country": "Uzbekistan",
    "code": "+998",
    "flag": "🇺🇿",
    "priority": false
  },
  {
    "iso": "VU",
    "country": "Vanuatu",
    "code": "+678",
    "flag": "🇻🇺",
    "priority": false
  },
  {
    "iso": "VE",
    "country": "Venezuela",
    "code": "+58",
    "flag": "🇻🇪",
    "priority": false
  },
  {
    "iso": "VN",
    "country": "Vietnam",
    "code": "+84",
    "flag": "🇻🇳",
    "priority": false
  },
  {
    "iso": "YE",
    "country": "Yemen",
    "code": "+967",
    "flag": "🇾🇪",
    "priority": false
  },
  {
    "iso": "ZM",
    "country": "Zambia",
    "code": "+260",
    "flag": "🇿🇲",
    "priority": false
  },
  {
    "iso": "ZW",
    "country": "Zimbabwe",
    "code": "+263",
    "flag": "🇿🇼",
    "priority": false
  }
];
