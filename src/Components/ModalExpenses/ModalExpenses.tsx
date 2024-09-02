import React from 'react'
import './ModalExpenses.css'
import { expenseType } from '../../App'

interface ModalExpensesProps {
    handleExpenses: (newExpense: expenseType) => void,
    handleShowAddExpensesModal: () => void,
    showModal: boolean
}

export const ModalExpenses = ({ handleExpenses, handleShowAddExpensesModal, showModal }: ModalExpensesProps) => {
    const handleOnClick = () => {

    }

    const handleShowModal = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        handleShowAddExpensesModal()
    }

    if (showModal) {
        return <>
            <div id="expenseModal" onClick={handleShowModal}>
                <div>
                    <form action="">
                        <div className='inputContainer'>
                            <h3>New Expense</h3>
                            <div className='inputsCont'>
                                <label htmlFor="expenseName">Expense Name</label>
                                <input type="text" name="expenseName" />
                            </div>
                            <div className='inputsCont'>
                                <label htmlFor="expenseAmount">Expense Name</label>
                                <input type="number" name="expenseAmount" />
                            </div>
                            <div className='inputsCont'>
                                <label htmlFor="expenseAmount">Expense Name</label>
                                <select name="expenseCategory" id="expenseCategory">
                                    <option value="">-- Select --</option>
                                    <option value="Savings">Savings</option>
                                    <option value="Food">Food</option>
                                    <option value="House">House</option>
                                    <option value="Miscellaneous Expenses">Miscellaneous Expenses</option>
                                    <option value="Leisure">Leisure</option>
                                    <option value="Health">Health</option>
                                    <option value="Subscriptions">Subscriptions</option>
                                </select>
                            </div>
                            <div className='inputsCont'>
                                <label htmlFor="expenseAmount">Expense Name</label>
                                <input type="date" name="expenseDate" id="expenseDate" />
                            </div>
                        </div>

                        <button>Register Expense</button>
                    </form>
                </div>

            </div>
        </>
    } else {
        return <></>
    }


}