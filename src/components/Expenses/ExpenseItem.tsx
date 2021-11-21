import Card from "../UI/Card";
import RenderDate from "./RenderDate";

export interface ExpenseProps {
    title: string,
    amount: number,
    date: Date
}

const ExpenseItem = ({title, amount, date}:ExpenseProps): JSX.Element => {
	return (
		<Card theme="light" className="expense-item">
            <RenderDate date={date}/>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
