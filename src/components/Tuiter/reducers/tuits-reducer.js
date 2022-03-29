import postContent from "../data/postContent.json";

const tuitsReducer = (state = postContent, action) => {
    switch (action.type) {
        //TODO
        case 'like-tuit':
            return state.map(postContent => {
                if(postContent._id == action.postContent._id) {
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
        case 'delete-tuit':
            return state.filter(postContent => postContent._id !== action.postContent._id);
        case 'create-tuit':
            return [
                action.whatsHappening,
                ...state
            ];
        default:
            return postContent;
    }
}
    export default tuitsReducer;