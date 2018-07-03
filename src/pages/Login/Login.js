import React, { Component } from 'react'
import './login.less'
import axios from 'axios'

import FormLogin from './FormLogin'
import {connect} from 'react-redux'
import {set_menu} from '../../store/action-creator'

 class Login extends Component {
	loginReq = param => {
    axios.get('http://menu.json').then(res => {
      const menu = this.organizeMenu(res.data.menu, param)
      this.props.set_menu(menu)
      window.location.href = '/#/admin'
		})
	}
	organizeMenu(data, param) {
		let Menu
		if (param.username !== 'admin') {
			Menu = data.filter(item => {
				return item.competence !== 0
      })
      console.log(Menu)
		} else {
			Menu = data
		}
		return Menu
	}

	// organizeMenu(data, param) {
	// 	if (param.username !== 'admin') {
	// 		let newMenu = data.filter(item => {
	// 			return item.competence !== 0
	// 		})
	// 		console.log(newMenu)
	// 	}
	// 	let map = this.getTitle2Route()
	// 	console.log(map)
	// }

	// getTitle2Route() {
	// 	let map = new Map()
	// 	const viewRoute = require.context('../../admin', true, /\.js$/)
	// 	viewRoute.keys().forEach(item => {
	// 		let route = item.split('.')[1] // 路由 /ui/button
	// 		let compare = route.split('/') // 分隔 ['', ui，button]
	// 		console.log(compare)
	// 	})
	// 	return map
	// }

	render() {
		return (
			<div className="container">
				<div className="content">
					<div className="top">
						<h1>登录</h1>
					</div>
					<div className="main">
						<FormLogin loginSubmit={this.loginReq} />
					</div>
				</div>
				<div className="footer">底部footer</div>
			</div>
		)
	}
}
export default connect(null, {set_menu})(Login)