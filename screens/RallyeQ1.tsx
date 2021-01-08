import React, { useState } from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, ScrollView} from 'react-native';
import { Button, colors } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'RallyeQ1'>;

export class RallyeQ1 extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      backgroundColor1: '#2196F3',
      backgroundColor2: '#2196F3',
      backgroundColor3: '#2196F3',
      backgroundColor4: '#2196F3',
      nombre_reponses: 0,
      rallyes_reponse1: '',
      rallyes_reponse2: '',
      rallyes_reponse3: '',
      rallyes_reponse4: '',
      display: 'none'
    };
    this.ref = React.createRef();
    this.ChangeColor1 = this.ChangeColor1.bind(this);
    this.ChangeColor2 = this.ChangeColor2.bind(this);
    this.ChangeColor3 = this.ChangeColor3.bind(this);
    this.ChangeColor4 = this.ChangeColor4.bind(this);
  }

  componentDidMount() {
    if(this.ref.current) {
      this.ref.current.scrollTo({x: 0, y: 0, animated: true});
    }
  }

  ChangeColor1(rep:string){
      if (this.state.backgroundColor1 == '#2196F3') {
        if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question1.point) {
          var reponses = this.state.nombre_reponses + 1
          if (reponses == this.props.route.params.rallye.rallye.question1.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor1: 'red',
              rallyes_reponse1: rep,
              display: 'true'
            })
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor1: 'red',
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

  ChangeColor2(rep){
      if (this.state.backgroundColor2 == '#2196F3') {
        if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question1.point) {
          var reponses = this.state.nombre_reponses + 1
          if (reponses == this.props.route.params.rallye.rallye.question1.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor2: 'red',
              rallyes_reponse2: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor2: 'red',
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

  ChangeColor3(rep){
      if (this.state.backgroundColor3 == '#2196F3') {
        if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question1.point) {
          var reponses = this.state.nombre_reponses + 1
          if (reponses == this.props.route.params.rallye.rallye.question1.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor3: 'red',
              rallyes_reponse3: rep,
              display: 'true'
            })
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor3: 'red',
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

  ChangeColor4(rep){
    if (this.state.backgroundColor4 == '#2196F3') {
      if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question1.point) {
        var reponses = this.state.nombre_reponses + 1
        if (reponses == this.props.route.params.rallye.rallye.question1.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor4: 'red',
              rallyes_reponse4: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor4: 'red',
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

  render() {
    const question_suivante = "RallyeQ2";
    const question = "question1";
    const score = 0;
    const id_parcours = this.props.route.params.id_parcours;
    const rallye = this.props.route.params.rallye;
    var rallyes_reponse = {
    };
    var reponse = []
    var list_reponses = [this.state.rallyes_reponse1, this.state.rallyes_reponse2, this.state.rallyes_reponse3, this.state.rallyes_reponse4];
    var x;
    // Suppression des valeurs vides 
    for (x in list_reponses) {
      if (list_reponses[x] != ''){
        reponse.push(list_reponses[x]);
      }
    };
    rallyes_reponse['question1'] = reponse;

    return (
      <View style={styles.main_container}>
        <ScrollView ref={this.ref} onContentSizeChange={() => this.ref.current.scrollToEnd({ animated: true })}>
          <Image
            style={styles.image}
            source={rallye.rallye.question1.photo}
          />
          <Text style={styles.texte}>
            {rallye.rallye.question1.enonce}
            <Text style={styles.innerText}>{rallye.rallye.question1.question}</Text>
          </Text>
          <View style={styles.container}>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor1}} containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question1.reponse1} onPress={() => {
                    this.ChangeColor1('A')
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor2}}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question1.reponse2} onPress={() => {
                    this.ChangeColor2('B')
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor3 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question1.reponse3} onPress={() => {
                    this.ChangeColor3('C')
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor4 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question1.reponse4} onPress={() => {
                    this.ChangeColor4('D')
                }}/>
            </View>
          </View>
          <View style={{flex:1, marginTop: 20, display: this.state.display}}>
              <View style={styles.button}>
                  <Button buttonStyle={{flex:1, height:70, backgroundColor: "green"}} containerStyle={{ flex:1}} title="CONFIRMER"  onPress={() => {this.props.navigation.navigate('ReponseScreen', {id_parcours, rallye, question, rallyes_reponse, score, question_suivante})}}/>
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
    button: {
      flex: 1,
      marginTop: 18
    }
})


