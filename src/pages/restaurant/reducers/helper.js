

export const menuItemsData = [
    {       
        id : 1,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 2,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 3,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 4,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 5,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 6,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 7,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 8,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 9,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 10,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 11,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 12,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 13,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 14,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 15,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 16,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
    {       
        id : 17,
        name: 'Mediterranean  Salad',
        info: 'spicey with garlic and then deep fried to crispy perfection',
        price: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 10),
        img: '/images/bigBurger.png',
    },
]


const fetchDataPromise = (resolve)=> setTimeout(()=>resolve(menuItemsData), 800)
const promiseRandomAction = (resolve,reject)=>{
    const rand = Math.floor(Math.random() * 10)
    if(rand<=5){
        resolve(true)
    }else{
        reject(false)
    }
}
const orderNowPromise  = (resolve,reject)=> setTimeout(()=>promiseRandomAction(resolve,reject) , 500)    

export const fetchData = () => new Promise(fetchDataPromise)
export const orderNow = () => new Promise(orderNowPromise)