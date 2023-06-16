const Square=({value})=>{
 return(
        <><button type="button" onClick={(event)=>{
                console.log(event);
        }}className="square">{value}</button></>
        )
}
export default Square;