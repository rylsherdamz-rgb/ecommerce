// import the types for type safety

interface CarouselProp {
  name: string
}

export default function Carousel({name}:  CarouselProp) {
  return <div className="w-full  text-black md:py-5 max-sm:py-5 md:h-[20vh]
    max-sm:overflow-y-auto md:overflow-x-auto
    max-sm:h-[50vh]
    max-sm:grid max-sm:grid-cols-2 md:flex max-sm:flex-col 
    max-sm:gap-y-2 md:gap-x-10
    md:flex-row  max-sm:
    max-sm:px-5 md:px-10 rounded-lg bg-green-200">
   {/* add the card here  */}
    <span className="font-bold text-black">{name}</span>

  </div>
}
