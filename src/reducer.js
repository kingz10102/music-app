

// DataLayer slice
export const initialState = {
    user: null,
    playlists: [],
    //2:14
    token:    "BQB4xBEKz0fAwzZGnKOG6kO8GDJ4mAw84p1iqJEZGXPXG2gmT8u09q8CnL4AQbeb0qPti2xYuR6MVqG8F2wIT8QjTb5H2f7zMFtCEqzDxDVCUr-7yfjbq54fQBSaFl2WrOMndRs-VGiR0Vr0ZmO5DArCPbUlLa81",

    item: null,
    playing: false
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
        case "SET_TOKEN":
            return {
              ...state,
              token: action.token,
        };
      
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
    case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };
  
  export default reducer;