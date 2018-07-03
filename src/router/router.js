import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from '../App'
import Login from '../pages/Login/Login'
import Admin from '../admin'
import Home from '../pages/Home/Home'
import Buttons from '../pages/UI/Buttons'
import Modals from '../pages/UI/Modals'
import Loadings from '../pages/UI/Loadings'
import Notice from '../pages/UI/Notice'
import Messages from '../pages/UI/Messages'
import Tab from '../pages/UI/Tab'
import Gallery from '../pages/UI/Gallery'
import Carousels from '../pages/UI/Carousels'
import FormLogin from '../pages/Form/Login'
import Register from '../pages/Form/register'
import NoMatch from '../pages/NoMatch/NoMatch'

export default class Router extends Component {
	render() {
		return (
			<HashRouter>
				<App>
					<Switch>
						<Route path="/login" component={Login} />
						<Route
							path="/"
							render={() => (
								<Admin>
									<Switch>
										<Route path="/home" component={Home} />
										<Route path="/ui/buttons" component={Buttons} />
										<Route path="/ui/modals" component={Modals} />
										<Route path="/ui/loadings" component={Loadings} />
										<Route path="/ui/notice" component={Notice} />
										<Route path="/ui/messages" component={Messages} />
										<Route path="/ui/tabs" component={Tab} />
										<Route path="/ui/gallery" component={Gallery} />
										<Route path="/ui/carousel" component={Carousels} />
										<Route path="/form/login" component={FormLogin} />
										<Route path="/form/reg" component={Register} />
										<Route component={NoMatch} />
										<Redirect to="/home" />
									</Switch>
								</Admin>
							)}
						/>
					</Switch>
				</App>
			</HashRouter>
		)
	}
}
