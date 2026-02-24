import { useState } from "react"


export default function Header() {
    const [active, setActive] = useState(null)
    return (
        <div className=" fixed w-full bottom-0 bg-white flex justify-between px-8 py-3  ">
            <span onClick={()=>setActive('Home')} className={`${active === `Home` ? `brightness-0  scale-110` : `` }`}><img src="./img/Shop.svg" alt="Home" /></span>
            <span onClick={()=>setActive('like')} className={`${active === `like` ? `brightness-0  scale-110` : `` }`}><img src="./img/wishlist.svg" alt="like" /></span>
            <span onClick={()=>setActive('stor')} className={`${active === `stor` ? `brightness-0  scale-110` : `` }`}><img src="./img/Cart.svg" alt="stor" /></span>
            <span onClick={()=>setActive('profile')} className={`${active === `profile` ? `brightness-0  scale-110` : `` }`}><img src="./img/prof.svg" alt="profile" /></span>
        </div>
    )
}