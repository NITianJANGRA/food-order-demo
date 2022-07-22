

export const menuItemsData = {
    "1" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "2" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "3" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "4" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "5" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "6" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "7" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "8" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "9" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "10" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "11" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "12" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "13" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "14" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "15" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "16" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "17" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
};


export const fetchData = () => new Promise( (resolve)=> setTimeout(()=>resolve(menuItemsData), 800)    )
export const orderNow = () => new Promise( (resolve,reject)=> setTimeout(()=>{
    const rand = Math.floor(Math.random() * 10)
    if(rand<=5){
        resolve(true)
    }else{
        reject(false)
    }
}, 500)    )