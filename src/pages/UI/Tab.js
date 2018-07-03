import React, { Component } from 'react'
import { Card, Tabs, message, Icon } from 'antd'

import './ui.less'

const TabPane = Tabs.TabPane

export default class Tab extends Component {
	constructor() {
		super()
		const panes = [
			{
				title: 'tab 1',
				content: 'tab 1',
				key: '1'
			},
			{
				title: 'tab 2',
				content: 'tab 2',
				key: '2'
			},
			{
				title: 'tab 3',
				content: 'tab 3',
				key: '3'
			}
		]
		this.newTabIndex = 0
		this.state = {
			panes,
			activeKey: panes[0].key
		}
	}

	onChange = activeKey => {
		this.setState({
			activeKey
		})
	}

	handleChange = key => {
		message.info('当前选定的key' + key)
	}

	onEdit = (targetKey, action) => {
		this[action](targetKey)
	}

	add = () => {
		const panes = this.state.panes
		const activeKey = `newTab${this.newTabIndex++}`
		panes.push({ title: 'New Tab', content: 'new tab content', key: activeKey })
		this.setState({ panes, activeKey })
	}

	remove = targetKey => {
		let activeKey = this.state.activeKey // 获取选中的标签页
		let lastIndex // 记录删除的前一个下标
		this.state.panes.forEach((pane, i) => {
			if (pane.key === targetKey) {
				lastIndex = i - 1
			}
    })
    // 获取未删除的
		const panes = this.state.panes.filter(pane => pane.key !== targetKey)
		if (lastIndex >= 0 && activeKey === targetKey) {
			activeKey = panes[lastIndex].key
		}
		this.setState({ panes, activeKey })
	}

	render() {
		return (
			<div>
				<Card title="tab标签" className="card">
					<Tabs defaultActiveKey="1" onChange={this.handleChange}>
						<TabPane tab="tab 1" key="1">
							第一个tab
						</TabPane>
						<TabPane tab="tab 2" key="2">
							第二个tab
						</TabPane>
						<TabPane tab="tab 3" key="3">
							第三个tab
						</TabPane>
					</Tabs>
				</Card>

				<Card title="tab带图标签" className="card">
					<Tabs defaultActiveKey="1" onChange={this.handleChange}>
						<TabPane
							tab={
								<span>
									<Icon type="plus" />tab 1
								</span>
							}
							key="1"
						>
							第一个tab
						</TabPane>
						<TabPane
							tab={
								<span>
									<Icon type="edit" />tab 2
								</span>
							}
							key="2"
						>
							第二个tab
						</TabPane>
						<TabPane
							tab={
								<span>
									<Icon type="delete" />tab 3
								</span>
							}
							key="3"
						>
							第三个tab
						</TabPane>
					</Tabs>
				</Card>

				<Card title="tab标签可添加" className="card">
					<Tabs
						defaultActiveKey="1"
						type="editable-card"
						onChange={this.onChange}
						activeKey={this.state.activeKey}
						onEdit={this.onEdit}
					>
						{this.state.panes.map(panel => (
							<TabPane tab={panel.title} key={panel.key}>
								{panel.content}
							</TabPane>
						))}
					</Tabs>
				</Card>
			</div>
		)
	}
}
