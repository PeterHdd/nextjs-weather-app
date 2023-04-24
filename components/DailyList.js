import Image from "next/image";

export const DailyList = (props) => {
  const res = props.dailyWeather;
  return (
    <div className="m-5 lg:w-3/4 lg:m-auto  relative overflow-hidden border flex flex-col border-gray-200 rounded-lg shadow-2xl hover:bg-gray-100 bg-white">
      <p className="font-bold pl-2">Next 8 Days</p>
      <ul className="divide-y divide-gray-200">
        {res.map((value, key) => {
          return (
            <li key={key} className="p-2 sm:pb-4 mx-5">
              <div className="flex items-center space-x-4 justify-between">
                <div className="flex min-w-0">
                  <Image
                    src={`https://openweathermap.org/img/wn/${value.weather[0].icon}.png`}
                    alt="icon weather"
                    width={50}
                    height={60}
                  />
                  <div className="text-center pt-1 w-28">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {value.dt}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {value.weather[0].description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex text-xs items-center flex-col font-normal text-gray-900">
                  <p>Precipitation: {value.pop}%</p>
                  <p>Humidity: {value.humidity}%</p>
                  <p>Wind: {value.wind_speed}m/s</p>
                </div>
                <div className="flex items-center flex-col text-base font-semibold text-gray-900">
                  <p>
                    {value.temp.day}
                    <span>&#8451;</span>
                  </p>
                  <p>
                    {value.temp.night}
                    <span>&#8451;</span>
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
