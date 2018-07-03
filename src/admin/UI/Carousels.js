import React, { Component } from 'react'
import { Card, Carousel } from 'antd'

import './ui.less'

export default class Carousels extends Component {
	render() {
		return (
			<div>
				<Card title="文字轮播" className="card">
					<Carousel autoplay effect="fade">
						<div>
							<h3>React</h3>
						</div>
						<div>
							<h3>Vue</h3>
						</div>
						<div>
							<h3>Angular</h3>
						</div>
					</Carousel>
				</Card>

				<Card title="图片轮播" className="card slider-wrap">
					<Carousel autoplay effect="fade">
						<div>
							<img src="/gallery/5.jpg" alt="" width="100%" />
						</div>
						<div>
							<img src="/gallery/7.jpg" alt="" width="100%" />
						</div>
						<div>
							<img src="/gallery/11.jpg" alt="" width="100%" />
						</div>
					</Carousel>
				</Card>
			</div>
		)
	}
}
