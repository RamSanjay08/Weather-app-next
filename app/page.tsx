'use client'
import Navbar from "@/components/Navbar";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import { CgLayoutGrid } from "react-icons/cg";


interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export default function Home() {

  const { isPending, error, data } = useQuery<WeatherDetail>({
    queryKey: ['repoData'],
    queryFn: async () => {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`)
      return data
    }
  })
  // console.log(data)
  
  if (isPending) return <div className="flex justify-center items-center min-h-screen">
    <p className="animate-bounce">Loading...</p>
  </div>
  
  return (
   <div>
      <Navbar />
   </div>
  );
}
