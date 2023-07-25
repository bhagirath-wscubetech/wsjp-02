import React from 'react';

const Display = ({ users }) => {
    return (
        <div className="mx-auto py-4 max-w-[1200px] border">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Age
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            (user,index) => {
                                return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4">{user.id}</td>
                                    <td class="px-6 py-4">{user.name}</td>
                                    <td class="px-6 py-4">{user.email}</td>
                                    <td class="px-6 py-4">{user.age}</td>
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Display;
