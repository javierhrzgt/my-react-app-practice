const MyButton =({count,onClick}:{count:number; onClick:()=> void})=>{
    return (
        <button onClick={onClick}>
            Click {count}!
        </button>
    );
}

export default MyButton;