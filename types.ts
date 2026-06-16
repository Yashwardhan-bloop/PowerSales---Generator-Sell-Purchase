export interface GeneratorProduct {
  id: string;
  kva: number;
  type: 'Industrial' | 'Commercial' | 'Residential Backup';
  image: string;
  basePrice: number; // Estimated base price for the slider calculation
}

export interface EnquiryData {
  generatorId: string;
  generatorKva: number;
  offerPrice: number;
  customerName: string;
  customerPhone: string;
}

export const CONTACT_INFO = {
  owner: "Mr. Sachin",
  phone: "+919910028455", // Format for links
  displayPhone: "+91 9910028455",
  addressPrimary: "Plot No. 24, Madhuban Bapudham Industrial Area, Meerut Road, Ghaziabad",
};