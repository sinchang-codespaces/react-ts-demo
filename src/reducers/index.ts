import { IWeatherState } from '../types'
import { WeatherAction, WeatherActionTypes } from '../actions'

export const initialState: IWeatherState = {
  weatherList: [],
  loading: false,
  errorMsg: '',
  woeid: 0
}

export default (state = initialState, action: WeatherAction): IWeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER_START:
      return {
        ...state,
        loading: true
      }

    case WeatherActionTypes.FETCH_WEATHER_DONE:
      return {
        ...state,
        weatherList: action.payload.weatherList,
        loading: false
      }

    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
        loading: false
      }

    case WeatherActionTypes.WOEID_SET:
      return {
        ...state,
        woeid: action.payload.woeid
      }

    default:
      return state
  }
}
