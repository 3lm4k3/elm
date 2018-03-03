import {
  StyleSheet
} from "react-native"


export default StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#fff"
  },
  content: {
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#935CAE"
  },
  brandsList: {
    backgroundColor: "#fff",
    paddingVertical: 5,
  },
  brand: {
    flexDirection: "row",
    paddingHorizontal: 10,
    // backgroundColor: "red"
  },
  thumbnailBubble: {
    borderRadius: 50,
    padding: 2,
    position: "absolute",
    left: 10,
    height: 50,
    width: 50,
    margin: 5
  },
  brandName: {
    fontSize: 16,
    lineHeight: 60,
    color: "#484848",
    fontWeight: "bold",
    textAlign: "left",
    flex: 1,
    marginHorizontal: 65
  },
  brandPrice: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    height: 55,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  brandPriceText: {
    fontWeight: "bold",
    color: "#76DB6E",
    fontSize: 14,
    marginBottom: -5,
    marginLeft: 5
  },
  brandPriceIcon: {
  },
  "@media (max-width: 400)": {

  }
})