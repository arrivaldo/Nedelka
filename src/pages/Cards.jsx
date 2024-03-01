import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Cards.scss";

const Cards = () => {
  return (
    <div className="card-container ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 w-full max-w-6xl mx-auto">
      <Link to='/music'>
        <Card
          heading="Singer-songwriter"
          description="Through the language of music, I paint portraits of the human experience, capturing moments of emotion and vulnerability. Let the songs be your guide through life."
          imgSrc="/images/nede2.jpeg"
          imgBg="#bdc0e2"
        />
      </Link>  
      <Link to='/acting'>
        <Card
          heading="Actress & Performer"
          description="Stepping into diverse roles, I breathe life into characters, their stories unfolding on the stage like a mesmerizing dance. Join me in the magic of theater."
          imgSrc="/images/vf44.jpg"
          imgBg="#97d3a2"
        />
      </Link>  

       <Link to='/teaching'>

        <Card
          heading="Teaching Artist"
          description="Empowering students to find their voice, their rhythm, their stage. Join me in fostering the next generation of performers, one step at a time."
          imgSrc="/images/vf21.jpg"
          imgBg="#fff8dc"
        />
       </Link>  

       <Link to='/culture'>

        <Card
          heading="Arts based Advocate"
          description="                      Standing at the intersection of art and society, I raise my voice in support of cultural enrichment and creative expression. Let's build bridges through the language of art."
          imgSrc="/images/vf67.jpeg"
          imgBg="#fbd3e9"
        />
        </Link>  
  
      </div>
    </div>
  );
};

const Card = ({ heading, description, imgSrc, imgBg }) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-82 md:h-72 bg-slate-300   overflow-hidden cursor-pointer group relative"
    >
      {/* <div

className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100  group-hover:scale-110 transition-all duration-500 "

style={{

  backgroundImage: `url(${imgSrc})`,

  backgroundSize: "cover",

  backgroundPosition: "center",

}}

/> */}

      <div
        style={{ background: imgBg }}
        className="border-card  relative z-20 h-full text-black group-hover:text-black transition-colors duration-500 flex flex-col justify-around"
      >
        {/* <FiArrowRight className="text-4xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" /> */}
        <div className="flex">
          <h4 className="card-title md:text-4xl">
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <FiArrowRight className="text-4xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        </div>
        <p className="text-xl md:text-2xl lg:text-xl xl:text-2xl">{description}</p>

      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px]  text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default Cards;
