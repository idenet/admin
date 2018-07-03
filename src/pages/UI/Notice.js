import React, { Component } from 'react'
import { Card, notification, Button } from 'antd'

import './ui.less'

export default class Notice extends Component {
	handleOpen = (type, direction) => {
		notification.config({
			placement: direction ? direction : 'topRight'
		})

		notification[type]({
			message: '通知',
			description: '发工资了'
		})
	}

	render() {
		return (
			<div>
				<Card title="通知提醒框" className="card">
					<Button type="primary" onClick={() => this.handleOpen('success')}>
						Success
					</Button>
					<Button type="default" onClick={() => this.handleOpen('info')}>
						Info
					</Button>
					<Button type="danger" onClick={() => this.handleOpen('warning')}>
						Warning
					</Button>
					<Button type="danger" onClick={() => this.handleOpen('error')}>
						Error
					</Button>
				</Card>
				<Card title="通知提醒框" className="card">
					<Button type="primary" onClick={() => this.handleOpen('success', 'topLeft')}>
						Success
					</Button>
					<Button type="default" onClick={() => this.handleOpen('info', 'topRight')}>
						Info
					</Button>
					<Button type="danger" onClick={() => this.handleOpen('warning', 'bottomLeft')}>
						Warning
					</Button>
					<Button type="danger" onClick={() => this.handleOpen('error', 'bottomRight')}>
						Error
					</Button>
				</Card>
			</div>
		)
	}
}
