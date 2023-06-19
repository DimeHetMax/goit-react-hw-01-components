import PropTypes from 'prop-types';
import {generateAlternateBoolean} from 'components/utils/generateBool'
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) =>{
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr className={css.transactionTr}>
                    <th className={css.transactionTh}>Type</th>
                    <th className={css.transactionTh}>Amount</th>
                    <th className={css.transactionTh}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id,type,amount,currency})=>{
                    const generateBool = generateAlternateBoolean()
                    return(
                        <tr key={id} className={generateBool ? css.background : ''}>
                            <td className={`${css.text} ${css.transactionTd}`}>{type}</td>
                            <td className={`${css.text} ${css.transactionTd}`}>{amount}</td>
                            <td className={`${css.text} ${css.transactionTd}`}>{currency}</td>
                        </tr>
                    )
                })}  
            </tbody>
        </table>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  };