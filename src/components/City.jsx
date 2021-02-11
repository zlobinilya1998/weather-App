import "../styles/City.scss";

export default function City({ currentCity }) {
  console.log(currentCity);
  if (currentCity == null) {
    return null;
  }

  let parseTemp = (temp) => {
    return Math.floor(temp - 273.15);
  };

  let parseWind = () => {
    return Math.floor(currentCity.wind.speed);
  };

  return (
    <div className={`currentCity`}>
      <h3 className="currentCity__name">
        {currentCity.name}, {currentCity.sys.country}
      </h3>
      <div className="currentCity__temp">
        <p className="currentCity__temp__primary">
          Температура: {parseTemp(currentCity.main.temp)}&deg;C
        </p>
        <p className="currentCity__temp__secondary">
          Ощущается как: {parseTemp(currentCity.main.feels_like)}&deg;C
        </p>
      </div>

      <p className="currentCity__humidity">
        Влажность: {currentCity.main.humidity}%
      </p>
      <p className="currentCity__wind">Ветер: {parseWind()} м/с</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="currentCity_minTemp">
          Минимальная температура за сутки: &nbsp;
          {parseTemp(currentCity.main.temp_min)}&deg;C
        </p>
        <p className="currentCity_maxTemp">
          Максимальная температура за сутки: &nbsp;
          {parseTemp(currentCity.main.temp_max)}&deg;C
        </p>
      </div>
    </div>
  );
}
