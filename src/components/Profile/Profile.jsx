import PropTypes from 'prop-types'; 

export const Profile = ({
    username, 
    tag, 
    location, 
    avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    stats
    })=>{
    return (
        <div className="profile">
            <div className="description">
                <img
                src={avatar}
                alt="User avatar"
                className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.vies}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.prototype = {
    username: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    stats: PropTypes.shape({
                followers: PropTypes.number.isRequired,
                vies: PropTypes.number.isRequired,
                likes: PropTypes.number.isRequired
            })
 }