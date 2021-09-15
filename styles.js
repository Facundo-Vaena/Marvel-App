import { StyleSheet } from "react-native";
// const backgroundImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-6BknJv6k9YsPf1y6K--1l9zxArOepTZNS15TqUy0x_Gm5H6pKOa4_Exbirfg98T03Y&usqp=CAU'
// const backgroundImg = 'https://i.pinimg.com/originals/18/53/cf/1853cf856c7b98c794eb1d67a75e4120.jpg' Este esta bueno
const backgroundImg = 'https://i.pinimg.com/474x/92/5e/cd/925ecd8d83538b0119c9e672e8e1c90b.jpg'

const styles = StyleSheet.create({
  spinner: {
    marginTop: '30%',
  },
  cardContainer: {
    backgroundColor: '#ff0000',
    paddingTop: 2,
    paddingRight: 30,
    paddingBottom: 2,
    margin: 7,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 6,
    borderColor: '#800080',
    borderWidth: 3,

  },
  img: {
    width: 50,
    height: 50,
    margin: 8,
  },
  cardText: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
  home: {
    // backgroundImage: 'url(https://fondosmil.com/fondo/29601.jpg)',
    flex: 1,
    backgroundImage: `url(${backgroundImg})`,
    // background: '#ff0015',
    // background: 'linear - gradient(189deg,#ff0015 0 %, #ffb100 80 %)',
    // background: '-webkit - linear - gradient(189deg,#ff0015 0 %, #ffb100 80 %)',
    // background: '-moz - linear - gradient(189deg,#ff0015 0 %, #ffb100 80 %)',
    // backgroundRepeat: 'no-repeat',
    // filter: 'brightness(160%)',

  },
  info: {
    
    display:'flex',
    flex:1,
    justifyContent:'center',
    backgroundImage: `url(${backgroundImg})`,
  },
  infoImg: {
    // backgroundColor: '#ff0000',
    padding:30,
    // flex:1,
    width: '65%',
    height: '90%',
    marginLeft:'18%',
    marginTop:'3%',
    borderRadius:'3%',
    
  },
  infoImgContainer: {
    flex:1,
    // backgroundColor: '#0000009a',
        
  },
  noDescription: {
    backgroundColor:'#f7af1585',
    color:'white',
    textAlign:'center',
    marginTop:'20%',
  },
  textDescription: {
    flex:1,
    backgroundColor: '#00000085',
  },
  infoText: {
    color:'white',
    textAlign:'center',
    marginLeft:'2%',
    marginTop:'3%',
    width:'95%',
//     font-family: ccbiffbamboom, sans-serif;
// font-style: normal;
// font-weight: 400;
  },
  comics: {
    flex:1,
    backgroundImage: `url(${backgroundImg})`,

  },
  comicContainer: {
    backgroundColor: '#0000009a',
    width:190,
    height:260,
    margin:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  comicImg: {
    width: '140px',
    height: '200px',
    // marginLeft:'18%',
    // marginTop:'3%',
    borderRadius:'3%',
  },
  comicImgContainer: {
    marginTop:'10px',
    // width: '140px',
    // height: '200px',
    flex:1,
  },
  comicText: {
    marginTop:'5%',
    textAlign:'center',
    marginBottom:'5%',
    marginLeft:'3%',
    marginRight:'3%',
  },
  pruebaFont: {
    // fontFamily:'ccbiffbamboom sans-serif',
    // fontFamily:'comic-serif-pro',
    // fontFamily:'Comic Sans MS',
    // fontFamily:'badaboom pro sans serif',
    // fontFamily:'Cochin',
    fontStyle: 'normal',
    fontWeight: 400,
    color:'white',
  },
})

export default styles;