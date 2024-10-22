import React from 'react';

const MainContent = () => {
  return (
    <main className="container-fluid p-0">
      {/* Imagen grande que abarca todo el ancho */}
      <section>
        <img
          src="https://purina.com.pe/sites/default/files/styles/webp/public/2024-04/razas-pequenas-de-perros-corriendo-hn_0.jpg.webp?itok=qRhYXVjH"
          alt="Imagen de perros"
          className="img-fluid w-100"
           style={{ height: 'auto', objectFit: 'cover', objectPosition: 'center' }}
        />
      </section>

      {/* Sección con texto e imagen más pequeña */}
      <section className="container my-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-left">
            <h2>La realidad en el Perú</h2>
            <p>
              En Perú, existen alrededor de 6 millones de perros abandonados, y solo en Lima se estima que hay 2 millones viviendo en las calles. En cuanto a los gatos, el número es tres veces mayor debido a su rápida reproducción. El abandono afecta tanto a perros como a gatos de todas las edades y razas, sin distinción.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://dummyimage.com/300x300/000/fff&text=Imagen+de+Perros"
              alt="Imagen de perros"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* Sección de "¡ADOPTA!" con franja de color */}
      <section className="adoptar-section">
        <h2>¡ADOPTA!</h2>
        <p>Adoptar no solo salva una vida, sino que también llena la tuya de alegría.</p>
      </section>

      {/* Galería de 9 imágenes */}
      <section className="container my-4">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <img
              src="https://dummyimage.com/180x250/000/fff&text=Mascota+Adoptable+1"
              alt="Mascota adoptable 1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://dummyimage.com/180x250/000/fff&text=Mascota+Adoptable+2"
              alt="Mascota adoptable 2"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://dummyimage.com/180x250/000/fff&text=Mascota+Adoptable+3"
              alt="Mascota adoptable 3"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://dummyimage.com/180x250/000/fff&text=Mascota+Adoptable+4"
              alt="Mascota adoptable 4"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://dummyimage.com/180x250/000/fff&text=Mascota+Adoptable+5"
              alt="Mascota adoptable 5"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://dummyimage.com/180x250/000/fff&text=Mascota+Adoptable+6"
              alt="Mascota adoptable 6"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://dummyimage.com/180x250/000/fff&text=Mascota+Adoptable+7"
              alt="Mascota adoptable 7"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://dummyimage.com/180x250/000/fff&text=Mascota+Adoptable+8"
              alt="Mascota adoptable 8"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mb-4">
            <img
              src="https://dummyimage.com/180x250/000/fff&text=Mascota+Adoptable+9"
              alt="Mascota adoptable 9"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
