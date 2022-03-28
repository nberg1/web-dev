import {useDispatch} from "react-redux";

const TuitStats = ({postContent}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', postContent});
    };
    return (
        <span onClick={likeTuit}>
            {
                postContent.liked &&
                <i className="fas fa-heart me-1" style={{color: 'red'}}></i>
            }
            {
                !postContent.liked &&
                <i className="far fa-heart me-1"></i>
            }
            {postContent.like}
        </span>
    );
}
export default TuitStats;