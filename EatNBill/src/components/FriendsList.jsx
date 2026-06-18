export default function FriendsList({friends , setselectedfriend , selectedfriend}) {



    return(
        <div>
            {
                friends?.map((df) => <Friends df={df} selectedfriend={selectedfriend} setselectedfriend={setselectedfriend} />)
            }
        </div>
    )
}

// const Friends = ({df , setselectedfriend ,selectedfriend }) => {
//     return (<div style={{display:"flex", gap: "20px" , alignItems:"center" , marginBottom: "20px"}}>
//         <div style={{width : "50px", height : "50px", borderRadius : "50%", overflow: "hidden"}}>
//             <img width="100%" height="100%" src={df.image} alt="" />
//             </div>

//             <div>
//                 <p>{df.name}</p>
//                 {/* <p>{
//                     df.balance < 0 ?
//                      `you owe ${df.name} ${df.balance}PKR ` :
//                      `aap dengaye ${df.name} ko ${df.balance}PKR`
//                     }</p> */}
//                     <p>
//   {df.balance < 0 && (
//     <span style={{ color: "red" }}>
//       You owe {df.name} {Math.abs(df.balance)}PKR
//     </span>
//   )}
  
//   {df.balance > 0 && (
//     <span style={{ color: "green" }}>
//       {df.name} owes you {df.balance}PKR
//     </span>
//   )}
  
//   {df.balance === 0 && (
//     <span>
//       You and {df.name} are even
//     </span>
//   )}
// </p>
                
//             </div>
//             {
//                 df.name === selectedfriend?.name ? 
//                 <button onClick={() => setselectedfriend()}>Close</button> : 
//                 <button onClick={() => setselectedfriend(df)}>Select</button>

                

//             }
            
//     </div>)
// }
const Friends = ({ df, setselectedfriend, selectedfriend }) => {
    return (
        <div style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "20px" }}>
            
            {/* STYLING FIXED: Fixed syntax errors and added display parameters */}
            <div style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, display: "block" }}>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={df.image} alt="" />
            </div>

            <div style={{ flexGrow: 1 }}>
                <p style={{ margin: "0 0 4px 0", fontWeight: "600", color: "#ffffff" }}>{df.name}</p>
                <p style={{ margin: 0 }}>
                    {df.balance < 0 && (
                        <span style={{ color: "#f87171", fontWeight: "600" }}>
                            You owe {df.name} {Math.abs(df.balance)}PKR
                        </span>
                    )}
                    
                    {df.balance > 0 && (
                        <span style={{ color: "#4ade80", fontWeight: "600" }}>
                            {df.name} owes you {df.balance}PKR
                        </span>
                    )}
                    
                    {df.balance === 0 && (
                        <span style={{ color: "#94a3b8" }}>
                            You and {df.name} are even
                        </span>
                    )}
                </p>
            </div>

            {df.name === selectedfriend?.name ? (
                <button style={{ backgroundColor: "#475569", color: "#fff", padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "600" }} onClick={() => setselectedfriend()}>Close</button>
            ) : (
                <button style={{ backgroundColor: "#2563eb", color: "#fff", padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "600" }} onClick={() => setselectedfriend(df)}>Select</button>
            )}
            
        </div>
    )
}