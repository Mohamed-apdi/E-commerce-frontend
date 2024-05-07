import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
function ProductCard(props) {
  let location = useLocation();
  const { grid } = props;
  return (
    <>
    <div className={`${location.pathname === "/store" ? `grid-cols-${grid}` : " col-span-1"}`}>
    
        <Link to="/product/:id" className="product-card relative">
          <div className="wishlist-icon absolute">
            <Link><img src="/public/images/wish.svg" className='w-8 h-8 border-transparent  hover:bg-[#febd69]/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none' alt="wishlist" /></Link>
          </div>
            <div className="product-image">
                <img className=" max-w-full h-auto" src="/public/images/tab.jpg" alt="" />
                <img className=" max-w-full h-auto" src="/public/images/tab3.jpg" alt="" />
            </div>
            <div className="product-detailes">
                <h5>Havels</h5>
                <h4 className=" text-sm font-bold text-[#131921] mb-2">Hornor T17.0.1 GB RAM 8 GB ROM...</h4>
                <ReactStars
                  count={5}
                  size={24}
                  value="1"
                  edit="false"
                  activeColor="#ffd700"
                />
                <p className={`leading-7 my-1 mr-3 ${grid === 1 ? "block":"hidden"}`}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus perspiciatis dicta odit quam.
                </p>
                <p className=" text-sm text-[#1c1c1b] font-bold">$100.00</p>
            </div>
            <div className="action-bar absolute top-[14%] right-[-25px]">
             <div className="flex flex-col  icons">
             <Link>
              <img className="w-8 h-8 border-transparent hover:bg-[#febd69]/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none" src="/public/images/prodcompare.svg" alt="compare" />
              </Link>

              <Link>
              <img className="w-8 h-8 border-transparent hover:bg-[#febd69]/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none" src="/public/images/view.svg" alt="view" />
              </Link>
              
              <Link>
              <img className="w-8 h-8 border-transparent hover:bg-[#febd69]/80 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none" src="/public/images/add-cart.svg" alt="add cart" />
              </Link>
             </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard