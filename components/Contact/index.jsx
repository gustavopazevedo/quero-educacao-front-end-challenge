import styled from '@emotion/styled';
import Media from 'react-media';

const StyledContact = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	@media screen and (min-width: 1140px) {
		justify-content: space-between;
	}
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

	@media screen and (min-width: 1140px) {
		width: auto;
		border-right: none;
	}

	&:first-of-type {
		width: 100%;
		height: 75px;
		border-bottom: 2px solid var(--color-main-blue);
		border-right: none;

		@media screen and (min-width: 1140px) {
			width: auto;
			height: 91px;
			border-bottom: none;
		}

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

		@media screen and (min-width: 1140px) {
			width: auto;
			margin: 0 0 0 20px;
		}

		strong {
			color: #fff;
			display: block;
			text-align: center;

			@media screen and (min-width: 1140px) {
				text-align: left;
			}
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
				<Media query={'(min-width: 1140px)'}>
					{matches =>
						matches ? (
							<div>
								<strong>0800 123 2222</strong>
								<span>Seg - Sex 8h-22h</span>
							</div>

						) : (
								<div>
									<strong>0800 123 2222</strong>
									<span>Segunda a sexta de 8h às 22h</span>
								</div>
							)
					}
				</Media>
			</StyledContactItem>
			<StyledContactItem>
				<StyledContactItemIcon icon="comments" />
				<Media query={'(min-width: 1140px)'}>
					{matches =>
						matches ? (
							<div>
								<strong>Chat ao vivo</strong>
								<span>Seg - Sex 8h-22h</span>
							</div>

						) : (
								<div>
									<strong>Chat</strong>
								</div>
							)
					}
				</Media>
			</StyledContactItem>
			<StyledContactItem icon>
				<StyledContactItemIcon icon="envelope" />
				<Media query={'(min-width: 1140px)'}>
					{matches =>
						matches ? (
							<div>
								<strong>Mande um e-mail</strong>
								<span>Respondemos rapidinho</span>
							</div>

						) : (
								<div>
									<strong>E-mail</strong>
								</div>
							)
					}
				</Media>
			</StyledContactItem>
			<StyledContactItem>
				<StyledContactItemIcon icon="info-circle" />
				<Media query={'(min-width: 1140px)'}>
					{matches =>
						matches ? (
							<div>
								<strong>Central de ajuda</strong>
								<span>Encontre todas as respostas</span>
							</div>

						) : (
								<div>
									<strong>Ajuda</strong>
								</div>
							)
					}
				</Media>
			</StyledContactItem>
		</StyledContact>
	)
}

export default Contact;