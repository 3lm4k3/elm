import EstyleSheet from "react-native-extended-stylesheet"

export default EstyleSheet.create({
  linearGradient: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  loginOptions: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
    paddingHorizontal: 25,

  },
  loginOption: {
    backgroundColor: "#fff",
    borderRadius: 23,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    height: 50,
    flexDirection: "row", 
    elevation: 3
  },
  loginOptionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#26559A"
  },
  loginForm: {
    marginVertical: 15,
    paddingHorizontal: 25,
  },
  controller: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginButton: {
    backgroundColor: "#FEE180",
    borderRadius: 23,
    marginHorizontal: 25,
    marginVertical: 15,
    width: 350,
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#935CAE",
    fontSize: 16,
    fontWeight: "bold"
  },
  checkboxLabel: {
    color: "#fff"
  },
  "@media (max-width: 400)": {
    loginOptions: {
      marginVertical: 10
    },
    loginOption: {
      width: 250,
      height: 40,
      marginVertical: 5,
    },
    loginOptionText: {
      fontSize: 12
    },
    loginForm: {
      marginVertical: 10
    },
    loginButton: {
      width: 250,
      alignSelf: "center"
    },
    checkboxLabel: {
      fontSize: 12,
      marginLeft: -5
    },
    belowInputText: {
      fontSize: 12
    },
    "controller:last-child": {
      justifyContent: "center"

    }
  }
});

