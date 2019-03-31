import callApi from '../../util/apiCaller';

export const GET_PROFILE = 'GET_PROFILE';
export const CLEAR_CURRENT_PROFILE = 'CLEAR_CURRENT_PROFILE';

export function getCurrentProfile() {
  return (dispatch) => {
    return callApi('profile', 'get', undefined, true)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.profile,
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: {},
        })
      );
  };
}

export function clearCurrentProfile() {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
}
