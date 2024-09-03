import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { useContext } from "react";
import { WindowWidthContext } from "../../contexts/WindowWidthContextProvider.tsx";

interface stats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export const PokemonRadarChart = (pokemon: stats) => {
  const { hp, attack, defense, specialAttack, specialDefense, speed } = pokemon;
  const { windowWidth } = useContext(WindowWidthContext);

  const data = [
    {
      stat: "HP",
      A: hp,
      fullMark: 150,
    },
    {
      stat: "Attack",
      A: attack,
      fullMark: 150,
    },
    {
      stat: "Defense",
      A: defense,
      fullMark: 150,
    },
    {
      stat: "Sp. attack",
      A: specialAttack,
      fullMark: 150,
    },
    {
      stat: windowWidth > 840 ? "Sp. defense" : "Sp. def",
      A: specialDefense,
      fullMark: 150,
    },
    {
      stat: "Speed",
      A: speed,
      fullMark: 150,
    },
  ];

  return (
    <RadarChart
      className={"pokemon-details__radar-chart"}
      cx={300}
      cy={200}
      outerRadius={150}
      width={600}
      height={400}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="stat" />
      <PolarRadiusAxis />
      <Radar
        name="Pokemon"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};
