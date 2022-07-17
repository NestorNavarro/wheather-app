import { useSelector, shallowEqual } from "react-redux";

import { Carousel, Panel } from "rsuite";

import { weatherApi } from "store/api/weatherApi";


const ForecastDays = () => {
	const { userSlice } = useSelector( state => state, shallowEqual);

	//because the free plan, I can't make a petition to get the future forecastdays, but this would be the logic for that case
	const { data : forecastDays } = weatherApi.useGetDataQuery({ module : "forecast", params : { query : `${userSlice?.lat},${userSlice?.lon}` } });

	return (
		<div className="p-5">
			<Carousel autoplay className="p-1 rounded">
				{
					Object.entries(forecastDays?.forecast ?? {}).map(([date, forecast]) => (
						<Panel key={date} className="bg-white">
							<h4 className="text-center mt-4">{date}</h4>
							<div className="row text-center">
								<div className="col-md-6">
									<h4>Temperatura max.</h4>
									<h3>{forecast?.maxtemp}°C</h3>
								</div>
								<div className="col-md-6">
									<h4>Temperatura min.</h4>
									<h3>{forecast?.mintemp}°C</h3>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<h1>Promedio: </h1>
								<h1>{forecast?.avgtemp}°C</h1>
							</div>
						</Panel>
					))
				}
			</Carousel>
		</div>
	);
};

export default ForecastDays;
