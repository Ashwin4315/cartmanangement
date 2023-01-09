import styles from "./Products.module.css"
import {product} from "../data"
import { useDispatch,useSelector } from "react-redux";
import { add,removeItem } from "../features/cartslice";

function Products() {


const { cartItems } = useSelector((state) => state.cart);
const dispatch = useDispatch();
  




    return ( 
        <div className={styles.fullcontainer}>      
           <h1 className={styles.page}>Products</h1>

      
        <div className={styles.container}> 
          {product.map((item,index) => {
            return(
                <div key={index} className={styles.box}>
                    <img src={item.image}  alt={item.title} className={styles.image} />
                    <div className={styles.content}>
                    <p className={styles.rating}><span>rating :</span> {item.rating.rate}</p>
                    <p className={styles.price}> Price: ${item.price}</p>


                    {cartItems.some((p) => p.id === item.id) 
                    ? (
                       <button className={styles.btn} onClick={()=>{
                      
                        dispatch(removeItem(item.id))}
                        }>Remove</button>
            
          ) : (
            <button className={styles.btn} onClick={()=>{
                      
              dispatch(add(item))}
              }>Buy</button>
          )}
                    



                 
                      
                      </div>
                </div>
            );
          })}
        </div>
      </div>
     );
}

export default Products;