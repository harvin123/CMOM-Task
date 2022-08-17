import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getCoinsList} from '../../component/api/coin';
import {Coin, CoinListResponse} from '../../types';
import {RootState} from '../store/store';

const initialState: CoinListResponse<Coin> = {
  data: [],
  loading: false,
};

const coinListReducer = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    fetchCoinsAction: state => {
      state.loading = true;
    },
    setCoinsDataAction: (state, action: PayloadAction<Coin[]>) => {
      console.log('action', action);
      state.data = action.payload;
      state.loading = false;
    },
  },
  //the thunk middleware gives promises states(pending, fullfilledm rejected) as action creator really cool right!
  extraReducers: builder => {
    builder.addCase(fetchCoinsDataThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCoinsDataThunk.fulfilled, (state, action: PayloadAction<Coin[]>) => {
        state.data = action.payload;
        state.loading = false;
      },
    );
  },
});

export const fetchCoinsDataThunk = createAsyncThunk('coins/fetchCoins', async () => {
  try {
    const result = await getCoinsList();
    return result.data;
  } catch (err) {
    console.log('err', err);
  }
});

export const selectCoinList = (state: RootState) => state.coins;

export const {fetchCoinsAction, setCoinsDataAction} = coinListReducer.actions;

export default coinListReducer.reducer;
