import React from 'react';

const Add = ({ handler }) => {

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const data = {
            name: event.target.username.value,
            email: event.target.useremail.value,
            age: event.target.userage.value,
        }
        handler(data);

        event.target.reset();

    }

    return (
        <div className='p-2'>
            <div className="w-full">
                <form className="bg-white px-8 pt-6 pb-8 mb-4" onSubmit={formSubmitHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='username' type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Email
                        </label>
                        <input placeholder='Useremail' className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='useremail' type="email" />
                        <p className="text-red-500 text-xs italic"></p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Age
                        </label>
                        <input placeholder='User Age' className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='userage' type="number" />
                        <p className="text-red-500 text-xs italic"></p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Add;
