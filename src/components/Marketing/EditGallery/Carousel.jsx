import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import imageOne from "../../../assets/img/cindy-tang-ob-hsLNxYPc-unsplash.jpg";
import imageTwo from "../../../assets/img/naomi-hebert-MP0bgaS_d1c-unsplash.jpg";
import imageThree from "../../../assets/img/pixasquare-4ojhpgKpS68-unsplash.jpg";
import imageFour from "../../../assets/img/webaliser-_TPTXZd9mOo-unsplash.jpg";

function Item(props) {
	return (
		<Paper style={{ height: "auto", maxWidth: "100%" }} elevation={5}>
			<img src={props.item.img} alt='' width='100%' height='600' />
		</Paper>
	);
}

export default function CarouselDev(props) {
	const items = [
		{
			name: props.dataClick.title,
			description: props.dataClick.description,
			img: imageOne,
		},
		{
			name: props.dataClick.title,
			description: props.dataClick.description,
			img: imageTwo,
		},
		{
			name: props.dataClick.title,
			description: props.dataClick.description,
			img: imageThree,
		},
		{
			name: props.dataClick.title,
			description: props.dataClick.description,
			img: imageFour,
		},
	];

	return (
		<Carousel autoPlay={false} animation='slide'>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}
