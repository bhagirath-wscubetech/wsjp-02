const Cart = require('../models/Cart.js');
const User = require('../models/User.js');

class CartControler {
    addToCart(items, user_id) {
        return new Promise(
            (res, rej) => {
                const data = items.map(
                    (item) => {
                        return {
                            ...item,
                            user_id
                        }
                    }
                )
                data.forEach(
                    async (d) => {
                        const cart = await Cart.findOne({ user_id: d.user_id, pId: d.pId });
                        if (cart == null) {
                            new Cart(d).save();
                        } else {
                            Cart.updateOne(
                                { pId: d.pid, user_id: d.user_id },
                                { ...d }
                            ).then(
                                () => {
                                    console.log("qty updated in cart")
                                }
                            ).catch(
                                (err) => {
                                    console.log(err);
                                }
                            )
                        }
                    }
                );
                res({ msg: "added", status: 1 });
            }
        )
    }

    getCart(user_id) {
        return new Promise(
            async (res, rej) => {
                const cart = await Cart.find({ user_id: user_id });
                res(
                    {
                        cart,
                        msg: "Found",
                        status: 1
                    }
                )
            }
        )
    }
}


module.exports = CartControler;