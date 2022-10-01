import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, City, AppRoute } from '../const';
import { Offers } from '../types/offers';

export const changeCity = createAction<City>('main/changeCity');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
