import { BrowserRouter } from "react-router-dom";

//Our components
import Router from "./router";
//rsuite styles
import "rsuite/dist/rsuite.min.css";

const App = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};

export default App;
