    const images = [
        {
            "src": "assets/img/sl1.jpeg",
            "title": "Exclusive Deals on Fashion",
            "description": "Discover the latest trends with discounts up to 50% off! Shop now!"
          },
          {
            "src": "assets/img/sl6.jpeg",
            "title": "Your Sporting Adventure Awaits",
            "description": "Gear up for your next outdoor adventure with up to 40% off sports equipment."
          },
  {
    "src": "assets/img/sl8.jpeg",
    "title": "Travel the World for Less",
    "description": "Explore breathtaking destinations with our limited-time travel deals!"
  },
  {
    "src": "assets/img/sl2.jpeg",
    "title": "E-Commerce Excellence",
    "description": "Find the best online deals and get free shipping on your first order!"
  },
  {
    "src": "assets/img/sl9.jpeg",
    "title": "Learn and Grow",
    "description": "Enhance your skills with top online courses and certifications at discounted prices."
  },
  {
    "src": "assets/img/sl3.jpeg",
    "title": "Fashion You Can Trust",
    "description": "Get your fashion style from the best brands with exclusive discounts."
  },
  {
    "src": "assets/img/sl5.jpeg",
    "title": "Perfect Getaways Await",
    "description": "Book your dream vacation now with exclusive holiday packages for you!"
  },
  {
    "src": "assets/img/sl7.jpeg",
    "title": "Shop for the Future",
    "description": "Upgrade your wardrobe with the latest women’s fashion and accessories – stylish picks at prices you’ll love!"
  },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/111/150/100.jpg",
//     "date": "15 February 2021",
//     "location": "Los Angeles, CA",
//     "title": "Transform Your Learning Experience",
//     "description": "Join thousands of students enhancing their education with interactive tools."
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/112/150/100.jpg",
//     "date": "10 February 2021",
//     "location": "Austin, TX",
//     "title": "Shop Smarter, Not Harder",
//     "description": "Get the best deals on everything—from home essentials to fashion!"
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/113/150/100.jpg",
//     "date": "05 February 2021",
//     "location": "Denver, CO",
//     "title": "Adventure is Calling",
//     "description": "Don't miss out on these limited-time travel deals—book your next adventure now!"
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/114/150/100.jpg",
//     "date": "01 February 2021",
//     "location": "Salt Lake City, UT",
//     "title": "Elevate Your Sport",
//     "description": "Score the best deals on sports gear and equipment—shop now!"
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/115/150/100.jpg",
//     "date": "29 January 2021",
//     "location": "Seattle, WA",
//     "title": "Empower Your Education",
//     "description": "Access the best online courses in technology, design, and business at discounted rates."
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/116/150/100.jpg",
//     "date": "20 January 2021",
//     "location": "Portland, OR",
//     "title": "Discover New Horizons",
//     "description": "Plan your next big trip with the best flight and accommodation deals."
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/117/150/100.jpg",
//     "date": "10 January 2021",
//     "location": "Las Vegas, NV",
//     "title": "Fitness Just Got Better",
//     "description": "Find the perfect fitness equipment and apparel with our exclusive online offers."
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/118/150/100.jpg",
//     "date": "05 January 2021",
//     "location": "New York, NY",
//     "title": "Your Education, Your Future",
//     "description": "Unlock your career potential with courses that fit your lifestyle."
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/119/150/100.jpg",
//     "date": "25 December 2020",
//     "location": "Chicago, IL",
//     "title": "Get Ready to Shop",
//     "description": "Don’t miss our biggest shopping sale of the year—unbelievable discounts!"
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/120/150/100.jpg",
//     "date": "20 December 2020",
//     "location": "Orlando, FL",
//     "title": "Explore, Experience, Enjoy",
//     "description": "Find your next vacation spot and book it now with incredible travel savings!"
//   },
//   {
//     "src": "assets/img/sl1.pge",
//     "thumb": "https://picsum.photos/id/121/150/100.jpg",
//     "date": "15 December 2020",
//     "location": "San Diego, CA",
//     "title": "Knowledge at Your Fingertips",
//     "description": "Boost your skills with online learning programs—start today and succeed tomorrow!"
//   }
];


    const thumbnails = document.getElementById("thumbnails");
    const mainImage = document.getElementById("mainImage");
    const infoBox = document.getElementById("infoBox");

    function setMain(index) {

      const image = images[index];
      mainImage.src = image.src;
      infoBox.innerHTML = `

        <h3 class="card-hover__title">
            ${image.title}
          </h3>
          <p class="card-hover__text">
            ${image.description}
          </p>
          <a href="#" class="card-hover__link">
            <span>Learn How</span>
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>        
          </a>
      `;
    }

    images.forEach((img, i) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img src="${img.src}" alt="" onclick="setMain(${i})" />`;
      thumbnails.appendChild(slide);
    });

    setMain(0);

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        900: { slidesPerView: 4 }
      }
    });