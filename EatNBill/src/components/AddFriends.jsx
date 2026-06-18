// import { useState } from "react"

// export default function AddFriends({friends , setfriends}){

//     const [showModal, setshowModal] = useState(false)

//     return(
//         <div>
//             { !showModal ? (
//                 <button onClick={() => setshowModal(true)}>Add Friend </button>
//             ) : <ModalComponent
//              setshowModal={setshowModal}
//              friends={friends}
//              setfriends={setfriends}
//               />}
//         </div>

//             )
// }

// const ModalComponent = ({setshowModal, friends , setfriends}) =>{

//     const [friendName , setfriendName] = useState("")
//     const [friendImg , setfriendImg] = useState("")

//     const addFriendHandler = () =>{
        
//         const list = [...friends]
//         list.push(
//             {
//                 name : friendName,
//                 image : friendImg,
//                 balance : 0
//             }
//         )
//         setfriends(list)
//     }


//     return(
//         <div>
//             <div>
//                 <p>Friend Name</p>
//                 <input onChange={(e) => setfriendName(e.target.value)} type="text" name="" id=""  placeholder="name"/>
//             </div>
//             <div>
//                 <p>Friend Image</p>
//                 <input onChange={(e) => setfriendImg(e.target.value) } type="text" name="" id="" placeholder="image" />
//             </div>
//             <button onClick={addFriendHandler}>Add</button>
//             <button onClick={() => setshowModal(false)}>Close</button>
//         </div>
//     )
// }
import { useState } from "react"

export default function AddFriends({ friends, setfriends }) {
    const [showModal, setshowModal] = useState(false)

    return (
        <div style={{ marginTop: "20px" }}>
            {!showModal ? (
                <button 
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: "600",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
                    }}
                    onClick={() => setshowModal(true)}
                >
                    Add Friend
                </button>
            ) : (
                <ModalComponent
                    setshowModal={setshowModal}
                    friends={friends}
                    setfriends={setfriends}
                />
            )}
        </div>
    )
}

const ModalComponent = ({ setshowModal, friends, setfriends }) => {
    const [friendName, setfriendName] = useState("")
    const [friendImg, setfriendImg] = useState("")

    const addFriendHandler = () => {
        if (!friendName || !friendImg) return alert("Please fill all fields!");

        const list = [...friends]
        list.push({
            name: friendName,
            image: friendImg,
            balance: 0
        })
        setfriends(list)
        // Form submit hone ke baad fields clear aur close
        setfriendName("")
        setfriendImg("")
        setshowModal(false)
    }

    return (
        <div style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #334155",
            marginTop: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
        }}>
            <div style={{ marginBottom: "12px" }}>
                <p style={{ color: "#cbd5e1", margin: "0 0 6px 0", fontSize: "0.95rem", fontWeight: "500" }}>Friend Name</p>
                <input 
                    onChange={(e) => setfriendName(e.target.value)} 
                    type="text" 
                    value={friendName}
                    placeholder="e.g. Ali"
                    style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #475569",
                        backgroundColor: "#0f172a",
                        color: "#ffffff",
                        fontSize: "1rem",
                        boxSizing: "border-box"
                    }}
                />
            </div>
            
            <div style={{ marginBottom: "16px" }}>
                <p style={{ color: "#cbd5e1", margin: "0 0 6px 0", fontSize: "0.95rem", fontWeight: "500" }}>Friend Image URL</p>
                <input 
                    onChange={(e) => setfriendImg(e.target.value)} 
                    type="text" 
                    value={friendImg}
                    placeholder="https://example.com/image.jpg"
                    style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #475569",
                        backgroundColor: "#0f172a",
                        color: "#ffffff",
                        fontSize: "1rem",
                        boxSizing: "border-box"
                    }}
                />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
                <button 
                    onClick={addFriendHandler}
                    style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "#2563eb",
                        color: "white",
                        fontWeight: "600",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Add
                </button>
                <button 
                    onClick={() => setshowModal(false)}
                    style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "#475569",
                        color: "white",
                        fontWeight: "600",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    )
}