import React, { Component } from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './ui.less'

export default class Laodings extends Component {
	render() {
		const icon = <Icon type="loading" />
		return (
			<div>
				<Card title="Spin用法" className="card">
					<Spin size="small" />
					<Spin style={{ margin: '0 10px' }} />
					<Spin size="large" />
					<Spin indicator={icon} style={{ marginLeft: 10 }} />
				</Card>

				<Card title="内容遮罩" className="card">
					<Alert message="React" description="信息框信息框" type="info" className="alert" />
					<Spin>
						<Alert message="React" description="信息框信息框" type="warning" className="alert" />
					</Spin>

					<Spin tip="加载中...">
						<Alert message="React" description="信息框信息框" type="warning" className="alert" />
					</Spin>

					<Spin indicator={icon} tip="加载中...">
						<Alert message="React" description="信息框信息框" type="warning" className="alert" />
					</Spin>
				</Card>
			</div>
		)
	}
}
