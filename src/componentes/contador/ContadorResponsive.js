
import React, { useState } from 'react';   // Importa React y el hook useState
import { Box, Button, useMediaQuery } from '@chakra-ui/react'; // Importa los componentes Box, Button y useMediaQuery de Chakra UI
import './ContadorResponsive.css'; // Importa el archivo CSS para dar estilo al componente

const ContadorResponsive = () => { // Define el componente ContadorResponsive como una función
  const [contador, setContador] = useState(0); // Define el estado del contador y la función para actualizarlo, inicializado en cero
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)"); // Define un estado para verificar si la pantalla es más grande que 768px

  const incrementarContador = () => { // Define una función para incrementar el contador
    if (contador < 20) { // Si el contador es menor que 20
      setContador(contador + 1); // Incrementa el contador en uno
    }
  };

  const decrementarContador = () => { // Define una función para decrementar el contador
    if (contador > 0) { // Si el contador es mayor que cero
      setContador(contador - 1); // Decrementa el contador en uno
    }
  };

  const mostrarTextoTope = contador === 0 || contador === 20; // Define una variable booleana para verificar si el contador ha alcanzado los topes


  return (
    <Box className="contador" p={4}>   {/* Crea un componente Box con la clase "contador" y un padding de 4 */}
      <h1>Contador: {contador}</h1>    {/* Crea un encabezado con el texto "Contador: " y el valor del contador */}
      {mostrarTextoTope && (            // Si la variable mostrarTextoTope es verdadera, muestra un elemento p con un mensaje 
        <p>{contador === 0 ? '¡El contador ha alcanzado el tope mínimo!' : '¡El contador ha alcanzado el tope máximo!'}</p>
      )}
      <Box className='botones' >   {/* Crea otro componente Box con la clase "botones" */}
        <Button
          colorScheme="blue"
          onClick={incrementarContador}
          mt={isLargerThan768 ? 4 : 2}
          mr={isLargerThan768 ? 4 : 0}
          isDisabled={contador >= 20}    // Deshabilita el botón si el contador es mayor o igual a 20
        >
          Incrementar
        </Button>
        <Button
          colorScheme="red"
          onClick={decrementarContador}
          mt={2}
          isDisabled={contador <= 0}   // Deshabilita el botón si el contador es menor o igual a 0
        >
          Decrementar
        </Button>
      </Box>
    </Box>
  );
};

export default ContadorResponsive;

