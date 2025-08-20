import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Ingredients (with icons/images)
const ingredients = [
  { name: "Tomatoes", img: "https://img.icons8.com/color/96/tomato.png" },
  { name: "Cheese", img: "https://img.icons8.com/color/96/cheese.png" },
  { name: "Lettuce", img: "https://img.icons8.com/color/96/lettuce.png" },
  { name: "Bread", img: "https://img.icons8.com/color/96/bread.png" },
  { name: "Onion", img: "https://img.icons8.com/color/96/onion.png" },
];

export default function MealOfTheDay() {
  return (
    <div className="container text-center py-5 bg-light">
      <h2 className="fw-bold mb-4 text-warning">🍽 Meal of the Day</h2>
      <div className="position-relative mx-auto" style={{ width: "300px", height: "300px" }}>
        
        {/* Main Dish */}
        <motion.div
          className="rounded-circle shadow-lg bg-white d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle"
          style={{ width: "180px", height: "180px", zIndex: 10 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="https://img.icons8.com/color/200/hamburger.png"
            alt="Meal of the Day"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
        </motion.div>

        {/* Ingredients orbiting */}
        {ingredients.map((ing, i) => {
          const angle = (i / ingredients.length) * 2 * Math.PI;
          const x = 120 * Math.cos(angle);
          const y = 120 * Math.sin(angle);

          return (
            <motion.div
              key={i}
              className="position-absolute d-flex flex-column align-items-center"
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ x, y, opacity: 1, rotate: 360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
              style={{ top: "50%", left: "50%" }}
            >
              <img src={ing.img} alt={ing.name} className="rounded-circle border shadow" style={{ width: "60px", height: "60px" }} />
              <span className="small mt-1">{ing.name}</span>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-4 text-muted mx-auto" style={{ maxWidth: "500px" }}>
        Freshly crafted with love — a wholesome burger with crispy veggies,
        melting cheese, and soft bread. Perfect for your day!  
      </p>
    </div>
  );
}
