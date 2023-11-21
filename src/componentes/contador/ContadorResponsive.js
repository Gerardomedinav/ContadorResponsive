
import React, { useState } from 'react';   
import { Box, Button, useMediaQuery } from '@chakra-ui/react'; 
import './ContadorResponsive.css'; 

const ContadorResponsive = () => { 
  const [contador, setContador] = useState(0); 
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)"); 

  const incrementarContador = () => { 
    if (contador < 20) { 
      setContador(contador + 1); 
    }
  };

  const decrementarContador = () => { 
    if (contador > 0) { 
      setContador(contador - 1);
    }
  };

  const mostrarTextoTope = contador === 0 || contador === 20;


  return (
    <Box className="contador" p={4}>   
      <h1>Contador: {contador}</h1>    
      {mostrarTextoTope && (           
        <p>{contador === 0 ? '¡El contador ha alcanzado el tope mínimo!' : '¡El contador ha alcanzado el tope máximo!'}</p>
      )}
      <Box className='botones' >  
        <Button
          colorScheme="blue"
          onClick={incrementarContador}
          mt={isLargerThan768 ? 4 : 2}
          mr={isLargerThan768 ? 4 : 0}
          isDisabled={contador >= 20}    
        >
          Incrementar
        </Button>
        <Button
          colorScheme="red"
          onClick={decrementarContador}
          mt={2}
          isDisabled={contador <= 0}  
        >
          Decrementar
        </Button>
      </Box>
    </Box>
  );
};

export default ContadorResponsive;

