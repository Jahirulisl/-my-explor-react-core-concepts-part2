export default function Friend({friend}){
    console.log(friend)
    const {name,email,username} = friend;
    return (
        <div className="box">
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
            <p> username:{username}</p>
        </div>
    )

}