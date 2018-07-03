import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import App from '../App'
import Login from '../pages/Login/Login'
import Admin from '../admin'
import Home from '../admin/Home/Home'
import Buttons from '../admin/UI/Buttons'
import Modals from '../admin/UI/Modals'
import Loadings from '../admin/UI/Loadings'
import Notice from '../admin/UI/Notice'
import Messages from '../admin/UI/Messages'
import Tab from '../admin/UI/Tab'
import Gallery from '../admin/UI/Gallery'
import Carousels from '../admin/UI/Carousels'
import FormLogin from '../admin/Form/Login'
import Register from '../admin/Form/register'
import NoMatch from '../admin/NoMatch/NoMatch'

export default class Router extends Component {
	render() {
		return (
			<HashRouter>
				<App>
					<Switch>
						<Route path="/login" component={Login} />
						<Route
							path="/admin"
							render={() => (
								<Admin>
									<Switch>
										<Route path="/admin/home" component={Home} />
										<Route path="/admin/ui/buttons" component={Buttons} />
										<Route path="/admin/ui/modals" component={Modals} />
										<Route path="/admin/ui/loadings" component={Loadings} />
										<Route path="/admin/ui/notice" component={Notice} />
										<Route path="/admin/ui/messages" component={Messages} />
										<Route path="/admin/ui/tabs" component={Tab} />
										<Route path="/admin/ui/gallery" component={Gallery} />
										<Route path="/admin/ui/carousel" component={Carousels} />
										<Route path="/admin/form/login" component={FormLogin} />
										<Route path="/admin/form/reg" component={Register} />
										{/* <Route component={NoMatch} /> */}
										<Redirect to="/admin/home" />
									</Switch>
								</Admin>
							)}
						/>
            <Redirect to="/login" />
					</Switch>
				</App>
			</HashRouter>
		)
	}
}
