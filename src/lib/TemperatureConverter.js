
export function convertCelsius(temperature) {
  return ((temperature - 32) * 5) / 9;
}

export function convertFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
  
}

export function convertTo(temperature, Converter) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = Converter(input);
  const roundedOutput = Math.round(output * 1000) / 1000;
  return roundedOutput.toString();

}

