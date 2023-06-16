import Square from './Square'
const Board=function(){
    return <>
        <div className="board">
            <div className="board-row">
            <Square className='square' value={0}/>
            <Square className='square' value={1}/>
            <Square className='square' value={2}/>
            </div>
            <div className="board-row">
            <Square className='square' value={3}/>
            <Square className='square' value={4}/>
            <Square className='square' value={5}/>
            </div>
            <div className="board-row">
            <Square className='square' value={6}/>
            <Square className='square' value={7}/>
            <Square className='square' value={8}/>
            </div>
        </div>
    </>
}
export default Board
//any code written in the curly braces is rendered as a valid javascript code
// in all other cases it will be rendered as the string 