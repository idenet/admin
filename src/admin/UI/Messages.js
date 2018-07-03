import React, { Component } from 'react'
import { Card, Button, message } from 'antd'

import './ui.less'

export default class Messages extends Component {
	handleShowMessage = type => {
		message[type](type)
	}

	render() {
		return (
			<div>
				<Card title="全局提示框" className="card">
					<Button type="primary" onClick={() => this.handleShowMessage('success')}>
						Success
					</Button>
					<Button type="default" onClick={() => this.handleShowMessage('info')}>
						Info
					</Button>
					<Button type="primary" onClick={() => this.handleShowMessage('warning')}>
						Warning
					</Button>
					<Button type="danger" onClick={() => this.handleShowMessage('error')}>
						Error
					</Button>
					<Button type="primary" onClick={() => this.handleShowMessage('loading')}>
						Loading
					</Button>
				</Card>
			</div>
		)
	}
}
