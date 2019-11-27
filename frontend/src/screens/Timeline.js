import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  ScrollView
} from "react-native";
import { NavigationActions } from "react-navigation";
import Card from "../components/card";
import api from "../services/api";

import CompanyItem from "../components/companyItem";

export default function Timeline(props) {
  const [posts, setPosts] = useState([]);
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

  useEffect(() => {
    async function getPosts() {
      const response = await api.get("/posts");
      setPosts(response.data.posts);
    }

    getPosts();
  }, []);

  function navigate(company) {
    props.navigation.navigate(
      "Company",
      {},
      //NavigationActions.navigate({ routeName: "CompanyDetail", params: { company } })
    );
  }

  return (
    <SafeAreaView style={S.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{ marginTop: 30 }}
        />
      ) : (
        <>
          <View style={S.companyContainer}>
            <FlatList
              data={companies}
              renderItem={({ item }) => (
                <CompanyItem item={item} navigate={() => navigate(item)} />
              )}
              keyExtractor={item => String(item.id)}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <ScrollView
            style={S.timelineContainer}
            showsVerticalScrollIndicator={false}
          >
            {posts.map(post => (
              <Card key={post.id} post={post} />
            ))}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? 24 : 0
  },
  companyContainer: {
    height: 90,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  timelineContainer: {
    flex: 2,
    marginHorizontal: 15,
    marginTop: 15
  }
});
