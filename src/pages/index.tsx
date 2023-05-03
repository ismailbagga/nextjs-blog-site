import { Inter, Stint_Ultra_Condensed } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const stintUltra = Stint_Ultra_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-stint-ultra",
});
export default function Home() {
  return <main></main>;
}
