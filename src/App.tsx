import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { gridOutline, homeOutline, cardOutline, locateOutline, personCircleOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/inicio" component={Tab1} exact={true} />
          <Route path="/cardapio" component={Tab2} exact={true} />
          <Route path="/metodos_pagamento" component={Tab3} exact={true} />
          <Route path="/localizacao" component={Tab4} exact={true} />
          <Route path="/conta" component={Tab5} exact={true} />
          <Route path="/" render={() => <Redirect to="/inicio" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/inicio">
            <IonIcon icon={homeOutline} />
            <IonLabel>Quem Somos Nós</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/cardapio">
            <IonIcon icon={gridOutline} />
            <IonLabel>Cardápio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/metodos_pagamento">
            <IonIcon icon={cardOutline} />
            <IonLabel>Opções de Pagamento</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/localizacao">
            <IonIcon icon={locateOutline} />
            <IonLabel>Localização</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/conta">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Minha Conta</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
