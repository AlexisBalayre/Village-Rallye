import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Accueil: {
            screens: {
              Accueil: 'Accueil',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      Accueil: {
        screens: {
          Accueil: 'Accueil',
        },
      },
      RallyesDisponibles: {
        screens: {
          RallyesDisponibles: 'Rallyes Disponibles',
        },
      },
      AccueilRallye: {
        screens: {
          AccueilRallye: 'Accueil Rallye',
        },
      },
      Regles: {
        screens: {
          Regles: 'Règles',
        },
      },
      RallyeEtape1: {
        screens: {
          RallyeEtape1: 'Rallye Etape 1',
        },
      },
      RallyeQ1: {
        screens: {
          RallyeQ1: 'Rallye Q1',
        },
      },
      RallyeQ2: {
        screens: {
          RallyeQ2: 'Rallye Q2',
        },
      },
    },
  },
};
