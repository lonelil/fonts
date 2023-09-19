import { readdirSync } from "fs";
import path from "path";

export const jsdelivrPrefix = "gh/lonelil/fonts@latest/fonts";

export function getAllFonts() {
  return readdirSync(path.resolve(process.cwd(), "public/fonts"));
}

export const fontMap = [
  {
    id: "CathaySans",
    name: "Cathay Sans TC Regular",
  },
  {
    id: "GGSans",
    name: "gg sans",
  },
  {
    id: "GoogleSans",
    name: "Google Sans",
  },
  { id: "NeueHaasGrotesk", name: "neue-haas-grotesk-display" },
  {
    id: "SFPro",
    name: "SF Pro Display",
  },
  {
    id: "TSMidnights",
    name: "Neue Haas Grotesk Display Pro",
  },
  {
    id: "UniversalSans",
    name: "Universal Sans Regular",
  },
  {
    id: "TradeGothicNext",
    name: "trade-gothic-next",
  },
  {
    id: "FiraCode",
    name: "Fira Code",
  },
  {
    id: "NetflixSans",
    name: "Netflix Sans",
  },
];
