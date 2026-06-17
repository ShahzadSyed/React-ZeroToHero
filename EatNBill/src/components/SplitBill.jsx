export default function SplitBill({selectedfriend}){
    return(
        <div>
            <h1>Split a bill with {selectedfriend.name}</h1>
            <p>Bill Value</p>
            <input type="text" name="" id="" />
            <p>Your Expense</p>
            <input type="text" name="" id="" />
            <p>{selectedfriend.name}'s Expense</p>
            <input type="text" name="" id="" />
            <p>Who is paying the bill ?</p>
            <select name="" id="">
                <option value="you">you</option>
                <option value={selectedfriend.name}>{selectedfriend.name}</option>
            </select>
            <button>split</button>

        </div>
    )
}