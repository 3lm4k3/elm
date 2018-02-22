import EstyleSheet from "react-native-extended-stylesheet"

export default EstyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingHorizontal: "1rem",
  },
  carousel: {
    height: 250,
    flexGrow: 0,
    marginLeft: -50
  },
  carrouselElm: {
    height: 200,
    width: 300,
    marginHorizontal: 10 ,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10
  },
  carrouselText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 22,
    color: "#935CAE",
    fontWeight: "bold"
  },
  categoryList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 35
  },
  categoryCard: {
    flexBasis: "48%",
    height: 175,
    width: "100%",
    marginBottom: 15,
    elevation: 10,
    backgroundColor: "#fff"
  },
  categoryImage: {
    flex: 1,
  },
  categoryMeta: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "100%",
    padding: 5,
  },
  categoryMetaTitle: {
    fontWeight: "bold"
  },

})