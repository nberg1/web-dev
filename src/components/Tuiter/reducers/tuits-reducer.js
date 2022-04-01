import {UPDATE_TUIT, CREATE_TUIT, FIND_ALL_TUITS, DELETE_TUIT} from "../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FIND_ALL_TUITS':
            return action.tuits;
        case 'like-tuit':
            return state.map(postContent => {
                if(postContent._id === action.postContent._id) {
                    if(postContent.liked === true) {
                        postContent.liked = false;
                        postContent.Like--;
                    } else {
                        postContent.liked = true;
                        postContent.Like++;
                    }
                    return postContent;
                } else {
                    return postContent;
                }
            })
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);

        // case 'delete-tuit':
        //     return state.filter(postContent => postContent._id !== action.postContent._id);
        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);
        // case 'create-tuit':
        //     return [
        //         action.whatsHappening,
        //         ...state
        //     ];
        default:
            return state;
    }
}
    export default tuitsReducer;