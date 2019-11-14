class UI{
  constructor(){
    this.location=document.getElementById('w-location');
    //this.desc=document.getElementById('w-desc');
    this.string=document.getElementById('w-string');
    //this.icon=document.getElementById('w-icon');
    this.details=document.getElementById('w-details');
    this.latlng=document.getElementById('w-latlng');
    this.pressure=document.getElementById('w-pressure');
    this.humidity=document.getElementById('w-humidity');
    this.wind=document.getElementById('w-wind');
  }
  paint(climate){
    console.log(climate.weather.icon);
    this.location.textContent=climate.name;
    //this.desc.textContent=climate.weather.description;
    this.string.textContent=climate.main.temp;
    //this.icon.setAttribute('src',`http://openweathermap.org/img/w/${climate.weather.icon}.png`);
    this.humidity.textContent=`Relative Humidity: ${climate.main.humidity}`;
    this.wind.textContent=`Wind Speed: ${climate.wind.speed}`;
    this.pressure.textContent=`Pressure: ${climate.main.pressure}`;
    this.latlng.textContent=`Latitude: ${climate.coord.lat} & Longitude: ${climate.coord.lon}`;
  }
}