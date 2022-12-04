export interface Stop {
  zoneCode: string;
  streetNumber: string;
  intersection: string;
  code: string;
  city: string;
  streetName: string;
  stopName: string;
  longitude: number;
  latitude: number;
  drivingDirections: string;
  facilities: Facilities;
  parkings: Parkings;
}

export interface Facility {
  description: string;
}

export interface Parking {
  name: string;
  parkSpots: number;
}

export type Stops = Stop[];
export type Facilities = Facility[];
export type Parkings = Parking[];

export interface StopsState {
  items: Stops;
  selectedItems: Stops;
}
