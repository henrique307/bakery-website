import { discountHandler, priceHandler } from "./utils";
import { useState } from "react";
import { Carrinho, Coracao } from "../../../../../icons";
import { useDispatch, useSelector } from "react-redux";
import { addItem, favToggle } from "../../../../utils/slice/slices";
import { QuickViewComponent } from "./components/quickView/quickView";
import "./products.scss";
import "animate.css";

export function ProductsComponent() {
  const products = [
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/products/18_85e0afa9-9ef6-4a13-ba4c-33a9f5d9de72.jpg?v=1593664281",
      onCart: 0,
      fav: 0,
      id: "price_1P7hbyCaFt3tFYFT5zaoGGva",
      description:
        "Brigadeiro Delicadamente redondo, o brigadeiro tradicional é uma explosão de sabor em cada mordida. Coberto com granulados de chocolate ou cacau em pó, sua textura é macia e cremosa, derretendo na boca como uma nuvem de chocolate. Feito com uma mistura perfeita de leite condensado, cacau em pó e manteiga, esse doce brasileiro é uma verdadeira tentação para os amantes de chocolate. Com uma casquinha crocante por fora e um centro suave e indulgente, o brigadeiro é uma obra-prima da confeitaria que conquista paladares ao redor do mundo.",
      name: "Vanila Cupcakes",
      price: 20.9,
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/products/2_be5a2d71-35eb-4a9d-b3a3-7ef43f26a510.jpg?v=1593664409",
      onCart: 0,
      fav: 0,
      id: "price_1P7hcnCaFt3tFYFT555WWzRE",
      description:
        "Pequenas bolinhas de puro prazer, os beijinhos de coco são uma explosão tropical em cada mordida. Feitos com uma base de leite condensado e coco ralado, esses docinhos são delicadamente envolvidos em açúcar cristal ou coco ralado, proporcionando uma textura crocante por fora e macia por dentro. Seu sabor é uma harmonia entre o doce do leite condensado e o aroma fresco do coco, transportando os sentidos para uma praia paradisíaca em cada degustação. Uma verdadeira delícia para os apreciadores de sobremesas exóticas.",
      name: "Delicious Cupcake V",
      price: 30.0,
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/products/30_a0923cdb-43e5-4eb6-b729-fe6f471e29d1.jpg?v=1593664581",
      onCart: 0,
      fav: 0,
      id: "price_1P7heZCaFt3tFYFTzR8qe0pk",
      description:
        "Elegante e sofisticado, o camafeu de nozes é uma joia da confeitaria. Pequenas esferas de doce de leite ou amêndoa são delicadamente envoltas em uma camada fina de fondant e decoradas com uma metade de noz. Sua textura suave e cremosa contrasta com o crocante da noz, criando uma experiência sensorial única a cada mordida. O sabor do doce de leite ou amêndoa é acentuado pela presença sutil da noz, criando uma sinfonia de sabores que agrada até os paladares mais exigentes.",
      name: "Cake",
      discount: 34,
      coupon: "gtjKOf5C",
      price: 35.5,
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/products/4.jpg?v=1593664885",
      onCart: 0,
      fav: 0,
      id: "price_1P7ho5CaFt3tFYFTK3dsFJ5H",
      description:
        "Vibrante e divertido, o bicho de pé é um doce que desperta memórias de infância em cada colherada. Feito com leite condensado e gelatina sabor morango, sua cor rosa vibrante é um convite irresistível ao deleite. Sua textura é macia e cremosa, desmanchando suavemente na boca e deixando um sabor doce e frutado que conquista os corações dos mais jovens e dos mais velhos. Com uma cobertura de açúcar cristal ou granulado colorido, esse doce brasileiro é uma verdadeira festa para os sentidos.",
      name: "Cheese Classic Burger",
      price: 20.0,
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/products/26.jpg?v=1593663314",
      onCart: 0,
      fav: 0,
      id: "price_1P7hocCaFt3tFYFTxLYoRNfA",
      description:
        "Luxuosa e indulgente, a trufa de chocolate amargo é uma explosão de sofisticação em cada mordida. Feita com uma ganache de chocolate amargo e creme de leite fresco, sua textura é cremosa e sedosa, derretendo suavemente na língua e deixando um sabor intenso e aveludado que envolve os sentidos. Coberta com cacau em pó ou raspas de chocolate, cada trufa é uma obra de arte culinária que combina o amargor do chocolate com a doçura sutil do creme de leite, criando uma experiência gastronômica inigualável.",
      name: "Chocolate Mud Cake",
      price: 10.98,
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/products/29.jpg?v=1593663272",
      onCart: 0,
      fav: 0,
      id: "price_1P7hpBCaFt3tFYFT0gMPW0HA",
      description:
        "Rústica e reconfortante, a palha italiana é uma explosão de texturas e sabores que remetem às tradições caseiras da culinária italiana. Feita com biscoitos tipo maisena triturados e brigadeiro, sua textura é uma combinação perfeita entre o crocante dos biscoitos e a cremosidade do brigadeiro, criando uma experiência sensorial única a cada mordida. Decorada com açúcar de confeiteiro ou cacau em pó, essa iguaria é uma verdadeira tentação para os amantes de sobremesas caseiras.",
      name: "Chocolate Mud Cake Affiliate",
      price: 30.0,
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/products/them3_049d90fe-b255-45f8-bd8d-dcda8cf3092c.jpg?v=1593767010",
      onCart: 0,
      fav: 0,
      id: "price_1P7hpXCaFt3tFYFTL7KCOwRd",
      description:
        "Encantador e irresistível, o olho de sogra é uma pérola da doçaria brasileira. Feito com ameixas secas recheadas com doce de leite e envoltas em uma fina camada de coco ralado ou açúcar cristal, sua textura é macia e suculenta, com um contraste sutil entre o dulçor do doce de leite e o sabor característico da ameixa. Cada mordida é uma explosão de sabores que envolve os sentidos e transporta os apreciadores para uma jornada de prazer gastronômico.",
      name: "Sponge Cake Boosted Sale",
      price: 20.1,
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/products/23_ebeb1e3f-bb35-4f6a-a400-17fab5fd92ac.jpg?v=1593663724",
      onCart: 0,
      fav: 0,
      id: "price_1P7hprCaFt3tFYFTUIm2Xqgs",
      description:
        "Clássico e reconfortante, o pastel de nata é uma joia da culinária portuguesa. Sua casquinha crocante e dourada esconde um recheio cremoso e delicadamente aromatizado com baunilha e canela. Cada mordida é uma viagem à Lisboa, com seus becos pitorescos e cafés acolhedores. Servido polvilhado com açúcar de confeiteiro e canela em pó, esse doce é uma verdadeira ode à tradição e ao sabor autêntico de Portugal.",
      name: "Chocolate Mud Cupcakes",
      price: 15.0,
    },
  ];

  const carrinho = useSelector((state) => state.carrinho);
  const favorites = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  function openDetails(product, index) {
    setQuickView({ ...product, index });
  }

  function isIncluded(item, list) {
    const itIs = list.find((it) => it.id === item.id);

    if (!itIs) return 0;

    return itIs;
  }

  const [quickView, setQuickView] = useState(0);

  return (
    <section className="products" id="products">
      <h1 className="section-title text-4xl">Our Products</h1>
      <div className="products-container">
        {products.map((product, index) => {
          return (
            <div className={`product ${index}`} key={index}>
              <div className="image-container">
                <div className="icons">
                  <Carrinho
                    qtd={isIncluded(product, carrinho.items).qtd}
                    onClick={() => dispatch(addItem({ ...product, qtd: 1 }))}
                  />
                  <Coracao
                    active={!!isIncluded(product, favorites.list)}
                    onClick={() => dispatch(favToggle(product))}
                  />
                </div>
                {product.discount ? (
                  <div className="text-xs discount-tag">
                    -{product.discount}%
                  </div>
                ) : (
                  ""
                )}
                <img
                  onClick={() => openDetails(product, index)}
                  className="image"
                  src={product.url}
                  alt="product"
                />
              </div>
              <div className="product-details">
                <span
                  className="name text-base"
                  onClick={() => openDetails(product, index)}
                >
                  {product.name}
                </span>
                {product.discount ? (
                  <>
                    <span className="price text-sm">
                      {discountHandler(product)}
                    </span>
                    <span className="price text-sm discount">
                      {priceHandler(product.price)}
                    </span>
                  </>
                ) : (
                  <span className="price text-sm">
                    {priceHandler(product.price)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <QuickViewComponent
        display={!!quickView}
        product={quickView}
        productList={products}
        setQuickView={setQuickView}
      />
    </section>
  );
}
