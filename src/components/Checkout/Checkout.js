import { useState, useContext } from "react";
import { Button } from 'react-bootstrap';
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
        <div className="form__container my-0 mx-auto text-center">
            <h2>Checkout</h2>

            <div className="ticket my-5 mx-auto">
                <div class="ticket__checkout">
                    <header class="ticket__wrapper">
                        <div class="ticket__header">
                            Ticket de compra ⚡
                        </div>
                    </header>
                    <div class="ticket__body">
                        {
                            cart.map(product => (
                                <section class="ticket__section" key={product.id}>
                                    <h3>{product.nombre}</h3>
                                    <p>Cantidad: {product.quantity}</p>
                                    <p>${product.precio} por unidad</p>
                                </section>
                            ))
                        }
                    </div>
                    <div class="ticket__footer">
                        <span>Total a pagar:</span>
                        <span>${total}</span>
                    </div>
                </div>
            </div>

            <hr />

            <h4>Completa los siguientes campos para finalizar tu compra</h4>

            <form onSubmit={handleOnForm}>
                <div className="my-4 mx-auto">
                    <label for="Nombre"></label>
                    <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="my-4 mx-auto">
                    <label for="Apellido"></label>
                    <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="my-4 mx-auto">
                    <label for="Teléfono"></label>
                    <input type="text" placeholder="Teléfono" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                </div>

                <div className="my-4 mx-auto">
                    <label for="Email"></label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="my-4 mx-auto">
                    <label for="Confirma tu email"></label>
                    <input type="email" placeholder="Confirma tu email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>

                {error && <p className="text-danger">{error}</p>}

                <Button type="submit" className="form__button btn btn-light btn-outline-dark btn-lg py-3 px-4">Finalizar compra</Button>
            </form>

            {orderId && (<h3>¡Gracias por tu compra! Tu número de orden es {orderId}</h3>)}
        </div>
    )
}

export default Checkout;