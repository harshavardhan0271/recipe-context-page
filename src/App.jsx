import RecipeList from "./components/RecipeList";

const recipes = [
  {
    id: 1,
    name: "Corba",
    type: "Side",
    image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
  },
  {
    id: 2,
    name: "Kumpir",
    type: "Side",
    image: "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
  },
  {
    "id": 3,
    "name": "Pancakes",
    "type": "Breakfast",
    "image": "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
  },
  {
    id: 4,
    name: "Dal fry",
    type: "Vegetarian",
    image: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
  },
  {
    id: 5,
    name: "Pizza",
    type: "Main",
    image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
  },
  
  {
    id: 6,
    name: "Momos",
    type: "Snack",
    image: "https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg",
  },
  {
    "id": 7,
    "name": "Burek",
    "type": "Snack",
    "image": "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg"
  },
  {
    "id": 8,
    "name": "Sushi",
    "type": "Japanese",
    "image": "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg"
  },
 
];

function App() {
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
