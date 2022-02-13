import Header from '@components/Header';
import ItemPayment from '@components/ItemPayment';
import ItemService from '@components/ItemService';
import Search from '@components/Search';
import View from '@components/View';
import Bpjs from '@property/images/bpjs-icon.svg';
import EpaySlip from '@property/images/epayslip-icon.svg';
import Loan from '@property/images/loan-icon.svg';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import ItemNotification from '@components/ItemNotification';

const RightComponent = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <ItemNotification totalNotif={8} />
      <Image
        source={require('@property/images/avatar.png')}
        style={{ height: 35, width: 35, borderRadius: 35 / 2, marginLeft: 10 }}
      />
    </View>
  );
};

export default function DashboardComponent() {
  return (
    <View style={styles.wrapperPage}>
      <Header
        containerStyle={{ marginTop: 10 }}
        rightComponent={<RightComponent />}
      />
      <Search />
      <Text style={styles.txtWelcom}>Welcome to Kerja 365</Text>
      <Text style={styles.txtArrange}>Arrange all you need here</Text>
      <View style={styles.containerItemPayment}>
        <ItemPayment icon={<EpaySlip />} title="ePay Slip" />
        <ItemPayment icon={<Bpjs />} title="BPJS" />
        <ItemPayment icon={<Loan />} title="Loan" />
      </View>
      <Text style={styles.txtService}>Services By Category</Text>
      <Text style={styles.txtFind}>Find what you need</Text>
      <View style={styles.containerItemService}>
        <View style={styles.rowItemService}>
          <ItemService
            icon={require('@property/images/applicant.png')}
            title="Applycant"
          />
          <ItemService
            icon={require('@property/images/bookmark.png')}
            title="Bookmark"
          />
        </View>
        <View style={styles.rowItemService}>
          <ItemService
            icon={require('@property/images/job-posting.png')}
            title="Job Posting"
          />
          <ItemService
            icon={require('@property/images/your-project.png')}
            title="Your project"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperPage: { paddingHorizontal: 20, flex: 1, backgroundColor: 'white' },
  txtWelcom: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 20,
  },
  txtArrange: { color: 'black', marginTop: 5, fontSize: 14 },
  containerItemPayment: {
    backgroundColor: '#F3F4F7',
    paddingVertical: 15,
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 35,
    justifyContent: 'center',
  },
  txtService: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 30,
  },
  txtFind: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
  containerItemService: {
    height: 200,
    borderWidth: 1,
    marginTop: 20,
    borderColor: '#ECEDEC',
    borderRadius: 20,
    padding: 5,
  },
  rowItemService: {
    flex: 1 / 2,
    flexDirection: 'row',
  },
});
