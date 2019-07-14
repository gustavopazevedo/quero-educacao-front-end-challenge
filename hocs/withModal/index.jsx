import { useEffect, useState } from 'react';
import posed from 'react-pose';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/**POSED */
const PosedWithModalOverlay = posed.div({
	opened: {
		applyAtStart: { display: 'block' },
		opacity: 0.88,
		transition: { duration: 500 }
	},
	closed: {
		applyAtEnd: { display: 'none' },
		opacity: 0,
		transition: { duration: 500 }
	}
});

const PosedWithModalComponent = posed.div({
	opened: {
		applyAtStart: { display: 'block' },
		opacity: 1,
		x: '-50%',
		y: 60,
		transition: { duration: 500 },
	},
	closed: {
		applyAtEnd: { display: 'none' },
		opacity: 0,
		x: '-50%',
		y: 200,
		transition: { duration: 500 }
	}
});
/** END POSED */

/** STYLED */
const StyledWithModal = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;
`;

const StyledWithModalOverlay = styled(PosedWithModalOverlay)`
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: var(--color-black);
	z-index: 997;
	display: none;
`;

const StyledWithModalComponent = styled(PosedWithModalComponent)`
	max-width: 100%;
	box-shadow: 0 24px 24px -12px rgba(46,45,55,0.6);
	border-radius: 6px;
	position: fixed;
	left: 50%;
	z-index: 998;
	display: none;

	${props => props.customCss}
`;

const StyledCloseButton = styled.button`
	width: 20px;
	height: 20px;
	position: absolute;
	top: -41px;
	right: 16px;
	border: none;
	outline: none;
	background: transparent url('/static/images/icons/icon-close.svg') no-repeat scroll center center;
	background-size: 15px auto;
`;
/** END STYLED */

function withModal(WrappedComponent) {
	function WithModal(props) {
		const [isRendered, setIsRendered] = useState(props.isOpened);
		const [isOpened, setIsOpened] = useState(false);
		
		useEffect(() => {
			if (props.isOpened !== isOpened) {
				if (props.isOpened && !isRendered) {
					setIsRendered(true)
				} else {
					setIsOpened(false)
				}
			}
		}, [props.isOpened])

		useEffect(() => {
			if (props.isOpened) {
				setIsOpened(true)
			}
		}, [isRendered])

		if (isRendered) {
			return (
				<StyledWithModal>
					<StyledWithModalOverlay pose={isOpened ? 'opened' : 'closed'}>&nbsp;</StyledWithModalOverlay>
					<StyledWithModalComponent
						customCss={props.customCss}
						pose={isOpened ? 'opened' : 'closed'}
						onPoseComplete={(state) => state === 'closed' ? setIsRendered(false) : null}
					>
						<StyledCloseButton onClick={() => props.onClose()} />
						<WrappedComponent {...props} />
					</StyledWithModalComponent>
				</StyledWithModal>
			)
		}

		return null
	}

	const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	WithModal.displayName = `withModal(${wrappedComponentName})`;
	return WithModal;
}

export default withModal;