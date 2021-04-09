import authReducer from '../../reducers/auth';

test('should add user id with login', () => {
  const uid = 'cdefg';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid });
});

test('should reset user id with logout', () => {
  const defaultStore = {
    uid: 'adejf'
  };
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer(defaultStore, action);
  expect(state).toEqual({});
});