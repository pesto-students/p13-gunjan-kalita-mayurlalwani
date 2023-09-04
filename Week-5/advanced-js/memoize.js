function createTemperatureFetcher() {
  const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };

  const cache = {};

  return function getTemperatureForCity(cityName) {
    if (cache[cityName] !== undefined) {
      console.log(`${cityName} from cache`);
      return cache[cityName];
    }

    if (temperatureData[cityName] !== undefined) {
      cache[cityName] = temperatureData[cityName];
      console.log(`${cityName} from data`);
      return cache[cityName];
    }

    console.log(`Data not available for ${cityName}`);
    return null;
  };
}

const getTemperatureForCity = createTemperatureFetcher();

const temperature1 = getTemperatureForCity('New York');
console.log(temperature1); // 20

const temperature2 = getTemperatureForCity('New York');
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity('London');
console.log(temperature3); // 18

const temperature4 = getTemperatureForCity('London');
console.log(temperature4); // 18 (retrieved from cache)
