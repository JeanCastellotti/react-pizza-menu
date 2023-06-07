import Pizza from './Pizza'

const pizzas = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

function Menu() {
  return (
    <main className="flex flex-col items-center gap-16">
      <h2 className=" inline-block border-y-2 border-y-current py-4 text-[2.4rem] font-medium uppercase tracking-[3px]">
        Our Menu
      </h2>
      {!!pizzas.length && (
        <ul className="grid grid-cols-2 gap-[4.8rem]">
          {pizzas.map((pizza) => (
            <Pizza key={Math.random()} {...pizza} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default Menu
