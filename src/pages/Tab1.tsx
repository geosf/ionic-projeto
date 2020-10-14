import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import javascript from '../images/js.jpg';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bem-Vindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bem-Vindo!</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="container">
          <img className="js" src={javascript} />
          <h1>
            <span className="restaurante">Restaurante</span> <span className="javascript">JavaScript</span>
          </h1>
          <p>
            Olá Mundo!
          </p>
          <p>Somos um restaurante tecnológico que busca proporcionar a você uma experiência única, unindo programação e culinária.</p>
          <p>Além de levar a você uma comida deliciosa, temos como objetivo estimular a curiosidade e levar o conhecimento para que você saia daqui saciado tanto fisicamente quanto psicologicamente.</p><br></br>
          <p>É um prazer ter você como nosso cliente!</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
