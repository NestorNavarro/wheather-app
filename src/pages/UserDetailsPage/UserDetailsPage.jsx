import { useSelector, shallowEqual } from "react-redux";
//rsuite
import { Panel } from "rsuite";
//api
import { weatherApi } from "store/api/weatherApi";

const UserDetailsPage = () => {

	const { userSlice } = useSelector( state => state, shallowEqual);


	const { data : weatherInfo } = weatherApi.useGetDataQuery({ params : { query : `${userSlice?.lat}, ${userSlice?.lon}` }});

	console.log(weatherInfo);

	return (
		<Panel className="bg-white p-3" shaded bordered bodyFill>
			<h1>{userSlice?.name} {userSlice?.lastname}</h1>
			<div className="row">
				<h3 className="col-lg-3 col-md-5">lat : {userSlice?.lat}</h3>
				<h3 className="col-lg-3 col-md-5">lon : {userSlice?.lon}</h3>
			</div>
			<div className="row mt-3">
				<div className="col-md-6">
					<h2>Localidad</h2>
					<h5>{weatherInfo?.location?.name}, {weatherInfo?.location?.region} {weatherInfo?.location?.country}.</h5>
					<h3>Hora local</h3>
					<h5>{weatherInfo?.location?.localtime}</h5>
				</div>
				<div className="row col-md-6">
					<div className="col-md-4 d-flex justify-content-md-end justify-content-start">
						<img
							src={weatherInfo?.current?.weather_icons?.[0] }
							width={95}
							height={95}
						/>
					</div>
					<div className="col-md-8">
						<div className="">
							<h1>{weatherInfo?.current?.temperature}°C</h1>
							<h4 className="text-muted">{weatherInfo?.current?.weather_descriptions?.[0]}</h4>
						</div>
						<div className="row">
							<div className="col-md-6">
								<p className="text-muted m-0">Humedad</p>
								<p className="m-0">{weatherInfo?.current?.humidity}%</p>
							</div>
							<div className="col-md-6">
								<p className="text-muted m-0">Presión</p>
								<p className="m-0">{weatherInfo?.current?.pressure}mbar</p>
							</div>
							<div className="col-md-6">
								<p className="text-muted m-0">Velocidad del Viento</p>
								<p className="m-0">{weatherInfo?.current?.wind_speed}km/h</p>
							</div>
							<div className="col-md-6">
								<p className="text-muted m-0">Sensación Real</p>
								<p className="m-0">{weatherInfo?.current?.feelslike}°C</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</Panel>
	);
};

export default UserDetailsPage;
