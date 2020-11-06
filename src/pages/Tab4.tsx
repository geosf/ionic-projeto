import React from 'react';
import { IonLabel, IonButton ,IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import GeolocationButton from "./GeolocationButton";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Geolocation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Geolocation</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="container">
          <IonLabel>Rua Imaginaria, 12, São Roque - SP</IonLabel>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
