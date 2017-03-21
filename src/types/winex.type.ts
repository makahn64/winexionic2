export interface Address {
  country: string;
  city: string;
  street: string;
  state: string;
}
export interface AvgReviews {
  overall: number;
  wine: number;
  atomsphere: number;
  facility: number;
  staff: number;
}
export interface EContact {
  email: string;
  website: string;
}
export interface GeoLocation {
  longitude: string;
  latitude: string;
}
export interface MetaData {
  logo: string;
}
export interface OperatingHours {
  daily: {
    sunday: OpenStatus;
    saturday: OpenStatus;
  }
}
export interface OpenStatus {
  isOpen: boolean;
  open: string;
  close: string;
}
export interface Phone {
  main: string;
  tastingRoom: string;
}
export interface TastingFee {
  fee: number;
  waived: boolean;
  notes: string;
}
export interface WineTypes {
  broadTypes: Array<string>;
  varietals: Array<string>;
}
export interface regions {
  majorRegion: string;
  minorRegion: string;
}
export interface Winery {
  address?: Address;
  atmosphere?: string;
  avgReviews?: AvgReviews;
  createdAt?: string;
  description?: string;
  eContact?: EContact;
  facilityType?: string;
  features?: Array<string>;
  geoLocation?: GeoLocation;
  id?: string;
  imageIds?: Array<string>;
  logoid?: string;
  metaData?: MetaData;
  name?: string;
  needUpdate?: boolean;
  operatingHours?: OperatingHours;
  phone?: Phone;
  priceRange?: number;
  publicWifiSSID?: string;
  regions?: regions;
  reviews?: Array<string>;
  showInMobileAppMap?: boolean;
  tastingFee?: TastingFee;
  updatedAt?: string;
  WineTypes?: WineTypes;
  wines?: Array<string>;
}