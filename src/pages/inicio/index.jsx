
import { LayOut } from "../../Components/LayOut";
//import { Card } from "../../Components/Card";
import { useContext} from "react";


import { ProductsDetails } from "../../Components/ProductsDetails";
import { ShoooingCartContext } from "../../contex";

export const Inicio =()=>{
  const context = useContext(ShoooingCartContext)
 


return(
<LayOut>
  <div id="inicio" className="flex items-center justify-center relative w-80 mb-4">
 <h1 className="font-medium text-xl">{context.ubicacion}</h1>
 </div>
 
  <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">  </div>
   
    <div className="container">
    
<section className="container--data">
<figure className="container--img">
      <img src="https://d12z45jzadnz51.cloudfront.net/wp-content/uploads/2020/09/Desarrollo-tiendas-online.jpg" alt="foto"  />
    </figure>
<h1 className="container--data-titulo">Introduccion</h1>
    <p className="container--data-parrafo" >
  ¡Bienvenidos a nuestra tienda electrónica, la primera creada con React ! Aquí, hemos combinado la emoción de la tecnología moderna con una experiencia de compra en línea excepcional. Permítannos presentarles un mundo nuevo de posibilidades tecnológicas.<br/>

Desde el momento en que ingresen a nuestra tienda, serán recibidos con una interfaz intuitiva y atractiva, diseñada con React para brindarles una navegación fluida y sin interrupciones. React, una biblioteca de JavaScript de código abierto ampliamente utilizada, nos ha permitido crear una experiencia de usuario excepcional, brindándoles la sensación de estar explorando una tienda física desde la comodidad de su hogar.

Nuestro objetivo principal es ofrecerles una amplia gama de productos electrónicos de última generación. Ya sea que estén buscando los últimos teléfonos inteligentes, computadoras de alta potencia, dispositivos de realidad virtual, sistemas de entretenimiento para el hogar o cualquier otro gadget emocionante, nuestra tienda electrónica está lista para satisfacer todas sus necesidades.

Con React, hemos logrado desarrollar un sistema de filtrado y búsqueda inteligente, lo que les permitirá encontrar fácilmente los productos que desean. Además, hemos incorporado funciones de personalización para adaptarnos a sus preferencias individuales y ofrecer recomendaciones basadas en sus intereses y comportamientos anteriores.
   </p>
</section>
<div className="segundaImagen">

</div>


    </div>
<footer>
  <p>Gracias por llegar hasta aqui!!!</p>
</footer>


 
  <ProductsDetails/>
</LayOut>
)
};