import { css } from '@emotion/core';
import styled from '@emotion/styled';

const StyledContact = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const StyledContactItem = styled.li`
	width: 33.33%;
	height: 91px;
	list-style-type: none;
	font-size: 1.6rem;
	font-weight: 700;
	color: #fff;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	position: relative;
	flex-wrap: wrap;
	border-right: 2px solid var(--color-main-blue);

	&:first-of-type {
		width: 100%;
		height: 75px;
		border-bottom: 2px solid var(--color-main-blue);
		border-right: none;

		> div {
			width: auto;
			margin: 0 0 0 20px;

			strong {
				text-align: left;
			}
		}
	}

	&:last-of-type {
		border-right: none;
	}

	> div {
		width: 100%;
		margin-top: 8px;

		strong {
			color: #fff;
			display: block;
			text-align: center;
		}

		span {
			font-weight: 400;
			display: block;
		}
	}
`;

const StyledContactItemIcon = styled.span`
	width: 32px;
	height: 32px;
	background: url('static/images/icons/icon-${props => props.icon}.svg') no-repeat scroll center center;
	background-size: 32px auto;
	display: block;
	//margin-bottom: 8px;
`;

function Contact() {
	return (
		<StyledContact>
			<StyledContactItem>
				<StyledContactItemIcon icon="whatsapp" />
				<div>
					<strong>0800 123 2222</strong>
					<span>Segunda a sexta de 8h às 22h</span>
				</div>
			</StyledContactItem>
			<StyledContactItem>
				<StyledContactItemIcon icon="comments" />
				<div>
					<strong>Chat</strong>
				</div>
			</StyledContactItem>
			<StyledContactItem icon>
				<StyledContactItemIcon icon="envelope" />
				<div>
					<strong>E-mail</strong>
				</div>
			</StyledContactItem>
			<StyledContactItem>
				<StyledContactItemIcon icon="info-circle" />
				<div>
					<strong>Ajuda</strong>
				</div>
			</StyledContactItem>
		</StyledContact>
	)
}

export default Contact;