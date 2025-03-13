
function CartPopUp({ isOpened}) {
    if (isOpened) {
        return (
            <section className="cartPopUp">
                <div className="cardContainer">

                </div>
                <div className="payContainer">

                </div>
            </section>
            )
    } else {
        return(null)
    }

}

export default CartPopUp