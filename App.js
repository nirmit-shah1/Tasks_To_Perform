import * as React from 'react';
import {View,Text,StatusBar} from "react-native";
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
import {ScrollView} from 'react-native-gesture-handler'
const colors={
  themeColor:"#4263ec",
  white:"#fff",
  background:"#f4f6fc",
  greyish:"#a4a4a4",
  tint:"2b49c3"

}
const tasks=[{
  task:"Do coding",
  icon:"account-tie",
  theme: "#37003c",
  stamp: "Today . 7am"

},
{
  task:"Meet devlopers",
  icon:"account-tie",
  theme: "#fed132",
  stamp: "Today . 6am"

},
{
  task:"meet people",
  icon:"account-tie",
  theme: "#008b8b",
  stamp: "Today . 5am"

},
{
  task:"meet people",
  icon:"account-tie",
  theme: "#fed132",
  stamp: "Today .4am"

}];
const Task=({task,icon,theme,stamp}) => 
{
  return(
  <View style={{backgroundColor:colors.white, flexDirection: "row", marginHorizontal:16, marginVertical:4 , borderRadius:20, paddingVertical:20, paddingHorizontal: 24  }}>
    <View style={{flexDirection:"row", alignItems: "center"}}> 
      <MaterialCommunityIcons name={icon} size={30} style={{color:theme}} />
      <View><Text style={{fontSize:16 }}>{task}</Text><Text style={{color: colors.greyish }}>{stamp}</Text></View>
    </View>
    
    <View style={{flexDirection:"row"}}> 
      <MaterialCommunityIcons name="pencil" size={30} style={{color:theme, marginRight:95}} />
      <MaterialCommunityIcons name="trash-can" size={30} style={{color:theme, marginRight:2}} />
    </View>
  </View>
  );};
export default function App (props) {
    return(
  <View style={{flex:1,backgroundColor: colors.themeColor}}>
  <StatusBar barStyle="light-content" backgroundColor={colors.themeColor}/>   
  <View style={{backgroundColor: colors.themeColor}}>
  <View style={{padding:16, flexDirection:"row", justifyContent:"space-between"}}>
  <MaterialCommunityIcons name="text" size={30} style={{color:colors.white}} />
  <View style={{flexDirection:"row"}}>
  <MaterialCommunityIcons name="bell-outline" size={30} style={{color:colors.white}}></MaterialCommunityIcons>
  <AntDesign name="user" size={30} style={{color:colors.white}}/>

  </View>
   </View>
   <View style={{padding:16}}>
     <Text style={{color:colors.white, fontSize:30}}>{"Hello Nirmit Shah"}</Text>
     <View style={{paddingHorizontal:16,
     paddingVertical:6,
    flexDirection:"row",
  justifyContent:"space-between",
backgroundColor:colors.white,
borderRadius:20,
marginVertical:20,
alignItems:"center"}}>
<MaterialCommunityIcons name="magnify" size={30}
style={{color:colors.blue}}/>
<View style={{flexDirection:"row"}}>
<MaterialCommunityIcons name="microphone" size={30}
style={{color:colors.blue}}/>
<MaterialCommunityIcons name="tune" size={30}
style={{color:colors.blue}}/>
</View>
  </View>
   </View>
   </View>
   <View style={{padding:20,flexDirection:"row",backgroundColor:colors.backgroundColor,justifyContent:"flex-end", alignItems: "center"}}>
     <Text style={{fontSize:24}}>Tasks</Text>
   <MaterialCommunityIcons name="plus" size={30} style={{color:colors.themeColor, backgroundColor:colors.white,borderRadius:20, marginHorizontal:8 }}/>
   </View>
   <ScrollView>

      {tasks.map(task => <Task
      task={task.task} icon={task.icon} theme={task.theme} stamp={task.stamp} />)}
   </ScrollView>
   </View>
   
    ); 
}
