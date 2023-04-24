import Head from "next/head";
import { Navbar } from "@component/components/Navbar";
import Image from "next/image";
import { getGeoCoding, getWeatherOfCountry } from "@component/lib/weather-data";
import { production } from "@component/env/environment";
import { getMockData } from "@component/lib/mock/mock-country-list";
import { formatTime } from "@component/utils/date-format";
import { DailyList } from "@component/components/DailyList";
import { HourlyList } from "@component/components/HourlyList";

export const Country = (props) => {
  return (
    <>
      <Head>
        <title>{props.name}</title>
      </Head>
      <div className="fixed h-screen w-screen object-cover -z-10 bg-center bg-cover">
        <Image
          src="/background-image.jpg"
          fill
          sizes="100vw"
          alt="backgroundImage"
        ></Image>
      </div>
      <header>
        <Navbar />
      </header>
      <main className="relative min-h-screen inset-0">
        <div className="relative font-bold pl-6 text-white text-2xl pb-2 lg:w-3/4 lg:m-auto lg:pl-0">
          {props.name}
        </div>
        <HourlyList hourlyWeather={props.res.hourly} />
        <div className="my-8"></div>
        <DailyList dailyWeather={props.res.daily} />
      </main>
    </>
  );
};

export const getServerSideProps = async (context) => {
  let result;
  const { id } = context.query;
  if (production) {
    const coordinates = await getGeoCoding(id);
    if (coordinates && !coordinates.length) {
      return {
        notFound: true,
      };
    }
    result = await getWeatherOfCountry(coordinates[0]);
  } else {
    result = await getMockData("apiResult");
  }
  formatTime(result);
  return {
    props: { res: result, name: id },
  };
};

export default Country;
