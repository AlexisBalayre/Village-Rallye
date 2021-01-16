import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Constants from 'expo-constants';

type Props = StackScreenProps<RootStackParamList, 'RallyeQ11'>;

export class RallyeQ11 extends React.Component<Props> {
  // Constructeur de l'objet 
  constructor(props: Props) {
    super(props)
    this.state = {
      backgroundColor1: '#2196F3',
      backgroundColor2: '#2196F3',
      backgroundColor3: '#2196F3',
      backgroundColor4: '#2196F3',
      backgroundColor5: '#2196F3',
      backgroundColor6: '#2196F3',
      backgroundColor7: '#2196F3',
      nombre_reponses: 0,
      rallyes_reponse1: '',
      rallyes_reponse2: '',
      rallyes_reponse3: '',
      rallyes_reponse4: '',
      rallyes_reponse5: '',
      rallyes_reponse6: '',
      rallyes_reponse7: '',
      display: 'none',
    };
    this.ref = React.createRef();
    this.ChangeColor1 = this.ChangeColor1.bind(this);
    this.ChangeColor2 = this.ChangeColor2.bind(this);
    this.ChangeColor3 = this.ChangeColor3.bind(this);
    this.ChangeColor4 = this.ChangeColor4.bind(this);
    this.ChangeColor5 = this.ChangeColor5.bind(this);
    this.ChangeColor6 = this.ChangeColor6.bind(this);
    this.ChangeColor7 = this.ChangeColor7.bind(this);
    this.nombre_propositions = this.props.route.params.rallye.rallye.question11.nombre_reponses;
    this.photo = this.props.route.params.rallye.rallye.question11.photo_header;
    // Image 
    if (this.photo == true) {
      this.displayImage = 'flex';
    }
    else {
      this.displayImage = 'none';
    }
    // Bouton 1
    if (this.nombre_propositions >= 1) {
      this.displayBouton1 = 'true'
    }
    else {
      this.displayBouton1 = 'none'
    }
    // Bouton 2
    if (this.nombre_propositions >= 2) {
      this.displayBouton2 = 'true'
    }
    else {
      this.displayBouton2 = 'none'
    }
    // Bouton 3
    if (this.nombre_propositions >= 3) {
      this.displayBouton3 = 'true'
    }
    else {
      this.displayBouton3 = 'none'
    }
    // Bouton 4
    if (this.nombre_propositions >= 4) {
      this.displayBouton4 = 'true'
    }
    else {
      this.displayBouton4 = 'none'
    }
    // Bouton 5
    if (this.nombre_propositions >= 5) {
      this.displayBouton5 = 'true'
    }
    else {
      this.displayBouton5 = 'none'
    }
    // Bouton 6
    if (this.nombre_propositions >= 6) {
      this.displayBouton6 = 'true'
    }
    else {
      this.displayBouton6 = 'none'
    }
    // Bouton 7
    if (this.nombre_propositions == 7) {
      this.displayBouton7 = 'true'
    }
    else {
      this.displayBouton7 = 'none'
    }
  }

  // Changement de couleur du bouton 1 par pression
  ChangeColor1(rep:string){
      if (this.state.backgroundColor1 == '#2196F3') {
        if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question11.point) {
          var reponses = this.state.nombre_reponses + 1
          if (reponses == this.props.route.params.rallye.rallye.question11.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor1: 'black',
              rallyes_reponse1: rep,
              display: 'true'
            })
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor1: 'black',
              rallyes_reponse1: rep
            }) 
          }
        }
      }
      else {
        var reponses = this.state.nombre_reponses - 1
        this.setState({
          backgroundColor1: '#2196F3',
          nombre_reponses: reponses,
          rallyes_reponse1: '',
          display: 'none'
        }) 
      }
  }

  // Changement de couleur du bouton 2 par pression
  ChangeColor2(rep){
      if (this.state.backgroundColor2 == '#2196F3') {
        if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question11.point) {
          var reponses = this.state.nombre_reponses + 1
          if (reponses == this.props.route.params.rallye.rallye.question11.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor2: 'black',
              rallyes_reponse2: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor2: 'black',
              rallyes_reponse2: rep,
            }) 
          }
        }
      }
      else {
        var reponses = this.state.nombre_reponses - 1
        this.setState({
          backgroundColor2: '#2196F3',
          nombre_reponses: reponses,
          rallyes_reponse2: "",
          display: 'none'
        }) 
      }
  }

  // Changement de couleur du bouton 3 par pression
  ChangeColor3(rep){
      if (this.state.backgroundColor3 == '#2196F3') {
        if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question11.point) {
          var reponses = this.state.nombre_reponses + 1
          if (reponses == this.props.route.params.rallye.rallye.question11.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor3: 'black',
              rallyes_reponse3: rep,
              display: 'true'
            })
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor3: 'black',
              rallyes_reponse3: rep
            }) 
          }
        }
      }
      else {
        var reponses = this.state.nombre_reponses - 1
        this.setState({
          backgroundColor3: '#2196F3',
          nombre_reponses: reponses,
          rallyes_reponse3: "",
          display: 'none'
        }) 
      }
  }

  // Changement de couleur du bouton 4 par pression
  ChangeColor4(rep){
    if (this.state.backgroundColor4 == '#2196F3') {
      if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question11.point) {
        var reponses = this.state.nombre_reponses + 1
        if (reponses == this.props.route.params.rallye.rallye.question11.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor4: 'black',
              rallyes_reponse4: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor4: 'black',
              rallyes_reponse4: rep
            }) 
          }
      }
    }
    else {
      var reponses = this.state.nombre_reponses - 1
      this.setState({
        backgroundColor4: '#2196F3',
        nombre_reponses: reponses,
        rallyes_reponse4: "",
        display: 'none'
      }) 
    }
  }

  // Changement de couleur du bouton 5 par pression
  ChangeColor5(rep){
    if (this.state.backgroundColor5 == '#2196F3') {
      if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question11.point) {
        var reponses = this.state.nombre_reponses + 1
        if (reponses == this.props.route.params.rallye.rallye.question11.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor5: 'black',
              rallyes_reponse5: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor5: 'black',
              rallyes_reponse5: rep
            }) 
          }
      }
    }
    else {
      var reponses = this.state.nombre_reponses - 1
      this.setState({
        backgroundColor5: '#2196F3',
        nombre_reponses: reponses,
        rallyes_reponse5: "",
        display: 'none'
      }) 
    }
  }

  // Changement de couleur du bouton 6 par pression
  ChangeColor6(rep){
    if (this.state.backgroundColor6 == '#2196F3') {
      if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question11.point) {
        var reponses = this.state.nombre_reponses + 1
        if (reponses == this.props.route.params.rallye.rallye.question11.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor6: 'black',
              rallyes_reponse6: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor6: 'black',
              rallyes_reponse6: rep
            }) 
          }
      }
    }
    else {
      var reponses = this.state.nombre_reponses - 1
      this.setState({
        backgroundColor6: '#2196F3',
        nombre_reponses: reponses,
        rallyes_reponse6: "",
        display: 'none'
      }) 
    }
  }

  // Changement de couleur du bouton 7 par pression
  ChangeColor7(rep){
    if (this.state.backgroundColor7 == '#2196F3') {
      if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question11.point) {
        var reponses = this.state.nombre_reponses + 1
        if (reponses == this.props.route.params.rallye.rallye.question11.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor7: 'black',
              rallyes_reponse7: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor7: 'black',
              rallyes_reponse7: rep
            }) 
          }
      }
    }
    else {
      var reponses = this.state.nombre_reponses - 1
      this.setState({
        backgroundColor7: '#2196F3',
        nombre_reponses: reponses,
        rallyes_reponse7: "",
        display: 'none'
      }) 
    }
  }

  // Synchronisation de l'écran 
  render() {
    // Id Question actuelle 
    const id_question = 11;

    // Initialisation du score
    const score = this.props.route.params.score;;

    // Id du parcours choisis 
    const id_parcours = this.props.route.params.id_parcours;

    // Dictionnaire 'rallye'
    const rallye = this.props.route.params.rallye

    // Dictionnaire 'rallyes_reponse'
    var rallyes_reponse = this.props.route.params.rallyes_reponse;

    // Initialisation d'une liste vide 'reponse' 
    var reponse = []

    // Liste avec l'Id des boutons pressés
    var list_reponses = [this.state.rallyes_reponse1, this.state.rallyes_reponse2, this.state.rallyes_reponse3, this.state.rallyes_reponse4, this.state.rallyes_reponse5, this.state.rallyes_reponse6, this.state.rallyes_reponse7];
    
    // Remplissage de la liste 'reponse' à partir des valeurs non-nulles de la liste 'list_reponses'
    var x;
    for (x in list_reponses) {
      if (list_reponses[x] != ''){
        reponse.push(list_reponses[x]);
      }
    };

    // Remplissage du dictionnaire 'rallyes_reponse'
    rallyes_reponse['question11'] = reponse;

    // Affichage de l'écran
    return (
      <View style={styles.main_container}>
        <ScrollView ref={this.ref} onContentSizeChange={() => this.ref.current.scrollToEnd({ animated: true })}>
          <Image
            style={{flex:1, marginTop: 15, paddingLeft: 20, paddingRight: 20, width: 330, height: 190, alignSelf: 'center', display: this.displayImage}}
            source={rallye.rallye.question11.photo}
          />
          <Text style={styles.texte}>
            {rallye.rallye.question11.enonce}
            <Text style={styles.innerText}>{rallye.rallye.question11.question}</Text>
          </Text>
          <View style={styles.container}>
            <View style={{ flex: 1, marginTop: 18, display: this.displayBouton1}}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor1}} containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question11.reponse1} onPress={() => {
                    this.ChangeColor1('A')
                }}/>
            </View>
            <View style={{ flex: 1, marginTop: 18, display: this.displayBouton2}}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor2}}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question11.reponse2} onPress={() => {
                    this.ChangeColor2('B')
                }}/>
            </View>
            <View style={{ flex: 1, marginTop: 18, display: this.displayBouton3}}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor3 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question11.reponse3} onPress={() => {
                    this.ChangeColor3('C')
                }}/>
            </View>
            <View style={{ flex: 1, marginTop: 18, display: this.displayBouton4}}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor4 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question11.reponse4} onPress={() => {
                    this.ChangeColor4('D')
                }}/>
            </View>
            <View style={{ flex: 1, marginTop: 18, display: this.displayBouton5}}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor5 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question11.reponse5} onPress={() => {
                    this.ChangeColor5('E')
                }}/>
            </View>
            <View style={{ flex: 1, marginTop: 18, display: this.displayBouton6}}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor6 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question11.reponse6} onPress={() => {
                    this.ChangeColor6('F')
                }}/>
            </View>
            <View style={{ flex: 1, marginTop: 18, display: this.displayBouton7}}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor7 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question11.reponse7} onPress={() => {
                    this.ChangeColor7('G')
                }}/>
            </View>
          </View>
          <View style={{flex:1, marginTop: 20, display: this.state.display}}>
              <View style={styles.button}>
                  <Button buttonStyle={{flex:1, height:70, borderRadius:0, backgroundColor: "black"}} containerStyle={{ borderRadius: 0, flex:1}} title="CONFIRMER"  onPress={() => {this.props.navigation.navigate('ReponseScreen', {id_parcours, rallye, id_question, rallyes_reponse, score})}}/>
              </View>
          </View>
        </ScrollView>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    width: 330,
    height: 190,
    alignSelf: 'center'
  },
  main_container: {
    flex: 1,
  },
  container: {
    flex:1,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  innerText:{
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    fontSize: 21,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  texte: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    fontSize: 21,
    textAlign: 'left',
  },
})