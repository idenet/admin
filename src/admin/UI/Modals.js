import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'

export default class Modals extends Component {
	state = {
		showModal1: false,
		showModal2: false,
		showModal3: false,
		showModal4: false
	}

	handleOpen = type => {
		this.setState({
			[type]: true
		})
	}

	handleClose = type => {
		this.setState({
			[type]: false
		})
	}

	handleConfirm = type => {
		Modal[type]({
			title: '确认',
			content: '确定要删除吗?',
			onOk() {
				console.log('ok')
			},
			onCancel() {
				console.log('cancel')
			}
		})
	}

	render() {
		return (
			<div>
				<Card title="基础模态框" className="card">
					<Button type="primary" onClick={() => this.handleOpen('showModal1')}>
						Open
					</Button>
					<Button type="primary" onClick={() => this.handleOpen('showModal2')}>
						自定义页脚
					</Button>
					<Button type="primary" onClick={() => this.handleOpen('showModal3')}>
						顶部20px弹框
					</Button>
					<Button type="primary" onClick={() => this.handleOpen('showModal4')}>
						水平垂直居中
					</Button>
				</Card>
				<Card title="信息确认框" className="card">
					<Button type="primary" onClick={() => this.handleConfirm('confirm')}>
						Confirm
					</Button>
					<Button type="primary" onClick={() => this.handleConfirm('info')}>
						Info
					</Button>
					<Button type="primary" onClick={() => this.handleConfirm('success')}>
						Success
					</Button>
					<Button type="primary" onClick={() => this.handleConfirm('warning')}>
						Warning
					</Button>
				</Card>
				<Modal title="React" visible={this.state.showModal1} onCancel={() => this.handleClose('showModal1')}>
					弹框弹框弹框弹框弹框弹框弹框弹框
				</Modal>

				<Modal
					title="React"
					visible={this.state.showModal2}
					okText="ok"
					cancelText="算了"
					onCancel={() => this.handleClose('showModal2')}
				>
					弹框弹框弹框弹框弹框弹框弹框弹框
				</Modal>

				<Modal
					title="React"
					visible={this.state.showModal3}
					style={{ top: '20px' }}
					onCancel={() => this.handleClose('showModal3')}
				>
					弹框弹框弹框弹框弹框弹框弹框弹框
				</Modal>

				<Modal
					title="React"
					visible={this.state.showModal4}
					wrapClassName="vertical-center-modal"
					onCancel={() => this.handleClose('showModal4')}
				>
					弹框弹框弹框弹框弹框弹框弹框弹框
				</Modal>
			</div>
		)
	}
}
