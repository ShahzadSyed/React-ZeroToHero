import { useState } from "react"

export default function SplitBill({selectedfriend}){

    const [billValue , setbillValue] = useState(0)
    const [yourExpense , setyourExpense] = useState(0)
    const [paidBY , setpaidBy] = useState('')

    return(
        <div>
            <h1>Split a bill with {selectedfriend.name}</h1>
            <p>Bill Value</p>
            <input type="text" name="" id="" onChange={(e) => setbillValue(e.target.value) } />

            <p>Your Expense</p>
            <input type="text" name="" id="" onChange={(e) =>  setyourExpense(e.target.value)} />

            <p>{selectedfriend.name}'s Expense</p>
            <input type="text" name="" id="" value={billValue - yourExpense}/>

            <p>Who is paying the bill ?</p>
            <select name="" id="" onChange={(e) => setpaidBy(e.target.value)}>
                <option value="you">you</option>
                <option value={selectedfriend.name}>{selectedfriend.name}</option>
            </select>
            <button onClick={() => console.log({
                billValue,
                yourExpense,
                paidBY,
            })}>split</button>

        </div>
    )
}