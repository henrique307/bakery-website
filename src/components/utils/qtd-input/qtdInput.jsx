import "./qtdInput.scss";

export function InputComponent({qtd, increase, decrease}) {

    function increaseAction() {
        increase();
    }

    function decreaseAction() {
        if(qtd !== 0) decrease();
    }

    return (
        <div className="qtd-container">
            <div onClick={decreaseAction} className="decrease">-</div>
            <input className="qtd" readOnly value={qtd}/>
            <div onClick={increaseAction} className="increase">+</div>
        </div>
    )
}