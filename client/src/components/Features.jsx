import { ShieldCheck, Heart, MessageCircleHeart } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <ShieldCheck size={40} className="text-pink-500" />,
      title: "Xavfsiz",
      desc: "Barcha ma'lumotlar xavfsiz saqlanadi.",
    },
    {
      icon: <Heart size={40} className="text-pink-500" fill="#ec4899" />,
      title: "Anonymous",
      desc: "Kim javob berganini hech kim bilmaydi.",
    },
    {
      icon: <MessageCircleHeart size={40} className="text-pink-500" />,
      title: "Tezkor",
      desc: "Linkni ulashing va javoblarni darhol oling.",
    },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6 py-10">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          {item.icon}

          <h2 className="text-2xl font-bold mt-5">
            {item.title}
          </h2>

          <p className="text-gray-500 mt-3">
            {item.desc}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Features;