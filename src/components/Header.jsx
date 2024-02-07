import logo from '../assets/logo.svg'
import ring from '../assets/ring.svg'
import shoppingCart from '../assets/shopping-cart.svg'
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg'
import { useContext, useState } from 'react';
import CartDetails from './movie/CartDetails';
import { MovieContex, ThemeContex } from '../contex/contex';



const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const handleCartShow = () => {
        setShowCart(true);
    }

    const { state } = useContext(MovieContex)
    const { showDark, setShowDark } = useContext(ThemeContex)



    return (

        <header>
            {
                showCart && <CartDetails handleCloseCart={() => setShowCart(false)} />

            }

            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"
                            onClick={() => setShowDark(!showDark)}>
                            <img src={showDark ? sun : moon} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"
                            onClick={handleCartShow}
                        >
                            <img src={shoppingCart} width="24" height="24" alt="" />
                            {state.cartData.length > 0 && <span className='absolute bottom-5 left-5 bg-[#12CF6F] px-2 rounded-full opacity-80 text-white '>{state.cartData.length}</span>}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;