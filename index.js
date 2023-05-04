const film =[
    {
      id: 1,
      title: "seven_somraei",
      category: "action",
      price: 15.99,
      img: "./image_film/seven_somraei.jpg",
      desc: `Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. `,
    },
    {
        id: 2,
        title: "batman_dartknight",
        category: "action",
        price: 15.99,
        img: "./image_film/batman_dartknight.jpg",
        desc: `Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. `,
      },
      {
        id: 3,
        title: "leon",
        category: "drama",
        price: 15.99,
        img: "./image_film/leon.jpg",
        desc: `Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. `,
      },
      {
        id: 4,
        title: "batman_dartknight",
        category: "action",
        price: 15.99,
        img: "./image_film/batman_dartknight.jpg",
        desc: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. `,
      },
      {
        id: 5,
        title: "fight_club",
        category: "adventure",
        price: 15.99,
        img: "./image_film/fight_club.jpg",
        desc: `An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.. `,
      },
      {
        id: 6,
        title: "",
        category: "drama",
        price: 15.99,
        img: "./image_film/green_mile.jpg",
        desc: `The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.. `,
      },
      {
        id: 7,
        title: "matrix",
        category: "adventure",
        price: 15.99,
        img: "./image_film/matrix.jpg",
        desc: `Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. `,
      }
    
];

const sectionCernter = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")
window.addEventListener("DOMContentLoaded" ,function(){
  display_filmitem(film);
  displayFilmButtons();
    });

    function display_filmitem(filmItem){
      let displayFilms = filmItem.map(function(item) { 
        // return `${item.title}`
        return `<article class="film-item">
        <img
          src=${item.img}
          class="photo"
          alt=${item.title}
        />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class=${item.price}>20$</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>` ;
    }) ;
    
    displayFilms = displayFilms.join("");
    sectionCernter.innerHTML = displayFilms ;
  };
  

  function displayFilmButtons() {
    const categories = film.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const filmCategory = film.filter(function (filmItem) {
          
          if (filmItem.category === category) {
            return filmItem;
          }
        });
        if (category === "all") {
          display_filmitem(film);
        } else {
          display_filmitem(filmCategory);
        }
      });
    });
  }