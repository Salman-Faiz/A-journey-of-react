export default function Singer({singer}) {
    console.log(singer)
    return (
        <div>
            <h4>name : {singer.name} :</h4>
            <h5>Age: {singer.age}</h5>
        </div>
    )
}