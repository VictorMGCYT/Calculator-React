import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

function useCalculator(){

    const [text, setText] = useState('')
    
        function asignarValore(char: string) {
            setText(text + char)
        }
    
        useEffect(() => {
            const primerDato = text[0];
    
            if (primerDato === '*' || primerDato === '/') {
                Swal.fire({
                    title: "Primero ingresa un número",
                    icon: "warning",
                    draggable: true
                });
                setText('')
            }
            
        }, [text])
    
        function limpiarDatos() {
            setText('');
        }
    
        function calcular() {
            
            const expression = text;
            if (expression === '') {
                Swal.fire({
                    title: "Ingresa una expresión",
                    icon: "warning",
                    draggable: true
                });
            }
            else{
                
                const result = new Function('return ' + expression)();
                setText(result);
            }
    
        }

        return {text, asignarValore, limpiarDatos, calcular}

}

export default useCalculator;