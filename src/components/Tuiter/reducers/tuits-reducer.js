import postContent from "../data/postContent.json";

const tuitsReducer = (state = postContent, action) => {
    switch (action.type) {
        //TODO
        case 'like-tuit':
            return state.map(postContent => {
                if(postContent._id === action.postContent._id) {
                    if(postContent.liked === true) {
                        postContent.liked = false;
                        postContent.likes--;
                    } else {
                        postContent.liked = true;
                        postContent.likes++;
                    }
                    return postContent;
                } else {
                    return postContent;
                }
            })
        case 'delete-tuit':
            return state.filter(postContent => postContent._id !== action.postContent._id);
        case 'create-tuit':
            const newTuit = {
                _id: "456",
                postContent: action.postContent,
                User: "WebDev",
                userName: "webdev",
                time: "23h",
                UserImage: "/images/nicole_berg_image.jpg",
                title: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
                Reply: "111",
                ReTuit: "222",
                verified: false,
                Like: "333"
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return postContent;
    }
}
    export default tuitsReducer;