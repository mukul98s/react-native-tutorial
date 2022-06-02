import * as React from "react";
import {StyleSheet} from "react-native";
import * as Yup from "yup";
import {Formik} from "formik";

import AppFormField from "../components/AppFormField";
import AppFormPicker from "../components/AppFormPicker";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {PickerItemType} from "../types/global";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories: PickerItemType[] = [
  {
    backgroundColor: "primary",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "orange",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "yellow",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "green",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "secondary",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "light_blue",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "dark_blue",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "purple",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "medium",
    icon: "application",
    label: "Other",
    value: 9,
  },
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
              PickerItemComponent={CategoryPickerItem}
              numberOfColumn={3}
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
