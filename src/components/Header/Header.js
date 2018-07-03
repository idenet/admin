import React, { Component } from 'react'
import { Row, Col } from 'antd'

import './Header.less'

export default class Header extends Component {
	render() {
		return (
			<div>
				<Row className="header">
					<Col span="24" className="header-top">
						<span>欢迎，香香鸡</span>
						<a>退出</a>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<Col className="breadcrumb-title" span="4">
						首页
					</Col>
				</Row>
			</div>
		)
	}
}
