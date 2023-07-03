import React, { useRef, useState } from "react";
import {
    IonApp,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardContent,
} from "@ionic/react";

const Tab2: React.FC = () => {
  const [calculoDeIMC, setCalculoDeIMC] = useState<number>();

  const pesoRef = useRef<HTMLIonInputElement>(null);
  const alturaRef = useRef<HTMLIonInputElement>(null);

  const calcularIMC = () => {
      const peso = pesoRef.current!.value;
      const altura = alturaRef.current!.value;
      if (!peso || !altura) {
          return;
      }
      const imc = +peso / (+altura * +altura);
      setCalculoDeIMC(imc);
  };

  return (
      <IonApp>
          <IonApp>
              <IonHeader>
                  <IonToolbar>
                      <IonTitle>Calculadora</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <IonContent>
                  <IonGrid>
                      <IonRow>
                          <IonCol>
                              <IonItem>
                                  <IonLabel>Tu peso KG:</IonLabel>
                                  <IonInput ref={pesoRef}></IonInput>
                              </IonItem>
                          </IonCol>
                      </IonRow>
                      <IonRow>
                          <IonCol>
                              <IonItem>
                                  <IonLabel>Tu altura Mts:</IonLabel>
                                  <IonInput ref={alturaRef}></IonInput>
                              </IonItem>
                          </IonCol>
                      </IonRow>
                      <IonRow>
                          <IonCol>
                              <IonButton onClick={calcularIMC}>
                                  Calcular
                              </IonButton>
                          </IonCol>
                      </IonRow>
                      {calculoDeIMC && (
                          <IonRow>
                              <IonCol>
                                  <IonCard>
                                      <IonCardContent>
                                          <h2>{calculoDeIMC}</h2>
                                      </IonCardContent>
                                  </IonCard>
                              </IonCol>
                          </IonRow>
                      )}
                  </IonGrid>
              </IonContent>
          </IonApp>
      </IonApp>
  );
};

export default Tab2;
