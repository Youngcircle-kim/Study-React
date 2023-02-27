import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
  if (props.celius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

function toCelius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celius) {
  return (celius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return input;
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temprature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temprature) => {
    setTemperature(temprature);
    setScale('c');
  };
  const handleFahrenheitChange = (temprature) => {
    setTemperature(temprature);
    setScale('f');
  };

  const celius = scale === 'f' ? tryConvert(temprature, toCelius) : temprature;
  const fahrenheit =
    scale === 'c' ? tryConvert(temprature, toFahrenheit) : temprature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celius={parseFloat(celius)} />
    </div>
  );
}

export default Calculator;
