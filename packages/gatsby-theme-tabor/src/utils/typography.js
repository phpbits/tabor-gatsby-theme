import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ['Heebo', 'sans-serif'],
  bodyFontFamily: ['Lora', 'serif'],
  googleFonts: [
  {
    name: 'Heebo',
    styles: [
      '400',
      '500',
      '800',
    ],
  },
  {
    name: 'Lora',
    styles: [
      '400',
      '400i',
      '700',
    ],
  },
],
})

export default typography
