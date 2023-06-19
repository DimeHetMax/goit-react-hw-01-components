import PropTypes from 'prop-types'; 
import css from './Profile.module.css';

export const Profile = ({
    username, 
    tag, 
    location, 
    avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    stats
    })=>{
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt={username}
                className={css.avatar}
                />
                <p className={`${css.text} ${css.name}`}>{username}</p>
                <p className={`${css.text} ${css.tag}`}>@{tag}</p>
                <p className={`${css.text} ${css.location}`}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={`${css.statsListItem} ${css.left}`}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.statsListItem}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{stats.views}</span>
                </li>
                <li className={`${css.statsListItem} ${css.right}`}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.protoType = {
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