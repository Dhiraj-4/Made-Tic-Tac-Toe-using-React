import Icon from "../Icon/Icon";

function Card({ gameEnd, player, onPlay, index }) {
    let icon = <Icon/>
    if(player === 'X') {
        icon = <Icon name='cross'/>
    } else if (player === 'O') {
        icon = <Icon name='circle'/>
    }

    return (
        <div className="p-[1rem] border w-[120px] h-[120px] rounded-[10%] bg-yellow-400 flex justify-center items-center"
        onClick={() => !gameEnd && onPlay(index)}
        >
            {icon}
        </div>
    )
}

export default Card;