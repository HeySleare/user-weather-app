export interface UserLocation {
  street: { name: string; number: number };
  city: string;
  country: string;
  coordinates: { latitude: string; longitude: string };
}
export interface User {
  name: { title:string; first: string; last: string };
  gender: string;
  email: string;
  picture: { large:string; medium:string; thumbnail:string };
  location: UserLocation;
}
export interface RandomUserResponse {
  results: User[];
}
export interface UserLocation {
  street: { name: string; number: number };
  city: string;
  country: string;
  coordinates: { latitude: string; longitude: string };
}
export interface User {
  name: { title:string; first: string; last: string };
  gender: string;
  email: string;
  picture: { large:string; medium:string; thumbnail:string };
  location: UserLocation;
}
export interface RandomUserResponse {
  results: User[];
}
