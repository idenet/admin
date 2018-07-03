import React, { Component } from 'react'
import { Card, Button, Icon, Radio } from 'antd'
import './ui.less'

export default class Buttons extends Component {
	state = {
		loading: true,
		size: 'default'
	}

	handleCloseLoading = () => {
		this.setState({
			loading: !this.state.loading
		})
	}

	handleChange = e => {
		this.setState({
			size: e.target.value
		})
	}

	render() {
		return (
			<div>
				<Card className="card" title="基础按钮">
					<Button type="primary">按钮</Button>
					<Button>普通按钮</Button>
					<Button type="dashed">虚线按钮</Button>
					<Button type="danger">危险按钮</Button>
					<Button disabled>禁用按钮</Button>
				</Card>

				<Card title="图形按钮" className="card">
					<Button icon="plus">创建</Button>
					<Button icon="edit">编辑</Button>
					<Button icon="delete">删除</Button>
					<Button shape="circle" icon="search" />
					<Button type="primary" icon="search">
						搜索
					</Button>
					<Button type="primary" icon="download">
						下载
					</Button>
				</Card>

				<Card className="card" title="loading按钮">
					<Button type="primary" loading={this.state.loading}>
						确定
					</Button>
					<Button type="primary" shape="circle" loading={this.state.loading} />
					<Button loading={this.state.loading}>点击加载</Button>
					<Button shape="circle" loading={this.state.loading} />
					<Button type="primary" onClick={this.handleCloseLoading}>
						toggle loading
					</Button>
				</Card>

				<Card title="按钮组" style={{ marginBottom: '10px' }}>
					<Button.Group>
						<Button type="primary">
							<Icon type="left" /> 前进
						</Button>
						<Button type="primary">
							后退 <Icon type="right" />
						</Button>
					</Button.Group>
				</Card>

				<Card className="card" title="按钮尺寸">
					<Radio.Group value={this.state.size} onChange={this.handleChange}>
						<Radio value="small">小</Radio>
						<Radio value="default">中</Radio>
						<Radio value="large">大</Radio>
					</Radio.Group>
					<Button type="primary" size={this.state.size}>
						按钮
					</Button>
					<Button size={this.state.size}>普通按钮</Button>
					<Button type="dashed" size={this.state.size}>
						虚线按钮
					</Button>
					<Button type="danger" size={this.state.size}>
						危险按钮
					</Button>
					<Button disabled size={this.state.size}>
						禁用按钮
					</Button>
				</Card>
			</div>
		)
	}
}
