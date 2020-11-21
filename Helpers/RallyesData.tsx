var data = {
    0: {
       id: 0, 
       title: "RALLYE PEDESTRE GROSROUVRE",
       nom: "Grosrouvre",
       place_id: "ChIJQSnlfzOf5kcR3V5dvraLqn0",
       distance: "",
       distancevalue: 0,
       duree: "2 heures",
       description: "La commune de Grosrouvre est située dans le centre des Yvelines, à une trentaine de kilomètres à l'ouest de Versailles, préfecture du département, et à une vingtaine de kilomètres au nord de la sous-préfecture, Rambouillet. Elle se trouve au sud-ouest de la plaine de Montfort-l'Amaury, à quatre kilomètres à l'ouest de cette ville, en limite nord du massif forestier de Rambouillet.",
       statut: "RALLYE PEDESTRE DISPONIBLE",
       photo1: require("../assets/images/Grosrouvre/Grosrouvre.png"),
       photo2: require("../assets/images/Grosrouvre/Grosrouvre_2.png"),
       rallye: {
        statut: false,
        question1: {
            photo: '',
            enonce: 'Tournez le dos à l’église et remontez la place, arrivé devant un buste (voir photo), qui représente-t-il ?',
            reponse1: 'Henry IV',
            reponse2: 'François 1er',
            reponse3: 'Robert II (dit Le pieu)',
            reponse4: 'Anne de Bretagne ',
            reponse5: 'Jean IV (Comte de Montfort)'
        },
        question2: {
            photo: '',
            enonce: "Prenez la rue sur votre gauche. Montez une cinquantaine de mètres, vous voici devant la maison musée d’un célèbre compositeur.\nCette maison est un musée depuis 1973.\nCe musicien y composa Tzigane, l’Enfant et les Sortilèges, le Boléro, le Concerto pour la main gauche en ré majeur, le concerto pour piano et orchestre en sol majeur.\nIl s'agit de :",
            reponse1: 'Eric Satie',
            reponse2: 'Claude Debussy',
            reponse3: 'Maurice Ravel',
            reponse4: 'Francis Poulenc'
        }
      }
    },
    1: {
        id: 1,
        title: "RALLYE PEDESTRE MONTFORT L'AMAURY",
        nom: "Montfort-l'Amaury",
        place_id: "ChIJ9Sev37ue5kcRMDuMaMOCCwQ",
        distance: "",
        distancevalue: 0,
        duree: "2 heures",
        description: "L’histoire de Montfort l’Amaury se dessine dès le Haut Moyen-âge,  lorsque Robert le Pieux (976-1031), reçoit la forêt d’Iveline en apanage. Le jeune roi charge Guillaume de Hainaut de construire deux places fortes, l’une à Epernon, l’autre à Montfort, afin d’assurer la défense de son domaine. A sa mort, c’est son fils, Amaury Ier qui hérite de ses titres. Sous son autorité seront construit le château, les remparts, les églises Saint Pierre et Saint Laurent par Hugues Bardoul, capitaine du château. La famille de Montfort va souvent être associée à des personnalités royales : ainsi, au XIe siècle, Bertrade de Montfort, fille de Simon Ier de Montfort, est enlevée, par le roi de France, Philippe Ier, à son époux le Duc d’Anjou. Elle devient ainsi reine de France en 1104, après de multiples rebondissements.\n\nLes Montfort se pérennisent avec Yolande qui, par son mariage avec le duc de Bretagne Arthur II lie le comté au duché de Bretagne. De cette union nait Anne de Bretagne, reine de France par deux fois et duchesse de Bretagne qui embellit la Ville par ses constructions. Montfort devient un lieu d’escale pour les rois de France : Henri IV passe par la ville avant de rejoindre la capitale, de même que Louis XIII. Avec la construction du château de Versailles et le déplacement de la cour de France, Montfort l’Amaury se veut le lieu de résidence des « hoberaux », hommes de fonction royale. De fait, la ville se dynamise. La période révolutionnaire est assez confuse, la plupart des archives ayant disparues. Pour autant, la présence d’un sabotier, alors maire de la ville, qui y aurait fait régner la Terreur est avéré. De nos jours, Montfort l’Amaury est devenu un lieu de résidence pour les artistes qui viennent s’y détendre et y trouver leur inspiration.",
        statut: "RALLYE PEDESTRE DISPONIBLE",
        photo1: require("../assets/images/Montfort/Montfort.png"),
        photo2: require("../assets/images/Montfort/Montfort_2.png"),
        rallye: {
            statut: true,
            question1: {
                photo: require("../assets/images/Montfort/question1.png"),
                enonce: 'Tournez le dos à l’église et remontez la place, arrivé devant un buste (voir photo), qui représente-t-il ?',
                reponse1: 'Henry IV',
                reponse2: 'François 1er',
                reponse3: 'Robert II (dit Le pieu)',
                reponse4: 'Anne de Bretagne ',
                reponse5: 'Jean IV (Comte de Montfort)'
            },
            question2: {
                photo: require("../assets/images/Montfort/question2.png"),
                enonce: "Prenez la rue sur votre gauche. Montez une cinquantaine de mètres, vous voici devant la maison musée d’un célèbre compositeur. Cette maison est un musée depuis 1973.\nCe musicien y composa Tzigane, l’Enfant et les Sortilèges, le Boléro, le Concerto pour la main gauche en ré majeur, le concerto pour piano et orchestre en sol majeur.\nIl s'agit de :",
                reponse1: 'Eric Satie',
                reponse2: 'Claude Debussy',
                reponse3: 'Maurice Ravel',
                reponse4: 'Francis Poulenc'
            }
        }
    },
    2: {
        id: 2,
        title: "RALLYE PEDESTRE RAMBOUILLET",
        nom: "Rambouillet",
        place_id: "ChIJJwGLoMQm5EcREDmMaMOCCwQ",
        distance: "",
        distancevalue: 0,
        duree: "2 heures",
        description: "Ancienne ville royale classée Ville d'Art et d'Histoire, Rambouillet est une commune d'Île-de-France installée au cœur du département des Yvelines.\nSituée à une quarantaine de kilomètres de Paris et à trente kilomètres environ de Versailles et de son célèbre château, elle fait également partie du Parc Naturel Régional de la Haute Vallée de Chevreuse pour sa partie non urbanisée. Autrefois traversée par la voie Beauvais-Orléans, la commune de Rambouillet a connu une occupation humaine dès l'Antiquité. Propriété du domaine royal à compter du IXe siècle, elle devient seigneurie à part entière au début du XIVe siècle. Rambouillet connaît cependant un réel développement avec l'arrivée du chemin de fer au XIXe siècle, qui la relie au reste de la région parisienne. Le château de Rambouillet, lui, est encore connu aujourd'hui pour accueillir d'importantes rencontres internationales, et a eu l'occasion d'héberger de nombreux hommes d'état. \n\nTouristique, la commune de Rambouillet possède encore un important patrimoine architectural, mais également naturel, qui lui confère un charme unique. Classé aux Monuments Historiques, le château de Rambouillet a été construit dans la seconde moitié du XIVe siècle. Connu pour avoir accueilli, entre autres, François de Rabelais ou François Ier, qui y décéda, l'édifice fut une demeure royale jusqu'à ce que le président de la République, Félix Faure, en fasse une résidence d'été de la présidence française. Elle l'est d'ailleurs restée jusqu'en 2009, accueillant de nombreuses rencontres internationales d'envergure. Aujourd'hui ouvert au public, le château a connu une importante campagne de restauration dans la seconde moitié des années 2010, dévoilant de nombreuses salles à l'instar de l'ancienne salle à manger où Charles X signa son abdication, de la salle de bains de Napoléon Ier, de la salle du Conseil et sa tapisserie de la manufacture des Gobelins, ou encore de la tour François Ier. Plusieurs dépendances s'ajoutent au château, comme la fameuse bergerie nationale créée par Louis XIV pour installer un troupeau de moutons Mérinos. Un circuit permet d'y découvrir les différents animaux encore présents sur place, et une école nationale d'élevage ovin y a été ouverte en 1939. Un petit musée du mouton y retrace notamment la culture de la laine. Non loin, le parc à la française du château ouvre ses bosquets, dévoilant notamment un ermitage, une grotte surmontée d'un kiosque chinois, ou encore des canaux et des îles. Au centre, la laiterie de la Reine, petit temple néo-classique construit pour séduire la reine Marie-Antoinette, se dresse fièrement. Ne manquez pas de visiter la chaumière aux coquillages, construite au XVIIIe siècle pour la princesse de Lamballe. Au centre du jardin anglais, elle présente des automates du XVIIIe siècle, ainsi qu'une décoration mélangeant marbre et coquillages.",
        statut: "RALLYE PEDESTRE DISPONIBLE",
        photo1: require("../assets/images/Rambouillet/Rambouillet.png"),
        photo2: require("../assets/images/Rambouillet/Rambouillet_2.png"),
        rallye: {
            statut: false,
            question1: {
                photo: '',
                enonce: 'Tournez le dos à l’église et remontez la place, arrivé devant un buste (voir photo), qui représente-t-il ?',
                reponse1: 'Henry IV',
                reponse2: 'François 1er',
                reponse3: 'Robert II (dit Le pieu)',
                reponse4: 'Anne de Bretagne ',
                reponse5: 'Jean IV (Comte de Montfort)'
            },
            question2: {
                photo: '',
                enonce: "Prenez la rue sur votre gauche. Montez une cinquantaine de mètres, vous voici devant la maison musée d’un célèbre compositeur.\nCette maison est un musée depuis 1973.\nCe musicien y composa Tzigane, l’Enfant et les Sortilèges, le Boléro, le Concerto pour la main gauche en ré majeur, le concerto pour piano et orchestre en sol majeur.\nIl s'agit de :",
                reponse1: 'Eric Satie',
                reponse2: 'Claude Debussy',
                reponse3: 'Maurice Ravel',
                reponse4: 'Francis Poulenc'
            }
        }
    }
}

export default data