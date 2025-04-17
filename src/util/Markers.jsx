import { icon } from "leaflet";
import Person from "./../Assets/person.png";
import Hospitalicon from "./../Assets/hospital.png";
import Start from "./../Assets/placeholder.png";


export const DonorIcon = new icon({
  iconUrl: Person,
  iconSize: [30, 30],
  iconAnchor: [16, 32],
});

export const HospitalIcon = new icon({
  iconUrl: Hospitalicon,
  iconSize: [30, 30],
  iconAnchor: [16, 32],
});

export const StarterIcon = new icon({
    iconUrl: Start,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
}); 
