export default function SingleUser({user}){
    // console.log(user);
    const {name,username,email} = user;
    return (
        <div style={{border:'1px solid aquamarine',
        padding:'15px',
        margin:'15px',
        borderRadius:'15px'
    }}>
        <h3>User Name : {username} </h3>
        <h3>Email : {email}</h3>
        <h3>name: {name}</h3>
    </div>
    )
}