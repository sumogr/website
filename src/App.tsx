import * as React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import {
	getLocale,
	setLocale
} from 'utils';

// components
import Header from 'components/header';
import Footer from 'components/footer';

// pages
import Home from 'pages/home';

// css
import 'App.css';

interface State {
	locale: string;
}

class App extends React.Component<{}, State> {
	state: State = {
		locale: getLocale()
	};

	changeLocale = (locale: string) => {
		setLocale(locale, () => {
			this.setState({locale});
		})
	}

	public render() {
		return(
			<Router>
				<Header>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route render={() => <Redirect to="/" />} />
					</Switch>
					<Footer />
				</Header>
			</Router>
		);
	}
}

export default App;