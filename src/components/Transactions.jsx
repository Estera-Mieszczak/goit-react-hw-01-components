import css from './Transactions.module.css'

export const TransactionHistory = ({ items }) => {
    const transactionItem = items.map(item => 
        <thead key={item.id}>
            <tr>
                <th className={css.transaction}>{item.type}</th>
                <th className={css.transaction}>{item.amount}</th>
                <th className={css.transaction}>{item.currency}</th>
            </tr>
        </thead>
    )
    return (
        <table className={css.transactionHistory}>
            {transactionItem}
        </table>
    )
}