import React from "react";
import { NextComponentType } from "next/types";
import Image from "next/image";

const AboutMe: NextComponentType = () => {
  return (
    <div>
      <div className="blog-container py-8">
          <div>
            <h2 className="normal-text font-semibold text-3xl mb-8">
              Sobre mí
            </h2>
            <p className="normal-text">
              🧑🏻‍💻 Soy una persona de{" "}
              <span className="featured-tag">22 años</span> y vivo en
              Guadalajara, Jalisco.
            </p>
            <p className="normal-text">
              Conocí la programación hace 7 años y desde entonces no he parado
              de sentir curiosidad. Me encantan las{" "}
              <span className="featured-tag">tecnologías web</span>, sobre todo
              las enfocadas en <span className="featured-tag">Javascript</span>.
              🥰
            </p>
            <p className="normal-text">
              Tengo <span className="featured-tag">experiencia profesional</span> diseñando y desarrollando Landing Pages, E-Commerce, ERP&apos;s, con un montón de tecnologías...
            </p>
            <p className="normal-text">
              He estudiado mayormente autodidacta, aunque también estudio la ingeniería. ⚙️
            </p>
            <p className="normal-text">
              Para más detalles, puedes{" "}
              <span className="font-bold">
                <a href="https://cristodca.com/CV%20-%20Cristopher%20D.%20Chavez.pdf" target="_blank" rel="noopener noreferrer" className="hover-link">
                  ver mi CV. 📄
                </a>
              </span>
            </p>
          </div>
      </div>
    </div>
  );
};

export default AboutMe;
