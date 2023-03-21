import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(2)

  const categories = ['Духи раз', 'Духи два', 'Духи три', 'Духи четыре', 'Духи пять']

  const onClickCategory = (indexClick) => {
    setActiveIndex(indexClick)
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((value, index) =>
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? 'active' : ''}>
              {value}
            </li>)
        }
      </ul>
    </div>
  )
}

export default Categories;