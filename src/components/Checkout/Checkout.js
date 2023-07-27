import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Checkout.css';

import { getDoc, addDoc, updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../../services/config";

const Checkout = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [telephone, setTelephone] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [error, setError] = useState("")
    const [orderId, setOrderId] = useState("")

    const { cart, clearCart, total } = useContext(CartContext)

    const handleOnForm = (event) => {
        event.preventDefault()

        if (!name || !lastName || !telephone || !email || !emailConfirmation) {
            setError("Por favor completa todos los campos.");
            return;
        }

        if (email !== emailConfirmation) {
            setError("Los campos del email no coinciden, intenta nuevamente.")
            return;
        }

        const order = {
            products: cart.map(product => ({
                id: product.id,
                nombre: product.nombre,
                cantidad: product.quantity
            })),
            total: total,
            fecha: new Date(),
            name,
            lastName,
            telephone,
            email
        };

        Promise.all(
            order.products.map(async (productOrder) => {
                const productRef = doc(db, "productos", productOrder.id)
                const productDoc = await getDoc(productRef)
                const stockActual = productDoc.data().stock
                await updateDoc(productRef, { stock: stockActual - productOrder.quantity })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), order)
                    .then((docRef) => {
                        setOrderId(docRef.id)
                        clearCart()
                    })
                    .catch((error) => {
                        setError("Error al crear la orden", error)
                    });
            })
            .catch((error) => {
                setError("No se puede actualizar el stock", error)
            })

    }

    return (
        <div className="form__container">
            <h2>Checkout</h2>
            <form onSubmit={handleOnForm}>
                {
                    cart.map(product => (
                        <div key={product.id}>
                            <p>{product.quantity}x {product.nombre}</p>
                            <p>${product.precio} por unidad</p>
                        </div>
                    ))
                }
                <p>Total a pagar: ${total}</p>
                <hr />

                <div className="form__label">
                    <label for="Nombre"></label>
                    <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form__label">
                    <label for="Apellido"></label>
                    <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="form__label">
                    <label for="Teléfono"></label>
                    <input type="text" placeholder="Teléfono" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                </div>

                <div className="form__label">
                    <label for="Email"></label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form__label">
                    <label for="Confirma tu email"></label>
                    <input type="email" placeholder="Confirma tu email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>

                {error && <p className="text-danger">{error}</p>}

                <button type="submit">Finalizar compra</button>
            </form>

            {orderId && (<h3>¡Gracias por tu compra! Tu número de orden es {orderId}.</h3>)}
        </div>
    )
}

export default Checkout;