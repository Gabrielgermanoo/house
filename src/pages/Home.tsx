import { IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonLabel,
         IonItem,
         IonToggle,
         IonButton 
        } from '@ionic/react';
import React, {useState} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = (Home) => {

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>SmartHouse</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen scrollEvents={true}>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">IFAL</IonTitle>
        </IonToolbar>
      </IonHeader>
        <br></br>
      <IonLabel> Luzes da casa</IonLabel> |   <IonLabel> Actions</IonLabel>
      <br></br>
      <br></br>
      <IonItem>
        <IonLabel>Led Piscina </IonLabel>
        <IonButton color="medium">On</IonButton>
        <IonButton color="medium">Off</IonButton>
      </IonItem>
      <IonItem>
        <IonLabel>Led Sala </IonLabel>
        <IonButton color="medium" >On</IonButton>
        <IonButton color="medium">Off</IonButton>
      </IonItem>
      <IonItem>
        <IonLabel>LDR </IonLabel>
        <IonButton color="medium" >On</IonButton>
        <IonButton color="medium">Off</IonButton>
      </IonItem>
      <br></br>
      <br></br>
      <IonLabel>Outros</IonLabel>
      <IonItem>
        <IonLabel>Sirene</IonLabel>
        <IonButton color="medium" >On</IonButton>
        <IonButton color="medium">Off</IonButton>

      </IonItem>
      <IonItem>
        <IonLabel>Alarme</IonLabel>
        <IonButton color="medium" >On</IonButton>
        <IonButton color="medium">Off</IonButton>
        </IonItem>
    </IonContent>
    </IonPage>
            );
};
export default Home;