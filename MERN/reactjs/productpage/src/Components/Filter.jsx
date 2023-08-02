import React from 'react';

const Filter = ({ categories, priceFilterHandler, categoryHandler, clearFilter, filterCat, to, from }) => {

    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    return (
        <div className='h-[400px] sticky top-[100px]'>
            <h3 className='text-center p-2 text-3xl font-bold'>Filter</h3>
            <div className='shadow p-2'>
                <div className='font-bold text-2xl text-center'>Categories</div>
                <ul className='p-2'>
                    {categories.map(
                        (cat, i) => {
                            return <li className={`cursor-pointer ${filterCat == cat ? 'text-blue-500' : ''}`} onClick={
                                () => {
                                    categoryHandler(cat)
                                }
                            } key={i}>{toTitleCase(cat)}</li>
                        }
                    )}
                </ul>
            </div>
            <div className='shadow p-2 my-2'>
                <div className='font-bold text-2xl text-center'>Price Range</div>
                <div className='flex gap-2 my-3 justify-center'>
                    <input type="number" className='shadow focus:outline-none p-1 w-[120px]' placeholder='From' value={from.value} onChange={
                        (e) => {
                            from.handler(e.target.value)
                        }
                    } max={to.value - 1} min={0} />
                    <span className='font-bold'>-</span>
                    <input value={to.value} type="number" className='shadow focus:outline-none p-1 w-[120px]' placeholder='To' onChange={
                        (e) => {
                            to.handler(e.target.value)
                        }
                    } min={parseInt(from.value) + 1} />
                </div>
                <button onClick={() => priceFilterHandler(true)} className='rounded text-white bg-blue-400 p-3 mr-2'>Apply</button>
                <button className='rounded text-white bg-red-400 p-3' onClick={clearFilter}>Clear</button>
            </div>
        </div>
    );
}

export default Filter;
