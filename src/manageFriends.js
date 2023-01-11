export function manageFriends(state = {friends: []}, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return {...state, friends: [...state.friends,action.payload]};
      case "friends/remove":
        return {...state, friends: state.friends.filter(function (friend) {
            return friend.id !== action.payload;
          })};
          default:
            return state;
  } 
}
