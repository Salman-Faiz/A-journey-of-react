export default function Friend({friend}){
    const {name,email,username} =friend;
    return (
        <div style={{
            border:'1px dotted tomato',
            padding:'10px',
            margin:'10',
            borderRadius:'15px'
        }}>
            <h3>Name:{name}</h3>
            <h3>email:{email}</h3>
            <h3>UserName:{username}</h3>
        </div>
    )
}