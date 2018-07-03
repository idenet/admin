import React, { Component } from 'react'
import { Row, Col, Modal } from 'antd'

import './Header.less'

export default class Header extends Component {
	handleExit = () => {
		Modal.confirm({
			title: '退出',
			content: '确认要退出吗？',
			onOk() {
				window.location.href = '/#/login'
			},
			onCancel() {
				console.log('cancel')
			}
		})
	}

	render() {
		return (
			<div>
				<Row className="header">
					<Col span="24" className="header-top">
						<span>欢迎，香香鸡</span>
						<a onClick={this.handleExit}>退出</a>
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
