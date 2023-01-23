import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerListData } from './offer-list-data/offer-list-data';
import { offerData } from './offer-data/offer-data';
import { reviewData } from './review-data/review-data';
import { appProcess } from './app-process/app-process';
import { favoriteData } from './favorite-data/favorite-data';
import { userProcess } from './user-process/user-process';


export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.OfferList]: offerListData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Review]: reviewData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Favorite]: favoriteData.reducer,
});
