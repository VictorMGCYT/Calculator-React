
const generalClass = 'rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'
const classResult = 'rounded-[10px] row-span-4 col-span-1 bg-blue-300 hover:bg-blue-600 cursor-pointer'

const botones = [{
    id: 1,
    value: '+',
    generalClass: generalClass
},
{
    id: 2,
    value: '-',
    generalClass: generalClass
},
{
    id: 3,
    value: '*',
    generalClass: generalClass
},
{
    id: 4,
    value: '/',
    generalClass: generalClass
},
{
    id: 5,
    value: '7',
    generalClass: generalClass
},
{
    id: 6,
    value: '8',
    generalClass: generalClass
},
{
    id: 7,
    value: '9',
    generalClass: generalClass
},
{
    id: 8,
    value: '=',
    generalClass: classResult
},
{
    id: 9,
    value: '4',
    generalClass: generalClass
},
{
    id: 10,
    value: '5',
    generalClass: generalClass
},
{
    id: 11,
    value: '6',
    generalClass: generalClass
},
{
    id: 12,
    value: '1',
    generalClass: generalClass
},
{
    id: 13,
    value: '2',
    generalClass: generalClass
},
{
    id: 14,
    value: '3',
    generalClass: generalClass
},
{
    id: 15,
    value: '0',
    generalClass: generalClass
},
{
    id: 16,
    value: '.',
    generalClass: generalClass
}]


function Calculator({ text, asignarValore, limpiarDatos, calcular}: {text: string,asignarValore: any, limpiarDatos: any, calcular: any}) {
  

    return (
        <>
            <div className='w-[350px] mt-30 md:w-[400px] mr-auto ml-auto border-2 p-4 rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.7)]'>

                <div className='w-[300px] mb-4 md:w-[350px] ml-auto mr-auto  text-right'>
                    <input
                    className='w-full text-right border p-2 rounded-[10px]'
                    type="text" placeholder='Operación' value={text}
                    disabled/>
                </div>

                <div className='container w-[300px] ml-auto mr-auto
                md:w-[350px] 
                grid grid-cols-4 gap-4 text-center 
                grid-rows-5'>

                    {botones.map((boton) => {

                        if(boton.value === '='){
                            return (
                                <button key={boton.id} onClick={calcular} className={boton.generalClass}>{boton.value}</button>
                            )
                        }
                        else{
                            return (
                                <button key={boton.id} onClick={() => asignarValore(boton.value)} className={boton.generalClass}>{boton.value}</button>
                            )
                        }
                    })}

                    <button onClick={() => limpiarDatos()} className='rounded-[10px] hover:bg-gray-400 bg-gray-200 pt-2 pb-2 cursor-pointer'>C</button>
                </div>

            </div>
        </>
    )
}

export default Calculator;