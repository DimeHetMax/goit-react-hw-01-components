import PropTypes from 'prop-types'; 
import {generateRandomColor} from 'components/utils/generateRandomColor';
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) =>{
    return(
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            <ul className={css.statList}>
            {stats.map((stat) => {
                const randomColor = generateRandomColor();
                return (
                    <li className={css.item} style={{ background: randomColor }} key={stat.id}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                );
                })}
        </ul>
        </section>
    )
}

Statistics.propTypes ={
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}