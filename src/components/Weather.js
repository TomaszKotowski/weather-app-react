import React from "react";

const Weather = props => {
  return (
    <div className="weather__info">
      <h3 className="weather__key">Weather details</h3>
      {props.city &&
        props.country && (
          <p className="weather__key">
            Location:
            <span className="weather__value">
              {props.city}, {props.country}{" "}
            </span>
          </p>
        )}
      {props.temperature && (
        <p className="weather__key">
          Temperature:
          <span className="weather__value"> {props.temperature} &#8451;</span>
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          Humidity: <span className="weather__value"> {props.humidity} %</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Description: <span className="weather__value"> </span>
          {props.description}
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Description: <span className="weather__value"> </span>
          {props.description}
        </p>
      )}
      {props.error && <p className="weather__error">{props.error}</p>}
    </div>
  );
};

export default Weather;
