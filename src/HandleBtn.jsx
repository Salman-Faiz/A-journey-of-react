
export default function HandleBtn(){
  const handleClick = () =>{
    alert('hello');
  }
  const perameterPass =(num)=>{
alert('when pass parameters through onclick func.  ,,should use arrow function then call the function with parameters ')
  }
    return (
        <div>
            <h4>click button to add/reduce</h4>
            <button onClick={handleClick}>click1</button>
            <button onClick={()=>{alert('one line alert with anonymous function')}}>click2</button>
            <button onClick={()=>{perameterPass(5)}}>click3</button>
        </div>
    )

}