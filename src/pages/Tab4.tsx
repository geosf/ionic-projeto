import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Localização</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pagamento</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <p>Rua Carlos Chagas, Jardim Alcantara - Ferraz de Vasconcelos/SP</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
