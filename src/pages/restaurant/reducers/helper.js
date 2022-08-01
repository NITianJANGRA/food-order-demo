

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