export type RootStackParamList = {
  Root: undefined;
  Accueil: undefined;
  RallyesDisponibles: {
    data: {
      distance: string,
      distanceValue: number
    }[];
  };
  AccueilRallye: {
    nom: string
  };
  Regles: {
    id: number
  };
  RallyeEtape1: {
    id: number
  };
  rallyes: {
    id: number,
       title: string,
       nom: string,
       place_id: string,
       distance: string,
       distancevalue: number,
       duree: string,
       description: string,
       statut: string,
       photo1: object,
       photo2: object,
       rallye: {
        question1: {
            photo: object,
            enonce: string,
            reponse1: string,
            reponse2: string,
            reponse3: string,
            reponse4: string,
            reponse5: string,
        },
        question2: {
            photo: object,
            enonce: string,
            reponse1: string,
            reponse2: string,
            reponse3: string,
            reponse4: string,
        }
      }
  }[];
  RallyeQ1: {
    id: number, 
    id_parcours: number
  }
  RallyeQ2: {
    id: number, 
    id_parcours: number,
    rallyes_reponse: {
      Q1: string,
      Q2: string,
      Q3: string,
      Q4: string,
      Q5: string,
      Q6: string,
      Q7: string,
      Q8: string,
      Q9: string,
      Q10: string,
      Q11: string,
      Q12: string,
      Q13: string,
      Q14: string,
      Q16: string,
      Q17: string,
      Q18: string,
      Q19: string,
      Q20: string
    }
  }
};

export type BottomTabParamList = {
  Accueil: undefined;
  TabTwo: undefined;
  AccueilRallye: undefined;
  RallyesDisponibles: undefined;
};

export type AccueilParamList = {
  Accueil: undefined;
};

export type AccueilRallyeParamList = {
  AccueilRallye: undefined;
};

export type RallyesDisponiblesParamList = {
  RallyesDisponibles: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};


export type RallyeParamList = {
  nom: string;
  data: object;
};