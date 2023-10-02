import accomodations from "../data/logements.json";

export class AccomodationsAPI {
  static async getAccomodations() {
    try {
      const response = await fetch(`${accomodations}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error, "Les données ne sont pas reçues");
    }
  }
}
