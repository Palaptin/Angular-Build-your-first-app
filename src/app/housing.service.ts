import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  db_url = 'http://localhost:3000/locations';

  
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.db_url);
    return await data.json() ?? [];

  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.db_url}?id=${id}`);
  //return await data.json() ?? {}};
  this.housingLocation.id = 0,
  this.housingLocation.name=  'Test Home',
  this.housingLocation.city= 'Test city',
  this.housingLocation.state= 'ST',
  this.housingLocation.photo= `/example-house.jpg`;
  this.housingLocation.availableUnits= 99;
  this.housingLocation.wifi= true;
  this.housingLocation.laundry= false;


  return this.housingLocation ?? {};
  }

  constructor() { }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
