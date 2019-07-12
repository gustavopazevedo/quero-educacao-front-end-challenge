import { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** COMPONENTS */
import Select from '@components/Select';
/** END COMPONENTS */

/** STYLED */
const StyledFilters = styled.div`
	width: 100%;
	margin-top: 31px;
`;
/** END STYLED */

function Filters() {
	const [city, setCity] = useState(0);
	const [course, setCourse] = useState(0);

	return (
		<StyledFilters>
			<Select
				customCss={css` margin-bottom: 27px; `}
				label={'Selecione sua cidade'}
				onChange={value => setCity(value)}
				options={[{ text: 'São José dos Campos', value: 1 }]}
				value={city}
			/>
			<Select
				customCss={css` margin-bottom: 27px; `}
				label={'Selecione o curso de sua preferência'}
				onChange={value => setCourse(value)}
				options={[{ text: 'São José dos Campos', value: 1 }]}
				value={course}
			/>
		</StyledFilters>
	)
}

export default Filters;