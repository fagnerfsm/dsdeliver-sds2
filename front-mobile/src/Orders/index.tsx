import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';

function Orders() {

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',

  }


});


export default Orders;