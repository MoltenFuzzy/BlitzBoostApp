// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  slate50: "#F4F2F1",
  slate100: "#D7CEC9",
  slate200: "#B6ACA6",
  slate300: "#978F8A",
  slate400: "#564E4A",
  slate500: "#3C3836",
  slate600: "#191015",
  slate700: "#000000",
  slate800: "#000000",
  slate900: "#000000",

  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",

  stone50: "#F9FAFB",
  stone100: "#F3F4F6",
  stone200: "#E5E7EB",
  stone300: "#D1D5DB",
  stone400: "#9CA3AF",
  stone500: "#6B7280",
  stone600: "#4B5563",
  stone700: "#374151",
  stone800: "#1F2937",
  stone900: "#111827",

  red50: "#FEF2F2",
  red100: "#FEE2E2",
  red200: "#FECACA",
  red300: "#FCA5A5",
  red400: "#F87171",
  red500: "#EF4444",
  red600: "#DC2626",
  red700: "#B91C1C",
  red800: "#991B1B",
  red900: "#7F1D1D",

  yellow50: "#FFFBDD",
  yellow100: "#FEF3C7",
  yellow200: "#FDE68A",
  yellow300: "#FCD34D",
  yellow400: "#FBBF24",
  yellow500: "#F59E0B",
  yellow600: "#D97706",
  yellow700: "#B45309",
  yellow800: "#92400E",
  yellow900: "#78350F",

  green50: "#ECFDF5",
  green100: "#D1FAE5",
  green200: "#A7F3D0",
  green300: "#6EE7B7",
  green400: "#34D399",
  green500: "#10B981",
  green600: "#059669",
  green700: "#047857",
  green800: "#065F46",
  green900: "#064E3B",

  blue50: "#EFF6FF",
  blue100: "#DBEAFE",
  blue200: "#BFDBFE",
  blue300: "#93C5FD",
  blue400: "#60A5FA",
  blue500: "#3B82F6",
  blue600: "#2563EB",
  blue700: "#1D4ED8",
  blue800: "#1E40AF",
  blue900: "#1E3A8A",

  indigo50: "#EEF2FF",
  indigo100: "#E0E7FF",
  indigo200: "#C7D2FE",
  indigo300: "#A5B4FC",
  indigo400: "#818CF8",
  indigo500: "#6366F1",
  indigo600: "#4F46E5",
  indigo700: "#4338CA",
  indigo800: "#3730A3",
  indigo900: "#312E81",

  purple50: "#F5F3FF",
  purple100: "#EDE9FE",
  purple200: "#DDD6FE",
  purple300: "#C4B5FD",
  purple400: "#A78BFA",
  purple500: "#8B5CF6",
  purple600: "#7C3AED",
  purple700: "#6D28D9",
  purple800: "#5B21B6",
  purple900: "#4C1D95",

  pink50: "#FDF2F8",
  pink100: "#FCE7F3",
  pink200: "#FBCFE8",
  pink300: "#F9A8D4",
  pink400: "#F472B6",
  pink500: "#EC4899",
  pink600: "#DB2777",
  pink700: "#BE185D",
  pink800: "#9D174D",
  pink900: "#831843",

  zinc50: "#FAFAFA",
  zinc100: "#F5F5F5",
  zinc200: "#E5E5E5",
  zinc300: "#D4D4D4",
  zinc400: "#A3A3A3",
  zinc500: "#737373",
  zinc600: "#525252",
  zinc700: "#404040",
  zinc800: "#262626",
  zinc900: "#171717",

  teal50: "#F0FDFA",
  teal100: "#CCFBF1",
  teal200: "#99F6E4",
  teal300: "#5EEAD4",
  teal400: "#2DD4BF",
  teal500: "#14B8A6",
  teal600: "#0D9488",
  teal700: "#0F766E",
  teal800: "#115E59",
  teal900: "#134E4A",

  orange50: "#FFF7ED",
  orange100: "#FFEDD5",
  orange200: "#FED7AA",
  orange300: "#FDBA74",
  orange400: "#FB923C",
  orange500: "#F97316",
  orange600: "#EA580C",
  orange700: "#C2410C",
  orange800: "#9A3412",
  orange900: "#7C2D12",

  amber50: "#FFFBEB",
  amber100: "#FEF3C7",
  amber200: "#FDE68A",
  amber300: "#FCD34D",
  amber400: "#FBBF24",
  amber500: "#F59E0B",
  amber600: "#D97706",
  amber700: "#B45309",
  amber800: "#92400E",
  amber900: "#78350F",

  lime50: "#F7FEE7",
  lime100: "#ECFCCB",
  lime200: "#D9F99D",
  lime300: "#BEF264",
  lime400: "#A3E635",
  lime500: "#84CC16",
  lime600: "#65A30D",
  lime700: "#4D7C0F",
  lime800: "#3F6212",
  lime900: "#365314",

  emerald50: "#ECFDF5",
  emerald100: "#D1FAE5",
  emerald200: "#A7F3D0",
  emerald300: "#6EE7B7",
  emerald400: "#34D399",
  emerald500: "#10B981",
  emerald600: "#059669",
  emerald700: "#047857",
  emerald800: "#065F46",
  emerald900: "#064E3B",

  violet50: "#F5F3FF",
  violet100: "#EDE9FE",
  violet200: "#DDD6FE",
  violet300: "#C4B5FD",
  violet400: "#A78BFA",
  violet500: "#8B5CF6",
  violet600: "#7C3AED",
  violet700: "#6D28D9",
  violet800: "#5B21B6",
  violet900: "#4C1D95",

  fuchsia50: "#FDF2F8",
  fuchsia100: "#FCE7F3",
  fuchsia200: "#FBCFE8",
  fuchsia300: "#F9A8D4",
  fuchsia400: "#F472B6",
  fuchsia500: "#EC4899",
  fuchsia600: "#DB2777",
  fuchsia700: "#BE185D",
  fuchsia800: "#9D174D",
  fuchsia900: "#831843",

  rose50: "#FFF1F2",
  rose100: "#FFE4E6",
  rose200: "#FECDD3",
  rose300: "#FDA4AF",
  rose400: "#FB7185",
  rose500: "#F43F5E",
  rose600: "#E11D48",
  rose700: "#BE123C",
  rose800: "#9F1239",
  rose900: "#881337",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral100,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.stone900,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.teal800,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
