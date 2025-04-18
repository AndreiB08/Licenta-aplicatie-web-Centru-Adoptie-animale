import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import './home.css';

import caine1 from '../../Assets/caine1.jpeg';
import adoption from '../../Assets/adoption.jpg';
import caine3 from '../../Assets/caine3.jpg';
import rescue from '../../Assets/rescue.jpg';
import education from '../../Assets/education.jpg';
import papagal from '../../Assets/papagal.jpg';
import pisica1 from '../../Assets/pisica1.jpg';
import care from '../../Assets/care.jpg';

const Home = () => {
	const images = [caine1, pisica1, caine3, papagal];
	const navigate = useNavigate();
	const role = localStorage.getItem("role");

	useEffect(() => {
		if (role === "admin" || role === "staff") {
			navigate("/dashboard");
		}
	}, [role, navigate]);

	return (
		<div className="page">
			<h1 className="title">Bun venit! 🐶🐱</h1>

			<div className="content-inceput">
				<div className="info">
					<p>În fiecare an, mii de animale ajung în adăposturi din cauza concepțiilor greșite sau a abandonului. Animalele de rasă mixtă sunt adesea mai rezistente, mai sănătoase și se adaptează mai ușor decât cele de rasă pură. Ele se obișnuiesc rapid cu noile medii, dovedind loialitate și afecțiune față de noii stăpâni. Mulți oameni tind să creadă că animalele de rasă pură sunt superioare, însă cele de rasă mixtă aduc, de cele mai multe ori, numeroase avantaje, precum o imunitate mai puternică, un temperament echilibrat și o capacitate impresionantă de adaptare la medii și situații de viață diverse.</p><br />
					<p>Adăpostul nostru este dedicat salvării și îngrijirii animalelor abandonate, rănite sau abuzate, indiferent de specie. Credem că fiecare animal merită o șansă la o viață mai bună, iar noi facem tot ce ne stă în putință pentru a le oferi dragoste, grijă și atenție. În prezent, găzduim sute de animale din specii diferite, inclusiv câini, pisici, iepuri, păsări și alte animale domestice, și lucrăm constant pentru a le asigura condiții excelente, tratament medical specializat și oportunități reale pentru adopții responsabile. Echipa noastră dedicată este formată din profesioniști și voluntari pasionați, care se străduiesc să ajute animalele să se refacă atât fizic, cât și emoțional.</p>
				</div>

				<div className="swiper-container">
					<Swiper
						modules={[Autoplay]}
						spaceBetween={0}
						slidesPerView={1}
						autoplay={{ delay: 4000 }}
						speed={4000}
						loop={true}
						allowTouchMove={false}
						navigation={false}
						pagination={{ clickable: false }}
					>
						{images.map((url, index) => (
							<SwiperSlide key={index}>
								<img src={url} alt={`Animal image ${index + 1}`} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<div className="content-info">
				<img src={rescue} alt="Rescued hamster" />
				<div>
					<h2>Salvare</h2>
					<p>Suntem dedicați salvării animalelor aflate în dificultate. Le oferim îngrijire medicală, adăpost și o nouă șansă la o viață sigură și fericită.</p>
					<a href="/about#rescue">Află mai multe →</a>
				</div>

				<img src={care} alt="Cared-for cat" />
				<div>
					<h2>Îngrijire</h2>
					<p>Oferim adăpost sigur și îngrijire medicală adecvată pentru fiecare animal de companie, ajutându-l să se refacă atât fizic, cât și emoțional.</p>
					<a href="/about#care">Află mai multe →</a>
				</div>

				<div>
					<h2>Adopție</h2>
					<p>Găsim cămine pline de iubire pentru animalele salvate. Credem că fiecare dintre ele merită o a doua șansă și facem tot posibilul pentru a le ajuta să o primească.</p>
					<a href="/about#adoption">Află mai multe →</a>
				</div>

				<img src={adoption} alt="Happy adopted dogs" />
				<div>
					<h2>Educație</h2>
					<p>Promovăm responsabilitatea față de animale prin educație, evenimente și voluntariat activ în comunitate.</p>
					<a href="/about#education">Află mai multe →</a>
				</div>

				<img src={education} alt="Shelter rabbit" />
			</div>
		</div>
	);
};

export default Home;
