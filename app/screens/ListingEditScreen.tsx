import * as React from "react";
import {StyleSheet} from "react-native";
import * as Yup from "yup";
import {Formik} from "formik";

import AppFormField from "../components/AppFormField";
import AppFormPicker from "../components/AppFormPicker";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Camera", value: 3},
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
            />
            <AppFormPicker
              items={categories}
              name="category"
              placeholder="Category"
            />
            <AppFormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Description"
            />
            <SubmitButton title="Post" />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default ListingEditScreen;
