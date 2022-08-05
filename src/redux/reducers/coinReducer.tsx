import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCoinById, getCoinsList } from "../../component/api/coin";
import {Coin, ListResponse} from '../../types';
import { RootState } from "./store/store";

const initialState : ListResponse<Coin>={
coins: [],
coinDetails:{},
loading: false
};

const coinListReducer = createSlice({
  name: 'coins',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
  builder.addCase(fetchCoinsData.pending, state => {
    state.loading = true;
  });
  builder.addCase(
    fetchCoinsData.fulfilled,
    (state, action: PayloadAction<Coin[]>) => {
      state.coins = action.payload;
      state.loading = false;
    },
  );
  builder.addCase(fetchCoinsDetails.pending, state => {
    state.loading = true;
  });
  builder.addCase(
    fetchCoinsDetails.fulfilled,
    (state, action: PayloadAction<Coin>) => {
      state.coinDetails = action.payload;
      state.loading = false;
    },
  );
},
});

export const fetchCoinsData = createAsyncThunk('coins/fetchCoins',async ()=>{
    try{
      const result = await getCoinsList();
      return result.data;
    }
    catch(err){
        console.log("err",err);
    }
});

export const fetchCoinsDetails = createAsyncThunk('coins/fetchCoinDetails',async (id : string | undefined)=>{
    try{
      const result = await getCoinById(id);
      return result.data;
    }
    catch(err){
        console.log("err",err);
    }
});


export const coinList = (state : RootState) => state.coins;


export default coinListReducer.reducer; 