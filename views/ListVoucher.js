import React, { PureComponent } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
class ListVoucher extends PureComponent {
  onGetVoucher() {}
  render() {
    return (
      <ScrollView>
        <Card title="HELLO WORLD" image={require('../assets/cardImage11.jpg')}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="GET NOW"
            onPress={() => {
              this.onGetVoucher();
            }}
          />
        </Card>
        <Card title="HELLO WORLD" image={require('../assets/cardImage11.jpg')}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="VIEW NOW"
            onPress={() => {
              this.onGetVoucher();
            }}
          />
        </Card>
        <Card title="HELLO WORLD" image={require('../assets/cardImage11.jpg')}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="VIEW NOW"
            onPress={() => {
              this.onGetVoucher();
            }}
          />
        </Card>
      </ScrollView>
    );
  }
}
export default withNavigation(ListVoucher);
