import Badge from '@components/Badge';
import Button from '@components/Button';
import ItemService from '@components/ItemService';
import ItemPayment from '@components/ItemPayment';
import Search from '@components/Search';
import Bpjs from '@property/images/bpjs-icon.svg';
import EpaySlip from '@property/images/epayslip-icon.svg';
import Loan from '@property/images/loan-icon.svg';
import React from 'react';
import { Text, View } from 'react-native';

export default function DashboardComponent() {
  return (
    <View style={{ paddingHorizontal: 20, flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}
      >
        <Button
          style={{
            height: 40,
            width: 40,
            backgroundColor: '#F6F5F6',
            borderRadius: 40 / 2,
            paddingTop: 5,
            paddingLeft: 3,
          }}
        />
        <Badge label="EN" />
      </View>
      <Search />
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          fontWeight: '500',
          marginTop: 20,
        }}
      >
        Welcome to Kerja 365
      </Text>
      <Text style={{ color: 'black', marginTop: 5, fontSize: 14 }}>
        Arrange all you need here
      </Text>
      <View
        style={{
          backgroundColor: '#F3F4F7',
          paddingVertical: 15,
          flexDirection: 'row',
          marginTop: 20,
          borderRadius: 35,
          justifyContent: 'center',
        }}
      >
        <ItemPayment icon={<EpaySlip />} title="ePay Slip" />
        <ItemPayment icon={<Bpjs />} title="BPJS" />
        <ItemPayment icon={<Loan />} title="Loan" />
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: '500',
          marginTop: 30,
        }}
      >
        Services By Category
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: '400',
        }}
      >
        Find what you need
      </Text>
      <View
        style={{
          height: 200,
          borderWidth: 1,
          marginTop: 20,
          borderColor: '#ECEDEC',
          borderRadius: 20,
          padding: 5,
        }}
      >
        <View
          style={{
            flex: 1 / 2,
            flexDirection: 'row',
          }}
        >
          <ItemService
            icon={require('@property/images/applicant.png')}
            title="Applycant"
          />
          <ItemService
            icon={require('@property/images/bookmark.png')}
            title="Bookmark"
          />
        </View>
        <View
          style={{
            height: 50,
            flex: 1 / 2,
            flexDirection: 'row',
          }}
        >
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
