function FooterMessage() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  if (!isOpen) {
    return (
      <p>
        We are happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    )
  }

  return (
    <div className="flex flex-col items-center gap-[2.4rem]">
      <p>
        We are currently open until {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="cursor-pointer bg-[#edc84b] px-[3.2rem] py-[1.4rem] text-[1.4rem] font-medium transition-all hover:bg-[#e9bb24]">
        Order
      </button>
    </div>
  )
}

export default FooterMessage
