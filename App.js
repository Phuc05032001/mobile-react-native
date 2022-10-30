import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Style from './assets/styles';
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React, {Component, useState} from 'react';
import { CheckBox } from '@ui-kitten/components';


export default function App()
{   
  const [title, setNameTitle] =  useState('');
  const [destination, setDestination] =  useState('');
  const [description, setDescription] = useState('');
  const [dateOfTrip, setDate] = useState('');
  const [requireRiskAssessment, setRisk] = useState('');
  const showAlert = [];

    submitAddForm=()=> {

      if (this.validateForm()) {
          alert('Name: '+ title + "\n" + 
          'Destination: '+ destination + "\n" +
          'Description: '+ description + "\n" +
          'Date of Trip: '+ dateOfTrip + "\n" +
          'Require Risk Assessment: '+ requireRiskAssessment
          );
      }else{
        alert(showAlert.join('\n'));
        while (showAlert.length) {
          showAlert.pop();
        }
      }

    }

    validateForm=()=> {
      let formIsValid = true;
      let regexCheckData = "^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$";


      if (!title) {
        formIsValid = false;
        let name = showAlert.push("Title do not Empty");
      }

      if (!destination) {
        formIsValid = false;
        let local = showAlert.push("destination do not Empty");
      }

      if (!requireRiskAssessment) {
        formIsValid = false;
        let require = showAlert.push("Risk Assessment do not Empty");
      }else{
        if(requireRiskAssessment == "Yes" || requireRiskAssessment == "No"){
          formIsValid = true;
        }else{
          formIsValid = false;
          let require2 = showAlert.push("Risk Assessment: this line is just fill in 'Yes' or 'No'");
        }
      }

      if (!dateOfTrip) {
        formIsValid = false;
        let Dot = showAlert.push("date Of Trip do not Empty");
      }else{
        if (!dateOfTrip.match(regexCheckData)) {
          formIsValid = false;
          let Dot2 = showAlert.push('dateOfTrip: isValid Date time: form d/m/yy or dd/mm/yyyy');
        }
      }
      
      return formIsValid;
    }

    return(
            <ScrollView>
                <KeyboardAvoidingView 
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {/* //Input Name */}
                    <View style={{padding: 10, justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 20}}>Name</Text>
                        <TextInput 
                        name="title"
                        style={[styles.input]} 
                        placeholder='Name of Trip' 
                        value={title}
                        onChangeText={(txt) => setNameTitle(txt)}
                        />
                    </View>
    
                    
                    <View style={{padding: 10, justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 20}}>Destination</Text>
                        <TextInput 
                        name="destination"
                        style={[styles.input]} 
                        placeholder='Location'
                        value={destination}
                        onChangeText={(txt) => setDestination(txt)}
                        />
                    </View>
    
                  
                    <View style={{padding: 10, justifyContent: 'space-around' }}>
                        <Text style={{fontSize: 20}}>Desciption</Text>
                        <TextInput 
                        name="description"
                        style={[styles.input, {height:100}]} 
                        placeholder='Type Here...' 
                        multiline={true}
                        value={description}
                        onChangeText={(txt) => setDescription(txt)}
                        />
                    </View>
    
                    <View style={{padding: 10, justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 20}}>Date of Trip</Text>
                        <TextInput 
                        name="dateOfTrip"
                        style={[styles.input]} 
                        placeholder='d/m/yy or dd/mm/yyyy'
                        value={dateOfTrip}
                        onChangeText={(txt) => setDate(txt)}
                        />
                    </View>
                     
                    <View style={{padding: 10, justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 20}}>Risk of Assessment</Text>
                        <TextInput 
                        name="requireRiskAssessment"
                        style={[styles.input]} 
                        placeholder='Yes/No'
                        value={requireRiskAssessment}
                        onChangeText={(txt) => setRisk(txt)}
                        />
                    </View> 
    
                    {/* //button Add  */}
                    <View style={{  alignItems: 'center',
                                    justifyContent: 'center',}}>
                    <TouchableOpacity 
                    style={[styles.button, {marginLeft: 40, flexDirection: 'row'}]} 
                    onPress={this.submitAddForm}>
                        <Text style={{color: 'white', fontSize:20, alignItems: 'center',justifyContent: 'center'}}>
                            Add Trip
                        </Text>
                    </TouchableOpacity>
                    </View>
                    
                </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        ); 

}


export const styles = StyleSheet.create({
    container: {
        paddingTop:10,
        paddingHorizontal:20,
        marginBottom: 10,
        opacity: 0.9,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
    heading:{
        fontSize:30,
        fontWeight: '700',
        color: Style.color,
    },
    containerHeading:{

    },
    button:{
        backgroundColor: Style.color,
        borderRadius: 10,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    input:{
        fontSize:20,
        height: 50,
        color:'black',
        borderWidth: 3,
        borderColor: Style.color,
        marginBottom:20,
        shadowColor: "grey",
      },

});