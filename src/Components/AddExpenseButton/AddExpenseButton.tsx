import './AddExpenseButton.css'
import svgPlus from '../../assets/svg/plus_svg.svg'

interface AddExpenseButtonProps {
    handleShowAddExpensesModal: () => void
}



export const AddExpenseButton = ({ handleShowAddExpensesModal }: AddExpenseButtonProps) => {
    const handleOnClick = () => {
        handleShowAddExpensesModal()
    }

    return <>
        <button id="addExpensesButton" onClick={handleOnClick}>
            <img src={svgPlus} alt="Icono Plus" />
        </button>
    </>
}