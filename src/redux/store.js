import { configureStore } from '@reduxjs/toolkit';

import ScoreSlice from '../state/score.js';

export default configureStore({
	reducer: {
		Score: ScoreSlice,
	},
});
