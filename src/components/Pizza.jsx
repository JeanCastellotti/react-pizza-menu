function Pizza({ name, photoName, ingredients, price }) {
  return (
    <li className="flex gap-14">
      <img
        src={photoName}
        alt={name}
        className="aspect-square w-48 self-start"
      />
      <div className="flex flex-col gap-3 py-2 ">
        <h3 className="text-[2rem]">{name}</h3>
        <p className="text-[1.4rem] font-light italic">{ingredients}</p>
        <span className="block text-[1.6rem]">{price}</span>
      </div>
    </li>
  )
}

export default Pizza
