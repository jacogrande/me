import BarcodeDevLog from "./BarcodeDevLog";

export interface IEntry {
  title: string,
  photoPath: string,
  photoAlt: string,
  description: string,
  content: any
  id: string
}

export const devLogEntries: IEntry[] = [
  {
    title: "Making movie \"barcodes\"",
    description: "Writing a python script that finds the color palettes of inputted movies",
    photoPath: "/covers/barcode.jpg",
    photoAlt: "the dominant color of each frame of a movie compressed into one image",
    content: BarcodeDevLog(),
    id: "d1"
  }
]