export default function FriendsList({friends}) {



    return(
        <div>
            {
                friends?.map((df) => <Friends df={df} />)
            }
        </div>
    )
}

const Friends = ({df}) => {
    return (<div style={{display:"flex", gap: "20px" , alignItems:"center" , marginBottom: "20px"}}>
        <div style={{width : "50px", height : "50px", borderRadius : "50%", overflow: "hidden"}}>
            <img width="100%" height="100%" src={df.image} alt="" />
            </div>

            <div>
                <p>{df.name}</p>
                <p>Balance :{df.balance}</p>
            </div>
            <button>Select</button>
    </div>)
}