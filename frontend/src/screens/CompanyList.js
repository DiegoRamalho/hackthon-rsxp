import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../services/api";

export default function CompanyList(props) {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCompanies() {
      const response = await api.get("/companies");
      setIsLoading(false);
      setCompanies(response.data.companies);
    }

    getCompanies();
  }, []);

  function navigate(company) {
    props.navigation.navigate("CompanyDetail", { company });
  }

  function renderCompany({ item }) {
    return item.empty ? null : (
      <TouchableOpacity
        key={item.id}
        style={S.companyContainer}
        onPress={() => navigate(item)}
      >
        <Image source={{ uri: item.image }} style={S.companyImg} />
        <View style={S.companyInfo}>
          <Text style={S.companyName}>{item.name}</Text>
          <Text style={S.companyEmail}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <LinearGradient
      colors={["#282a36", "#44475a", "#44475a"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={S.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            style={{ flex: 1 }}
            data={companies}
            keyExtractor={item => String(item.id)}
            renderItem={renderCompany}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? 35 : 10
  },
  companyContainer: {
    flexDirection: "row",
    padding: 5,
    marginHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  },
  companyImg: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5
  },
  companyInfo: {
    flexDirection: "column"
  },
  companyName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  companyEmail: {
    fontSize: 14,
    color: "#fff"
  }
});
