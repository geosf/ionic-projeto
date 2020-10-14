import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import "./App.css";
import MyCards from "./myCards";

const Tab3: React.FC = () => {
	return (
	<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pagamento</IonTitle>
        </IonToolbar>
      </IonHeader>
		<div className="App">
			<MyCards />
		</div>
		</IonPage>
	);
}

export default Tab3;