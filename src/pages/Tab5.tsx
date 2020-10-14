import React from 'react';
import { IonCheckbox, IonButton, IonInput, IonItem, IonLabel, IonRow, IonIcon, IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab5.css';
import { personCircle } from 'ionicons/icons';
import './register.tsx';


const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Minha Conta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
            
          </IonToolbar>
          
        </IonHeader>
        <IonRow> 
  <IonCol> 
    <IonIcon 
      style = {{fontSize: "70px", color: "# 0040ff"}} 
      icon = {personCircle} 
    /> 
  </IonCol> 
</IonRow>
<form className="ion-padding">
  <IonItem>
    <IonLabel position="floating">Usuário</IonLabel>
    <IonInput />
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Senha</IonLabel>
    <IonInput type="password" />
  </IonItem>
  <IonItem lines="none">
    <IonLabel>Lembrar de mim</IonLabel>
    <IonCheckbox defaultChecked={true} slot="start" />
  </IonItem>
  <IonButton className="ion-margin-top" type="submit" expand="block">
    Login
  </IonButton>
  <p>Não possui uma conta? <a href="./register">Cadastre-se</a>.</p>
</form>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
