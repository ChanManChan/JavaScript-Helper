class Weather{
  constructor(city){
    this.apiKey='b7bf88e0e053bd918d9dbe2517806909';
    this.city=city;
  }
  //Fetch weather from API
  async getWeather(){
    const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);
    const responseData=await response.json();
    return responseData;
  }
  //Change weather location
  changeLocation(city){
    this.city=city;
  }
}