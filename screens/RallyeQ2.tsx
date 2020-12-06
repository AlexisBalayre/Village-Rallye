import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Constants from 'expo-constants';

type Props = StackScreenProps<RootStackParamList, 'RallyeQ2'>;

export class RallyeQ2 extends React.Component<Props> {
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
      display: 'none'
    };
    this.scroll = null;
    this.ref = React.createRef();
    this.ChangeColor1 = this.ChangeColor1.bind(this);
    this.ChangeColor2 = this.ChangeColor2.bind(this);
    this.ChangeColor3 = this.ChangeColor3.bind(this);
    this.ChangeColor4 = this.ChangeColor4.bind(this);
    this.ChangeColor5 = this.ChangeColor5.bind(this);
    this.ChangeColor6 = this.ChangeColor6.bind(this);
    this.ChangeColor7 = this.ChangeColor7.bind(this);
  }

  ChangeColor1(rep:string){
      if (this.state.backgroundColor1 == '#2196F3') {
        if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question2.point) {
          var reponses = this.state.nombre_reponses + 1
          if (reponses == this.props.route.params.rallye.rallye.question2.point) {
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
        if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question2.point) {
          var reponses = this.state.nombre_reponses + 1
          if (reponses == this.props.route.params.rallye.rallye.question2.point) {
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
        if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question2.point) {
          var reponses = this.state.nombre_reponses + 1
          if (reponses == this.props.route.params.rallye.rallye.question2.point) {
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
      if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question2.point) {
        var reponses = this.state.nombre_reponses + 1
        if (reponses == this.props.route.params.rallye.rallye.question2.point) {
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

  ChangeColor5(rep){
    if (this.state.backgroundColor5 == '#2196F3') {
      if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question2.point) {
        var reponses = this.state.nombre_reponses + 1
        if (reponses == this.props.route.params.rallye.rallye.question2.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor5: 'red',
              rallyes_reponse5: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor5: 'red',
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

  ChangeColor6(rep){
    if (this.state.backgroundColor6 == '#2196F3') {
      if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question2.point) {
        var reponses = this.state.nombre_reponses + 1
        if (reponses == this.props.route.params.rallye.rallye.question2.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor6: 'red',
              rallyes_reponse6: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor6: 'red',
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

  ChangeColor7(rep){
    if (this.state.backgroundColor7 == '#2196F3') {
      if (this.state.nombre_reponses < this.props.route.params.rallye.rallye.question2.point) {
        var reponses = this.state.nombre_reponses + 1
        if (reponses == this.props.route.params.rallye.rallye.question2.point) {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor7: 'red',
              rallyes_reponse7: rep,
              display: 'true'
            }) 
          }
          else {
            this.setState({
              nombre_reponses: reponses,
              backgroundColor7: 'red',
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

  render() {
    const question_suivante = "RallyeQ3";
    const question = "question2";
    const score = this.props.route.params.score;
    const id_parcours = this.props.route.params.id_parcours;
    const rallye = this.props.route.params.rallye;
    var rallyes_reponse = this.props.route.params.rallyes_reponse;
    var reponse = "";
    var list_reponses = [this.state.rallyes_reponse1, this.state.rallyes_reponse2, this.state.rallyes_reponse3, this.state.rallyes_reponse4, this.state.rallyes_reponse5, this.state.rallyes_reponse6, this.state.rallyes_reponse7];
    var x;
    for (x in list_reponses) {
      if (list_reponses[x] != "") {
        if (reponse != "") {
          reponse = reponse + '-' + list_reponses[x]
        }
        else {
          reponse = reponse + list_reponses[x]
        }
      }
    };
    rallyes_reponse['question2'] = reponse;

    return (
      <View style={styles.main_container}>
        <ScrollView ref={this.ref} onContentSizeChange={() => this.ref.current.scrollToEnd({ animated: true })}>
          <Image
            style={styles.image}
            source={rallye.rallye.question2.photo}
          />
          <Text style={styles.texte}>
            {rallye.rallye.question2.enonce}
            <Text style={styles.innerText}>{rallye.rallye.question2.question}</Text>
          </Text>
          <View style={styles.container}>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor1}} containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question2.reponse1} onPress={() => {
                    this.ChangeColor1('A')
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor2}}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question2.reponse2} onPress={() => {
                    this.ChangeColor2('B')
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor3 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question2.reponse3} onPress={() => {
                    this.ChangeColor3('C')
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor4 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question2.reponse4} onPress={() => {
                    this.ChangeColor4('D')
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor5 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question2.reponse5} onPress={() => {
                    this.ChangeColor5('E')
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor6 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question2.reponse6} onPress={() => {
                    this.ChangeColor6('F')
                }}/>
            </View>
            <View style={styles.button}>
                <Button buttonStyle={{borderRadius: 20, height: 45, backgroundColor: this.state.backgroundColor7 }}  containerStyle={{borderRadius: 20, flex:1}} title={rallye.rallye.question2.reponse7} onPress={() => {
                    this.ChangeColor7('G')
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
        width: 170,
        height: 210,
        alignSelf: 'center'
      },
     main_container: {
      flex: 1
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
      marginTop: 20
    }
})

