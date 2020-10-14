import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid } from '@ionic/react';

import frango from '../images/frango.jpg'
import bife from '../images/bife.jpg'
import lasanha from '../images/lasanha.jpg'
import ribs from '../images/ribs.jpg'

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cardápio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Conheça Nosso Delicioso Cardápio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='container'>
          <div className='img'>
            <IonGrid>
              <IonRow>

                <IonCol>
                  <img src={frango} />
                  <p> Frango gostoso </p>
                </IonCol>

                <IonCol>
                  <img src={bife} />
                  <p> Bife sucolento </p>
                </IonCol>

                <IonCol>
                  <img src={lasanha} />
                  <p> Melhor lasanha </p>
                </IonCol>

                <IonCol>
                  <img src={lasanha} />
                  <p> Melhor lasanha </p>
                </IonCol>

              </IonRow>
            </IonGrid>

            <IonGrid>
              <IonRow>

                <IonCol>
                  <img src={frango} />
                  <p> Frango gostoso </p>
                </IonCol>

                <IonCol>
                  <img src={bife} />
                  <p> Bife sucolento </p>
                </IonCol>

                <IonCol>
                  <img src={lasanha} />
                  <p> Melhor lasanha </p>
                </IonCol>

                <IonCol>
                  <img src={lasanha} />
                  <p> Melhor lasanha </p>
                </IonCol>

              </IonRow>
            </IonGrid>

            <IonGrid>
              <IonRow>

                <IonCol>
                  <img src={frango} />
                  <p> Frango gostoso </p>
                </IonCol>

                <IonCol>
                  <img src={bife} />
                  <p> Bife sucolento </p>
                </IonCol>

                <IonCol>
                  <img src={lasanha} />
                  <p> Melhor lasanha </p>
                </IonCol>

                <IonCol>
                  <img src={lasanha} />
                  <p> Melhor lasanha </p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
