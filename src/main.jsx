import React    from "react";
import ReactDOM from "react-dom/client";
//redux
import { Provider } from "react-redux";
//our components
import store from "./store";
import App   from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
