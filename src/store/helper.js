

export const menuItemsData = {
    "1" :{
            name: 'Mediterranean  Salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bigBurger.png',
        },
    "2" :{
            name: 'Summer Asian Slaw',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bowl1.png',
        },
    "3" :{
            name: 'Burger',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bowl2.png',
        },
    "4" :{
            name: 'white sauce pasta',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bowl3.png',
        },
    "5" :{
            name: 'butterfly pasta',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/bowl4.png',
        },
    "6" :{
            name: 'tooty fruity bowl',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/fruits.png',
        },
    "7" :{
            name: 'granola cereal bowl',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/granola cereal bowl.png',
        },
    "8" :{
            name: 'palm bowl',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/kisspng-aa-na-tigela-smoothie-aa-palm-bowl-apple-j-goji-berry-5b306ffe7baf07.9992682215299010545066.png',
        },
    "9" :{
            name: 'tigela smoothie',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/kisspng-aa-na-tigela-smoothie-breakfast-juice-health-s-acai-bowl-5b11d2604db908.6695630315278946243184.png',
        },
    "10" :{
            name: 'breakfast cereal',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/kisspng-breakfast-cereal-pizza-muesli-meze-vegetarian-cuis-granola-5ac48d852aeb69.1891892315228307251758.png',
        },
    "11" :{
            name: 'cuisine of hawaii',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/kisspng-cuisine-of-hawaii-l-l-hawaiian-barbecue-shrimp-gam-frozen-chicken-5b1e62f3a9e035.2766282415287180676958.png',
        },
    "12" :{
            name: 'fried chicken',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/kisspng-fried-chicken-lemon-chicken-chicken-meat-fine-dining-chicken-meat-5a940a1b75aa22.821205431519651355482.png',
        },
    "13" :{
            name: 'greek salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/kisspng-greek-salad-fruit-salad-spinach-salad-muesli-vegetable-salad-5a96f429ce9af3.7299622115198423458463.png',
        },
    "14" :{
            name: 'hamburger',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/kisspng-hamburger-street-food-seafood-fast-food-delicious-food-5a75083cceaf41.2676743415176192608466.png',
        },
    "15" :{
            name: 'israeli salad',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/kisspng-israeli-salad-european-cuisine.png',
        },
    "16" :{
            name: 'Pizza Pasta',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/kisspng-italian-cuisine-pizza-pasta-food-plate-healthy-food-5abb864701e2b7.3892346415222390470077.png',
        },
    "17" :{
            name: 'Pizza',
            info: 'spicey with garlic and then deep fried to crispy perfection',
            price: Math.floor(Math.random() * 100),
            quantity: Math.floor(Math.random() * 10),
            img: '/images/pizza.png',
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