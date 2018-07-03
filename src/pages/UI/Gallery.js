import React, { Component } from 'react'
import { Card, Row, Col, Modal } from 'antd'

const { Meta } = Card

export default class Gallery extends Component {
	state = {
		visible: false,
		currentImg: ''
	}

	openGallery = imgsrc => {
		this.setState({
			visible: true,
			currentImg: `/gallery/${imgsrc}`
		})
	}

	render() {
		const imgs = [
			['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
			['7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'],
			['13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'],
			['19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg']
		]

		const imgList = imgs.map(list =>
			list.map(item => (
				<Card
					style={{ marginBottom: 10 }}
					hoverable={true}
					cover={<img onClick={() => this.openGallery(item)} src={`/gallery/${item}`} alt="" />}
				>
					<Meta title="react admin" description="美女图片" />
				</Card>
			))
		)

		return (
			<div className="card">
				<Row gutter={10}>{imgList.map(item => <Col md={6}>{item}</Col>)}</Row>
				<Modal
					width={500}
					visible={this.state.visible}
					onCancel={() => {
						this.setState({
							visible: false
						})
					}}
					title="美女"
					footer={null}
				>
					<img src={this.state.currentImg} alt="" width="100%" />
				</Modal>
			</div>
		)
	}
}
