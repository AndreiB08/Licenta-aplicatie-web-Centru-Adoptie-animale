import React from "react";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../constants/server_url";
import axios from "axios";
import "./aboutUs.css";

import rescue from '../../Assets/rescue.jpg';
import care from '../../Assets/care.jpg';
import adoption from '../../Assets/adoption.jpg';
import education from '../../Assets/education.jpg';
import hero from '../../Assets/hero.jpg';

const About = () => {

    const [stats, setStats] = useState({
        animalsRescued: 0,
        animalsAdopted: 0,
        medicalTreatments: 0,
        educationalEvents: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(`${SERVER_URL}/stats`);
                setStats(response.data);
            } catch (error) {
                console.error("Failed to fetch statistics:", error);
            }
        };

        fetchStats();
    }, []);


    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, []);

    return (
        <div className="page about">
            <h1 className="title">Despre noi</h1>
            <div className="content-wrapper">
                <div className="info">
                    <div className="intro-section">
                        <div className="intro-text">
                            <p>Centrul nostru de adopție a animalelor este dedicat oferirii unei a doua șanse fiecărui animal abandonat, maltratat sau fără adăpost. Prin dedicare, compasiune și acțiune, construim o punte între animalele salvate și familiile iubitoare. Misiunea noastră nu este doar de a adăposti, ci de a reda încrederea, sănătatea și fericirea animalelor.</p>
                            <p>Ne concentrăm pe patru piloni esențiali care definesc tot ceea ce facem:</p>
                        </div>
                        <img src={hero} alt="About us" className="about-hero" />
                    </div>
                    <div className="section" id="rescue">
                        <h2>🐾 Salvare</h2>
                        <div className="section-content">
                            <img src={rescue} alt="Rescue" />
                            <p>În fiecare zi, echipa noastră răspunde apelurilor despre animale aflate în pericol. Fie că sunt abandonate, rănite sau victime ale abuzului, intervenim pentru a le oferi ajutor imediat. Salvarea înseamnă mai mult decât relocare, înseamnă acțiune rapidă, empatie și șansa la o viață sigură. Vehiculele noastre de intervenție și personalul pregătit sunt gata să acționeze oriunde este nevoie.</p>
                        </div>
                    </div>
                </div>
                <div className="statistics">
                    <div className="stat-box">
                        <h3>+{Math.floor(stats.animalsRescued / 5) * 5}</h3>
                        <p>Animale Salvate</p>
                    </div>
                    <div className="stat-box">
                        <h3>+{Math.floor(stats.animalsAdopted / 5) * 5}</h3>
                        <p>Animale Adoptate</p>
                    </div>
                    <div className="stat-box">
                        <h3>+{Math.floor(stats.medicalTreatments / 5) * 5}</h3>
                        <p>Tratamente Medicale</p>
                    </div>
                    <div className="stat-box">
                        <h3>+{Math.floor(stats.educationalEvents / 5) * 5}</h3>
                        <p>Evenimente Educaționale</p>
                    </div>
                </div>
            </div>

            <div className="section" id="care">
                <h2>💙 Îngrijire</h2>
                <div className="section-content reverse">
                    <img src={care} alt="Care" />
                    <p>După salvare, animalele sunt evaluate de echipa noastră veterinară și primesc toate tratamentele necesare: de la vaccinuri până la intervenții chirurgicale. Sunt cazate în medii curate, adaptate speciei, primind hrană, căldură și sprijin emoțional. Specialiștii în comportament și voluntarii noștri lucrează răbdători pentru recuperarea completă a fiecărui animal.</p>
                </div>
            </div>

            <div className="section" id="adoption">
                <h2>🏠 Adopție</h2>
                <div className="section-content">
                    <img src={adoption} alt="Adoption" />
                    <p>Credem că fiecare animal merită un cămin permanent. Procesul nostru de adopție este transparent, responsabil și centrat pe oameni. Adoptații pot vizualiza animalele online, programa o vizită și primi ghidaj personalizat. Prin fiecare adopție, schimbăm viața unui animal și aducem bucurie în casele oamenilor.</p>
                </div>
            </div>

            <div className="section" id="education">
                <h2>📚 Educație</h2>
                <div className="section-content reverse">
                    <img src={education} alt="Education" />
                    <p>Schimbarea sustenabilă începe cu educația. Organizăm evenimente, ateliere și campanii publice despre bunăstarea animalelor, responsabilitate și importanța sterilizării. Dorim să formăm o generație care respectă viața și înțelege responsabilitatea pe termen lung față de animale.</p>

                </div>
            </div>

            <p className="closing-message">Îți mulțumim că faci parte din comunitatea noastră. Sprijinul tău, prin adopție sau voluntariat, chiar face diferența. Împreună construim un viitor condus de compasiune.</p>
        </div>
    );
};

export default About;
