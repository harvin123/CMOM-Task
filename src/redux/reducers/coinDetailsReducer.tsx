import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCoinById } from "../../component/api/coin";
import {Coin, CoinDetailsResponse} from '../../types';
import { RootState } from "../store/store";

const initialState : CoinDetailsResponse<Coin>={
 data: {},
loading: false
};

const coinListReducer = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    //action are created here Cool!
    fetchCoinsDetailsAction :(state, action : PayloadAction<string | undefined>) =>{ state.loading = true},
    setCoinsDetailsAction :(state, action: PayloadAction<Coin>) =>{
      state.data = action.payload;
      state.loading = false;
    }
  },
  //it can listen to extra action here apart from the created above.
  //the thunk middleware gives promises states(pending, fullfilledm rejected) as action creator really cool right!
  extraReducers: builder => {
  builder.addCase(fetchCoinsDetailsThunk.pending, state => {
    state.loading = true;
  });
  builder.addCase(
    fetchCoinsDetailsThunk.fulfilled,
    (state, action: PayloadAction<Coin>) => {
      state.data = action.payload;
      state.loading = false;
    },
  );
},
});

//using thunk the default middleware in redux tool kit
//call this direclty from the UI to trigger.
export const fetchCoinsDetailsThunk = createAsyncThunk('coins/fetchCoinDetails',async (id : string | undefined)=>{
    try{
      const result = await getCoinById(id);
      return result.data;
    }
    catch(err){
        console.log("err",err);
    }
});

//select the state from the store here for this reducer
export const selectcoinDetails = (state : RootState) => state.coindetails;

//These will act as action creators that will be usedf from UI 
export const {  setCoinsDetailsAction, fetchCoinsDetailsAction } = coinListReducer.actions;
 
//here we expose the reducer function to be registered with redux store.
export default coinListReducer.reducer; 