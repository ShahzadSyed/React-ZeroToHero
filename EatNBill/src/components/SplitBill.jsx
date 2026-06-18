import { useState } from "react"

export default function SplitBill({selectedfriend, friends, setfriends}){

    const [billValue , setbillValue] = useState(0)
    const [yourExpense , setyourExpense] = useState(0)
    const [paidBY , setpaidBy] = useState('you')

    const billManagementHandler = () =>{
        const newfriendsList = friends.map((frnd) => {
            if(frnd.name == selectedfriend.name)
            {
                return{
                    ...frnd,
                    balance : paidBY == 'you' ? 
                    Number(frnd.balance) - (Number(billValue) - Number(yourExpense)) :
                    Number(frnd.balance) + Number(yourExpense)
                  
                }
            }
            return frnd
        })
        setfriends(newfriendsList)
    }

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
            <button style={{
    width: "100%", 
    padding: "12px", 
    backgroundColor: "#2563eb", 
    color: "#ffffff", 
    fontSize: "1.1rem", 
    fontWeight: "600",
    borderRadius: "8px",
    marginTop: "24px",
    cursor: "pointer",
    border: "none"
  }} onClick={billManagementHandler}>split</button>

        </div>
    )
}