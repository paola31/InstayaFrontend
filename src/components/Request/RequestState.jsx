import { Select } from '@/components/Forms/FormComponents/Select';
import PropTypes from 'prop-types';

const states = [
	{ value: 'guardado', display: 'Guardado' },
	{ value: 'cancelado', display: 'Cancelado' },
	{ value: 'cumplido', display: 'Cumplido' },
];

export function RequestState({ currentState }) {
	const updateState = (state) => {
		// eslint-disable-next-line no-console
		console.log(state);
	};
	return (
		<div>
			<Select
				name={'state'}
				options={states}
				initialValue={currentState}
				handler={updateState}
			/>
		</div>
	);
}

RequestState.propTypes = {
	currentState: PropTypes.string,
};
