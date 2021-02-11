import { useState } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import City from "./City";

import "../styles/Main.scss";

export default function Main() {
  const api = {
    base: "https://api.openweathermap.org/data/2.5",
    key: "864993bf33d3478d35af1b8a2951d192",
  };
  let selectors = [
    `Moscow`,
    `London`,
    `Berlin`,
    `Bela`,
    `New York`,
    `Veliky Novgorod`,
    `Bryansk`,
    `Vladimir`,
    `Gdov`,
    `Yelets`,
    `Kyzyl`,
    `Naryan-Mar`,
    `Omsk`,
    `Perm`,
    `Pskov`,
    `Surgut`,
    `Shatura`,
    `Yakutsk`,
    `Yaroslavl`,
    `Podolsk`,
    `Murom
    `,
  ];
  let [searchCity, setSearchCity] = useState("");
  let [currentCity, setCurrentCity] = useState(null);

  let selectHandler = (e) => {
    setSearchCity(e.target.value);
  };
  let getData = async () => {
    let res = await fetch(
      `${api.base}/weather?q=${searchCity}&appid=${api.key}`
    );
    let json = await res.json();
    setCurrentCity(json);
    setSearchCity("");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="selectField">
        <FormControl color="primary">
          <InputLabel id="demo-simple-select-label">Город</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchCity}
            onChange={selectHandler}
          >
            {selectors.map((elem) => (
              <MenuItem value={elem}>{elem}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          className="selectField__btn"
          disabled={searchCity == ""}
          onClick={getData}
        >
          Выбрать
        </Button>
      </div>

      <City currentCity={currentCity} />
    </div>
  );
}
