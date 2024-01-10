import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  db_url = 'http://localhost:3000/locations';
  
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.db_url);
    return await data.json() ?? [];

  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation[] > { //IT'S A TRAP
    const data = await fetch(`${this.db_url}?id=${id}`)
  return await data.json() ?? {};
  }

  constructor() { }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
