<<<<<<< HEAD
import { IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonLabel,
         IonItem,
         IonToggle, 
        } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
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
        <IonLabel> Luzes da casa</IonLabel>
        <IonItem>
          <IonLabel>Led Piscina </IonLabel>
          <IonToggle color="primary" />
        </IonItem>
        <IonItem>
          <IonLabel>Led Sala </IonLabel>
          <IonToggle color="primary" />
        </IonItem>
        <IonItem>
          <IonLabel>LDR </IonLabel>
          <IonToggle color="primary" />
        </IonItem>
        <br></br>
        <br></br>
        <IonLabel>Outros</IonLabel>
        <IonItem>
          <IonLabel>Sirene</IonLabel>
          <IonToggle color="primary" />
        </IonItem>
        <IonItem>
          <IonLabel>Alarme</IonLabel>
          <IonToggle color="primary" />
          </IonItem>
=======
import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList>
>>>>>>> b780e8c6c0a5c14566655ec4a1ed93191278fb9e
      </IonContent>
    </IonPage>
  );
};

export default Home;
