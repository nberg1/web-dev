import postContent from "../data/postContent.json";

const tuitsReducer = (state = postContent, action) => {
    switch (action.type) {
        case 'create-tuit':
            const newTuit = {
                postContent: action.postContent,
                _id: (new Date()).getTime() + '',
                User: "Elon Musk",
                userName: "elonmusk",
                time: "23h",
                title: "Amazing show about @Inspiration4x mission!",
                UserImage: "/images/elon_rocket.jpg",
                ArticleImage: "/images/countdown_inspiration4.jfif",
                ArticleTitle: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                ArticleSummary: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
                ArticleUrl: "netflix.com",
                Reply: "4.2K",
                ReTuit: "3.5K",
                Like: "27.5K"
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