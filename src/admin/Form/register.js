import React, { Component } from 'react'
import {
	Card,
	Form,
	Button,
	Input,
	Checkbox,
	Radio,
	Select,
	Switch,
	DatePicker,
	TimePicker,
	Upload,
	Icon,
	message,
	InputNumber
} from 'antd'

import moment from 'moment'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextAtea = Input.TextArea

class Reg extends Component {
	state = {
		userImg: ''
	}
	getBase64(img, callback) {
		const reader = new FileReader()
		reader.addEventListener('load', () => callback(reader.result))
		reader.readAsDataURL(img)
	}

	handleChange = info => {
		if (info.file.status === 'uploading') {
			this.setState({ loading: true })
			return
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			this.getBase64(info.file.originFileObj, imageUrl =>
				this.setState({
					userImg: imageUrl,
					loading: false
				})
			)
		}
	}

	handleSubmit = () => {
		let userInfo = this.props.form.getFieldsValue()
		console.log(userInfo)
		message.success(`注册成功${userInfo.userName}`)
	}

	render() {
		const { getFieldDecorator } = this.props.form
		// 栅格系统
		const formItemLayout = {
			labelCol: {
				xs: 24, // 小于xs 占据1列
				sm: 4 // 大于sm 占据4列
			},
			wrapperCol: {
				xs: 24,
				sm: 12
			}
		}
		const offsetLayout = {
			wrapperCol: {
				xs: 24,
				sm: {
					span: 12,
					offset: 4
				}
			}
		}
		const rowObject = { minRows: 2, maxRows: 6 }
		return (
			<div>
				<Card title="注册表单" className="card">
					<Form layout="horizontal">
						<FormItem label="用户名" {...formItemLayout}>
							{getFieldDecorator('userName', {
								initialValue: '',
								rules: [
									{
										required: true,
										message: '用户名不能为空'
									}
								]
							})(<Input prefix={<Icon type="user" />} placeholder="请输入用户名" />)}
						</FormItem>
						<FormItem label="密码" {...formItemLayout}>
							{getFieldDecorator('password', {
								rules: []
							})(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />)}
						</FormItem>
						<FormItem label="性别" {...formItemLayout}>
							{getFieldDecorator('sex', {
								initialValue: ''
							})(
								<RadioGroup>
									<Radio value="1">男</Radio>
									<Radio value="2">女</Radio>
								</RadioGroup>
							)}
						</FormItem>
						<FormItem label="年龄" {...formItemLayout}>
							{getFieldDecorator('age', {
								initialValue: '18'
							})(<InputNumber />)}
						</FormItem>
						<FormItem label="当前状态" {...formItemLayout}>
							{getFieldDecorator('state', {
								initialValue: ''
							})(
								<Select>
									<Option value="铁锅">铁锅</Option>
									<Option value="炖">炖</Option>
									<Option value="咸鱼">咸鱼</Option>
									<Option value="好吃">好吃</Option>
								</Select>
							)}
						</FormItem>
						<FormItem label="爱好" {...formItemLayout}>
							{getFieldDecorator('favo', {
								initialValue: []
							})(
								<Select mode="multiple">
									<Option value="1">游泳</Option>
									<Option value="2">写代码</Option>
									<Option value="3">写代码</Option>
									<Option value="4">写代码</Option>
									<Option value="5">游泳</Option>
									<Option value="6">写代码</Option>
									<Option value="7">写代码</Option>
									<Option value="8">写代码</Option>
								</Select>
							)}
						</FormItem>
						<FormItem label="是否已婚" {...formItemLayout}>
							{getFieldDecorator('isMarried', {
								valuePropName: 'checked',
								initialValue: true
							})(<Switch />)}
						</FormItem>
						<FormItem label="生日" {...formItemLayout}>
							{getFieldDecorator('birthday', {
								initialValue: moment('1970-01-01')
							})(<DatePicker format="YYYY-MM-DD hh:mm:ss" showTime />)}
						</FormItem>
						<FormItem label="联系地址" {...formItemLayout}>
							{getFieldDecorator('address', {
								initialValue: '北京市海定区'
							})(<TextAtea autosize={rowObject} />)}
						</FormItem>
						<FormItem label="早起时间" {...formItemLayout}>
							{getFieldDecorator('time')(<TimePicker />)}
						</FormItem>
						<FormItem label="头像" {...formItemLayout}>
							{getFieldDecorator('userImg')(
								<Upload
									listType="picture-card"
									showUploadList={false} // 上传列表
									action="//jsonplaceholder.typicode.com/posts/"
									onChange={this.handleChange}
								>
									{this.state.userImg ? (
										<img src={this.state.imageUrl} alt="" />
									) : (
										<Icon type="plus" />
									)}
								</Upload>
							)}
						</FormItem>
						<FormItem {...offsetLayout}>
							{getFieldDecorator('protocol', {
								valuePropName: 'checked',
								initialValue: true
							})(
								<Checkbox>
									我已经阅读过<a>协议</a>
								</Checkbox>
							)}
						</FormItem>
						<FormItem {...offsetLayout}>
							<Button type="primary" onClick={this.handleSubmit}>
								注册
							</Button>
						</FormItem>
					</Form>
				</Card>
			</div>
		)
	}
}

export default Form.create()(Reg)
