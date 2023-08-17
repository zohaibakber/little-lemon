import Card from "@/components/Card";
import Salad from "./assets/Salad.jpg";
import LemonDessert from "./assets/lemon.jpg";
import Bruschetta from "./assets/bs.jpg";

const data = [
  {
    image: Salad,
    heading: "Greek salad",
    price: "12.99$",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: LemonDessert,
    heading: "Lemon Dessert",
    price: "5.99$",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
  {
    image: Bruschetta,
    heading: "Bruschetta",
    price: "5.99$",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. A Dish for the ages.",
  },
];

export default function Reviews() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className={"text-3xl font-semibold text-center py-10"}>
          This Weeks Special
        </h1>
      </div>
      <div>
        {data &&
          data.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              alt={item.heading}
              heading={item.heading}
              price={item.price}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
}
