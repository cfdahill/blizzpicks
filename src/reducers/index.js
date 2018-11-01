import {combineReducers} from 'redux';
import EventsReducer from './reducer_schedule2';
import PicksReducer from './reducer_picks';
import PointsReducer from './reducer_points2';
import RewardsReducer from './reducer_rewards';
import ShopReducer from './reducer_shop2';

const rootReducer = combineReducers({
  picks: PicksReducer,
  events: EventsReducer,
  points: PointsReducer,
  shop: ShopReducer,
  rewards: RewardsReducer
});

export default rootReducer;