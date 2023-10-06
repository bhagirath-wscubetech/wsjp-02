import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Reducers/Cart';
import { Link, useParams } from 'react-router-dom';
const Product = ({ name }) => {
    const dispatch = useDispatch();
    let { product, baseUrl } = useSelector(store => store.product);
    const { category } = useSelector(store => store.category);

    const { slug } = useParams();
    let catId = null;
    category.forEach(cat => {
        if (cat.slug == slug) {
            catId = cat._id
        }
    });

    if (catId != null) {
        product = product.filter(
            (prod) => {
                return prod.category == catId;
            }
        )
    }

    return (
        <div className="bg-white">

            <ul className='flex justify-center gap-5'>
                <li className={`${slug == undefined ? 'bg-blue-500 text-white' : ''} shadow p-2 cursor-pointer`}>
                    <Link to={"/"}>
                        All
                    </Link>
                </li>
                {
                    category.map(
                        (cat, index) => {
                            return (
                                <li key={index} className={`${cat.slug == slug ? 'bg-blue-500 text-white' : ''} shadow p-2 cursor-pointer`}>
                                    <Link to={"/" + cat.slug}>
                                        {cat.name} ({cat.product_count})
                                    </Link>
                                </li>
                            )
                        }
                    )
                }
            </ul>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {product.map((prod) => (
                        <div key={prod._id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={baseUrl + prod.image}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-xl text-gray-700">
                                        <a href={prod.slug}>
                                            <span aria-hidden="true" />
                                            {prod.name}
                                        </a>
                                    </h3>
                                </div>
                                <button onClick={() => dispatch(addToCart({ pId: prod._id }))}
                                    className="px-3 my-2 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                    Add to cart
                                </button>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">
                                        $ {prod.discounted}
                                    </p>
                                    <p className="line-through text-sm font-medium text-gray-900">
                                        $ {prod.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
