import React from "react";

const Meals = (props) => {
  const { meals } = props;
  return (
    <div className="grid md:grid-cols-3 px-4 gap-y-5 mt-6">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="max-w-sm bg-white  mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 "
        >
          <div>
            <img
              className="rounded-t-lg mx-auto"
              src={meal.strMealThumb}
              alt="mealImage"
            />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {meal.strMeal}
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {meal.strInstructions.slice(0, 160)}
            </p>
            <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meals;
