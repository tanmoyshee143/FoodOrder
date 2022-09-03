import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FoodMenu = () => {
  const DATA = [
    {id: '1',title: 'Foods',},
    {id: '2',title: 'Drinks',},
    {id: '3',title: 'Snacks',},
    {id: '4',title: 'Sauce',},
    {id: '5',title: 'Namkin',},
  ];

  // const MENUITEM = [
  //   {id: '1',title: 'Tomato',price: "150",},
  //   {id: '2',title: 'Mango',price: "135",},
  //   {id: '3',title: 'Snacks',price: "155",},
  //   {id: '4',title: 'Sauce',price: "175",},
  //   {id: '5',title: 'Namkin',price: "110",},
  //   {id: '6',title: 'Namkin',price: "170",},
  //   {id: '7',title: 'Namkin',price: "185",},
  //   {id: '8',title: 'Namkin',price: "160",},
  // ];

  const allMenuItem = [
   {
    id : '1', 
    foodCategory:'Foods' ,
    foodList: [
      {id: '1',title: 'Chicken Handi Biryani',price: "150",image: [require('../../../img/chb.jpg')]},
      {id: '2',title: 'Chilli Mutter Paneer',price: "135",image: [require('../../../img/cmp.jpg')]},
      {id: '3',title: 'Indian Allu Puri',price: "105",image: [require('../../../img/iap.jpg')]},
      {id: '4',title: 'Indian Vage Thali',price: "195",image: [require('../../../img/ivt.jpg')]},
      {id: '5',title: 'Kadai Chicken Manchurian',price: "210",image: [require('../../../img/kcm.jpg')]},
      {id: '6',title: 'Mutton Handi Biryani',price: "170",image: [require('../../../img/mhb.jpg')]},
      {id: '7',title: 'Paneer Butter Massala',price: "185",image: [require('../../../img/pbm.jpg')]},
      {id: '8',title: 'Paneer Tikka Massala',price: "160",image: [require('../../../img/ptm.jpg')]},
    ]
  },
  {
    id : '2', 
    foodCategory:'Drinks' ,
    foodList: [
      {id: '1',title: 'Chicken Handi Biryani',price: "150",image: [require('../../../img/chb.jpg')]},
      {id: '2',title: 'Chilli Mutter Paneer',price: "135",image: [require('../../../img/cmp.jpg')]},
      {id: '3',title: 'Indian Allu Puri',price: "105",image: [require('../../../img/iap.jpg')]},
      {id: '4',title: 'Indian Vage Thali',price: "195",image: [require('../../../img/ivt.jpg')]},
      {id: '5',title: 'Kadai Chicken Manchurian',price: "210",image: [require('../../../img/kcm.jpg')]},
      {id: '6',title: 'Mutton Handi Biryani',price: "170",image: [require('../../../img/mhb.jpg')]},
      {id: '7',title: 'Paneer Butter Massala',price: "185",image: [require('../../../img/pbm.jpg')]},
      {id: '8',title: 'Paneer Tikka Massala',price: "160",image: [require('../../../img/ptm.jpg')]},
    ]
  },
  {
    id : '3', 
    foodCategory:'Snacks' ,
    foodList: [
      {id: '1',title: 'Chicken Handi Biryani',price: "150",image: [require('../../../img/chb.jpg')]},
      {id: '2',title: 'Chilli Mutter Paneer',price: "135",image: [require('../../../img/cmp.jpg')]},
      {id: '3',title: 'Indian Allu Puri',price: "105",image: [require('../../../img/iap.jpg')]},
      {id: '4',title: 'Indian Vage Thali',price: "195",image: [require('../../../img/ivt.jpg')]},
      {id: '5',title: 'Kadai Chicken Manchurian',price: "210",image: [require('../../../img/kcm.jpg')]},
      {id: '6',title: 'Mutton Handi Biryani',price: "170",image: [require('../../../img/mhb.jpg')]},
      {id: '7',title: 'Paneer Butter Massala',price: "185",image: [require('../../../img/pbm.jpg')]},
      {id: '8',title: 'Paneer Tikka Massala',price: "160",image: [require('../../../img/ptm.jpg')]},]
  },
  {
    id : '4', 
    foodCategory:'Sauce' ,
    foodList: [
      {id: '1',title: 'Chicken Handi Biryani',price: "150",image: [require('../../../img/chb.jpg')]},
      {id: '2',title: 'Chilli Mutter Paneer',price: "135",image: [require('../../../img/cmp.jpg')]},
      {id: '3',title: 'Indian Allu Puri',price: "105",image: [require('../../../img/iap.jpg')]},
      {id: '4',title: 'Indian Vage Thali',price: "195",image: [require('../../../img/ivt.jpg')]},
      {id: '5',title: 'Kadai Chicken Manchurian',price: "210",image: [require('../../../img/kcm.jpg')]},
      {id: '6',title: 'Mutton Handi Biryani',price: "170",image: [require('../../../img/mhb.jpg')]},
      {id: '7',title: 'Paneer Butter Massala',price: "185",image: [require('../../../img/pbm.jpg')]},
      {id: '8',title: 'Paneer Tikka Massala',price: "160",image: [require('../../../img/ptm.jpg')]},
    ]
  },
  {
    id : '5', 
    foodCategory:'Namkin' ,
    foodList: [
      {id: '1',title: 'Chicken Handi Biryani',price: "150",image: [require('../../../img/chb.jpg')]},
      {id: '2',title: 'Chilli Mutter Paneer',price: "135",image: [require('../../../img/cmp.jpg')]},
      {id: '3',title: 'Indian Allu Puri',price: "105",image: [require('../../../img/iap.jpg')]},
      {id: '4',title: 'Indian Vage Thali',price: "195",image: [require('../../../img/ivt.jpg')]},
      {id: '5',title: 'Kadai Chicken Manchurian',price: "210",image: [require('../../../img/kcm.jpg')]},
      {id: '6',title: 'Mutton Handi Biryani',price: "170",image: [require('../../../img/mhb.jpg')]},
      {id: '7',title: 'Paneer Butter Massala',price: "185",image: [require('../../../img/pbm.jpg')]},
      {id: '8',title: 'Paneer Tikka Massala',price: "160",image: [require('../../../img/ptm.jpg')]},
    ]
  },
  ];

  const [menuId, setMenuId] = useState('1');
  const [search, setSearch] = useState('');
  const [menuItem,setMenuItem] = useState(allMenuItem[0].foodList)

  const newSearch = () => {
    console.log('newSearch', search);
  };

  const menuFood = id => {
    console.log('FOODS', id);
    console.log("allMenuItem",allMenuItem)
    setMenuId(id);
    setMenuItem(allMenuItem[parseInt(id)-1].foodList);
  };

  const renderMenuItem = ({item}) => {
    console.log(item.image)
    return(
      <View
        style={{
          width: 160,
          height: 270,
          marginTop: 50,
          margin:5,
          
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: 160,
            height: 220,
            borderRadius: 30,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 164,
              height: 164,
              borderRadius: 82,
              marginTop: -80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 100, height: 100, borderRadius:50}}
              source= {item.image[0]}
              
            />
          </View>
          <View style={{width: 155, height: 52}}>
            <Text
              style={{
                fontSize: 20,
                color: '#000000',
                textAlign: 'center',
              }}>
              {item.title}
            </Text>
          </View>
          <View style={{width: 125, height: 52,marginTop:30,}}>
            <Text
              style={{
                fontSize: 19,
                color: 'red',
                textAlign: 'center',
              }}>
              Rs. {item.price}
            </Text>
          </View>
          <TouchableOpacity style = {{width:90,height:25,backgroundColor:"green",borderRadius:50,justifyContent:"center",alignItems:"center"}}
          
          onPress={() => {
            console.log('cart');
          }}
          >
            <Text style = {{color:"white"}}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
      </View>

    )
  }

  const renderItem = ({item}) => {
    // console.log(item);
    
    return (
      <View style={styles.menubar}>
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            menuFood(item.id);
          }}>
          <Text
            style={{
              color: menuId == item.id ? '#FA4A0C' : '#000000',
              fontFamily: 'poppins_regular',
              fontSize: 17,
            }}>
            {item.title}
          </Text>
          <View
            style={{
              width: 80,
              height: 3,
              backgroundColor: menuId == item.id ? '#FA4A0C' : '#DED7D5',
              marginTop: 5,
            }}></View>
        </TouchableOpacity>
      </View>
    );
  };

  const searchItem = (newSearch) => {
    setSearch(newSearch)

    const searchList = menuItem.map((element,index)=>{
      console.log("element",element)
      if(element.title.includes(newSearch)){
        return element
      }
    })

    // setMenuItem(searchList)

  }

  console.log('foodmenu');
  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={{
            width: 22,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 30,
          }}
          onPress={() => {
            console.log('menu');
          }}>
          <Icon name="menu" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 24,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 30,
          }}
          onPress={() => {
            console.log('cart');
          }}>
          {/* <Text>FoodMenu</Text> */}
          <Icon name="cart" size={24} />
        </TouchableOpacity>
      </View>
      <View style={{width: 215, height: 85, marginLeft: 36}}>
        <Text
          style={{fontFamily: 'poppins_bold', fontSize: 30, color: '#000000'}}>
          Delicious food for you
        </Text>
      </View>
      <View style={styles.searchView}>
        <TouchableOpacity
          style={{
            width: '15%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            newSearch();
          }}>
          {/* <Text>FoodMenu</Text> */}
          <FontAwesome name="search" size={24} />
        </TouchableOpacity>
        <View
          style={{
            width: '85%',
            height: 50,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <TextInput
            style={{fontSize: 17}}
            placeholder="Search"
            onChangeText={newSearch => setSearch(newSearch)}
            defaultValue={search}></TextInput>
        </View>
      </View>
      <View style={{height: 60}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
      <View style = {{flex:1,marginTop:30,alignItems:"center"}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          // numColumns={2}
          numColumns={2} 
          data={menuItem}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id}
        />
       
        </View>
      </View>
      
    </ScrollView>
  );
};

export default FoodMenu;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#DED7D5',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    height: 55,
    marginTop: 25,
    backgroundColor: '#F1EBE9',
    borderRadius: 35,
    alignSelf: 'center',
  },
  menubar: {
    flexDirection: 'row',
    width: 80,
    height: 50,
    margin: 10,
    backgroundColor: '#DED7D5',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
});
