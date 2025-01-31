;
function Calculator({ text, asignarValore, limpiarDatos, calcular}: {text: string,asignarValore: any, limpiarDatos: any, calcular: any}) {
  

    return (
        <>
            <div className='mt-40 w-[400px] mr-auto ml-auto border-2 p-4 rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.7)]'>

                <div className='mb-4 ml-auto mr-auto w-[350px] text-right'>
                    <input
                    className='w-full text-right border p-2 rounded-[10px]'
                    type="text" placeholder='Operación' value={text}
                    disabled/>
                </div>

                <div className='container 
                ml-auto mr-auto w-[350px] 
                grid grid-cols-4 gap-4 text-center 
                grid-rows-5'>
                    <button onClick={() => asignarValore('+')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>+</button>
                    <button onClick={() => asignarValore('-')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>-</button>
                    <button onClick={() => asignarValore('*')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>*</button>
                    <button onClick={() => asignarValore('/')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>/</button>
                    <button onClick={() => asignarValore('7')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>7</button>
                    <button onClick={() => asignarValore('8')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>8</button>
                    <button onClick={() => asignarValore('9')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>9</button>
                    <button onClick={calcular} className='rounded-[10px] row-span-4 col-span-1 bg-blue-300 hover:bg-blue-600 cursor-pointer'>=</button>
                    <button onClick={() => asignarValore('4')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>4</button>
                    <button onClick={() => asignarValore('5')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>5</button>
                    <button onClick={() => asignarValore('6')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>6</button>
                    <button onClick={() => asignarValore('1')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>1</button>
                    <button onClick={() => asignarValore('2')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>2</button>
                    <button onClick={() => asignarValore('3')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>3</button>
                    <button onClick={() => asignarValore('0')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>0</button>
                    <button onClick={() => asignarValore('.')} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>.</button>
                    <button onClick={() => limpiarDatos()} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>C</button>
                </div>

            </div>
        </>
    )
}

export default Calculator;