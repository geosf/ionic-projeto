import React, { useState, useEffect } from 'react';
import { IonCheckbox, IonButton, IonText, IonInput, IonItem, IonLabel, IonRow, IonIcon, IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useForm } from 'react-hook-form';
import Input, { InputProps } from "../components/input";
import { FormProvider } from 'react-hook-form';


const Register: React.FC = () => {
  const { control, handleSubmit } = useForm();
  
  const formFields: InputProps[] = [
    {
      name: "email",
      component: <IonInput type="email" />,
      label: "Email",
    },
    {
      name: "fullName",
      label: "Nome completo",
    },
    {
      name: "password",
      component: <IonInput type="password" clearOnEdit={false} />,
      label: "Senha",
    },
  ];

  const registerUser = (data: any) => {
    console.log("creating a new user account with: ", data);
  };

  return (
    <IonPage>
      <IonContent>
        <div className="ion-padding">
          <IonText color="muted">
            <h2>Criar Conta</h2>
          </IonText>
          <form method="POST" onSubmit={handleSubmit(registerUser)}>
            {formFields.map((field, index) => (
              <Input {...field} control={control} key={index} />
            ))}
            <IonItem>
              <IonLabel>Eu aceito os termos de condição.</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
              Cadastrar
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );


};

export default Register;
  

