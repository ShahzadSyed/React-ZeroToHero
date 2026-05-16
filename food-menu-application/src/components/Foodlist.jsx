export default function Foodlist(){
   const dummyData = [
  {
    Title: "Biryani",
    Image: "https://hamariweb.com/recipes/images/recipeimages/3464.jpg",
    paragraph: "bht hi umda biryani",
    quantity: 34
  },
  {
    Title: "Karahi",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgFR6oapduYvjZqgVK8s5VKaT0EMfQMsWZQ&s",
    paragraph: "spicy chicken karahi",
    quantity: 35
  },
  {
    Title: "Pulao",
    Image: "https://untoldrecipesbynosheen.com/wp-content/uploads/2021/04/kabuli-pulao-main-3.jpg",
    paragraph: "light aur tasty pulao",
    quantity: 6
  },
  {
    Title: "Nihari",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNboeupuKaxNBPAXC8JuBPWp3NFVmO5K9IAA&s",
    paragraph: "garam garam nihari",
    quantity: 4
  },
  {
    Title: "Haleem",
    Image: "https://static01.nyt.com/images/2025/03/24/multimedia/ZS-Haleem-plhg/ZS-Haleem-plhg-mediumSquareAt3X.jpg",
    paragraph: "mazedar haleem",
    quantity: 8
  },
  {
    Title: "Burger",
    Image: "https://hips.hearstapps.com/hmg-prod/images/chicken-burgers-index-667b185b5f528.jpg?crop=0.500xw:1.00xh;0.282xw,0&resize=1200:*",
    paragraph: "juicy beef burger",
    quantity: 10
  },
  {
    Title: "Pizza",
    Image: "https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800",
    paragraph: "cheesy pizza",
    quantity: 9
  },
  {
    Title: "Fries",
    Image: "https://hamariweb.com/recipes/images/recipeimages/3464.jpg",
    paragraph: "crispy french fries",
    quantity: 12
  },
  {
    Title: "Sandwich",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-v-yguhGWLf5pkTXUv4FD3NR0tsMH67Qrmg&s",
    paragraph: "fresh club sandwich",
    quantity: 6
  },
  {
    Title: "BBQ",
    Image: "https://cdn.shopify.com/s/files/1/0445/1365/6985/files/backyard-bbq-grilling-tips-850x600.jpg?v=1638486081",
    paragraph: "smoky bbq platter",
    quantity: 3
  }
];
  return (
    <ul id='FoodList'>
      {
        dummyData.map((foodItem, index) => {
          return (
            <li key={index}>
              <div id='ImageArea'>
                <img src={foodItem.Image} alt={foodItem.Title} />
              </div>

              <div className="card-content">
                <h4>{foodItem.Title}</h4>
                <p>{foodItem.paragraph}</p>

                <p className={`status ${foodItem.quantity === 0 ? 'soldout' : 'available'}`}>
                  {
                    foodItem.quantity === 0
                      ? 'Sold Out'
                      : `Available: ${foodItem.quantity}`
                  }
                </p>

                {
                  foodItem.quantity > 20 &&
                  <span className="offer">Buy 1 Get 1 Free</span>
                }
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}