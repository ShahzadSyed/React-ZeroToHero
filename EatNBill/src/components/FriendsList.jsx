export default function FriendsList() {

const dummyFriends = [
    {
        name : "Ahmed",
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkliIuVgejvDwavQJbzUFo2z99ptt-UGB43w&s',
        balance : 0
    },
    {
        name : "Shahzad",
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nZ136jiwgQJ8Nm-aeU6Hj8QqFI7TsOY-mg&s',
        balance : 0
    },
    {
        name : "Raheel",
        image : 'https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg',
        balance : 0
    }
]

    return(
        <div>
            {
                dummyFriends?.map((df) => <Friends df={df} />)
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