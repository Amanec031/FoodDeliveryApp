// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/card';
// import burger from '../images/carousel_Images/burger.jpg';
// import momoms from '../images/carousel_Images/momos.jpg';
// import pizza from '../images/carousel_Images/pizza.jpg';


// export default function Home() {

//     const [foodCat, setFoodCat] = useState('');
//     const [foodItem, setFoodItem] = useState([]);
//     const [search, setSearch] = useState([]);

//     const loadData = async () => {
//         try {
//             let response = await fetch("http://localhost:5000/api/foodData", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             response = await response.json();
//             // console.log(response[0],response[1]);
//             setFoodItem(response[0]);
//             setFoodCat(response[1]);
//         } catch (error) {
//             console.log("Error fetching the data", error);
//         }

//     }

//     useEffect(() => {
//         loadData()
//     }, []);

//     return (
//         <div>
//             <Navbar />
//             <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

//                 <div className="carousel-inner " id='carousel'>
//                     <div class=" carousel-caption  " style={{ zIndex: "10" }}>
//                         <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
//                             <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
//                             <button className="btn text-white bg-success" type="submit">Search</button>
//                         </div>
//                     </div>
//                     <div className="carousel-item active" >
//                         <img src={burger} className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={momoms} className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={pizza} className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>

//             <div>
//             </div>
//             <div className='container'>
//                 {
//                     foodCat.length > 0
//                         ? foodCat.map((data) => (
//                             <div key={data._id}>
//                                 <h2>{data.CategoryName}</h2>
//                                 <div className='container'>
//                                     {
//                                         foodCat !== []
//                                             ? foodCat.map((data) => {
//                                                 return (
//                                                     <div className='row mb-3'>
//                                                         <div key={data._id} className='fs-3 m-3'>
//                                                             {data.CategoryName}
//                                                         </div>
//                                                         <hr />
//                                                         {foodItem !== []
//                                                             ?
//                                                             foodItem.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
//                                                                 .map(filterItems => {
//                                                                     return (
//                                                                         <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
//                                                                             <Card foodName={filterItems.name}
//                                                                                 options={filterItems.options[0]}
//                                                                                 imgSrc={filterItems.img} />

//                                                                         </div>
//                                                                     )
//                                                                 })
//                                                             : <div>No Data found</div>}
//                                                     </div>
//                                                 )
//                                             })
//                                             : ""
//                                     }
//                                 </div>
//                             </div>
//                         ))
//                         : <div>Loading...</div>
//                 }
//             </div>
//             <Footer />
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/card'; // Assuming Card component is correctly imported
import burger from '../images/carousel_Images/burger.jpg';
import momos from '../images/carousel_Images/momos.jpg';
import pizza from '../images/carousel_Images/pizza.jpg';
import './styles.css'; // Assuming you have this CSS file

export default function Home() {
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [search, setSearch] = useState('');

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setFoodItem(data[0]);
            setFoodCat(data[1]);
        } catch (error) {
            console.error("Error fetching the data", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={burger} className="d-block w-100" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src={momos} className="d-block w-100" alt="Momos" />
                    </div>
                    <div className="carousel-item">
                        <img src={pizza} className="d-block w-100" alt="Pizza" />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='container'>
                <div className="row search-container">
                    <div className="col-12">
                        <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                {foodCat.length > 0 ? (
                    foodCat.map((cat) => (
                        <div key={cat._id} className="my-4">
                            <h2>{cat.CategoryName}</h2>
                            <div className='row row-cols-1 row-cols-md-3 g-4'>
                                {foodItem.length > 0 ? (
                                    foodItem
                                        .filter((item) => item.CategoryName === cat.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                                        .map((filteredItem) => (
                                            <div key={filteredItem._id} className='col'>
                                                <Card foodName={filteredItem.name} options={filteredItem.options[0]} imgSrc={filteredItem.img} />
                                            </div>
                                        ))
                                ) : (
                                    <div>No items found</div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <Footer />
        </div>
    );
}
