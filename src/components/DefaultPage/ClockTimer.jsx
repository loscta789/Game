import { useState, useEffect } from 'react';

   export const ClockTimer = ({ timezone }) => {
        const [time, setTime] = useState('');
      
        useEffect(() => {
          const timerId = setInterval(() => {
            // Crée un objet date qui représente l'heure actuelle dans le fuseau horaire spécifié
            const now = new Date().toLocaleTimeString('fr-FR', { timeZone: timezone });
            setTime(now);
          }, 1000);
      
          // Effacer l'intervalle lors du démontage du composant
          return () => {
            clearInterval(timerId);
          };
        }, [timezone]); // Se déclenche à nouveau si le fuseau horaire change
      
        return <div>{time}</div>;
    };
    

