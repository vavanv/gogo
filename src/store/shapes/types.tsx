export interface Shape {
  shapeId: string;
  lon: number;
  lat: number;
  sec: number;
}

export type Shapes = Shape[];

export interface ShapesTrainsState {
  items: Shapes;
}
