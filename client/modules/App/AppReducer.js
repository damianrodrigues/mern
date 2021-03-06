import { TOGGLE_ADD_POST, CLOSE_ADD_POST } from './AppActions';

const initialState = {
  showAddPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    case CLOSE_ADD_POST:
      return {
        showAddPost: false,
      };

    default:
      return state;
  }
};

export const getShowAddPost = state => state.app.showAddPost;

export default AppReducer;
