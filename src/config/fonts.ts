import { Nunito, Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const nunitoMono = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-mono",
});

export { nunitoMono, nunitoSans };
