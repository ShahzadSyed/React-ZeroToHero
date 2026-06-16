import { useState } from "react"

export default function AddFriends({friends , setfriends}){

    const [showModal, setshowModal] = useState(false)

    return(
        <div>
            { !showModal ? (
                <button onClick={() => setshowModal(true)}>Add Friend </button>
            ) : <ModalComponent
             setshowModal={setshowModal}
             friends={friends}
             setfriends={setfriends}
              />}
        </div>

            )
}

const ModalComponent = ({setshowModal, friends , setfriends}) =>{

    const [friendName , setfriendName] = useState("")
    const [friendImg , setfriendImg] = useState("")

    const addFriendHandler = () =>{
        
        const list = [...friends]
        list.push(
            {
                name : friendName,
                image : friendImg,
                balance : 0
            }
        )
        setfriends(list)
    }


    return(
        <div>
            <div>
                <p>Friend Name</p>
                <input onChange={(e) => setfriendName(e.target.value)} type="text" name="" id=""  placeholder="name"/>
            </div>
            <div>
                <p>Friend Image</p>
                <input onChange={(e) => setfriendImg(e.target.value) } type="text" name="" id="" placeholder="image" />
            </div>
            <button onClick={addFriendHandler}>Add</button>
            <button onClick={() => setshowModal(false)}>Close</button>
        </div>
    )
}