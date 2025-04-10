# Component

- https://reactnative.dev/docs/0.74/components-and-apis
- 참고로 scss, css 는 사용하지 않음.
- emotion 은 별도로 적용해야 한다.

```bash
npm start
```

```bash
a
```

## View

- html 의 div 의 역할을 수행.
- View 는 css 로 모양, 넓이, 등등을 셋팅
- View 는 옵션으로 style 이 있음.
- 아래는 인라인 스타일

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 20,
          backgroundColor: 'skyblue',
          margin: 10,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: 'black',
          width: 100,
          height: 200,
        }}
      />
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default AboutScreen;
```

- 아래는 객체 변수 정의 스타일

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle} />
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewStyle: {
    padding: 20,
    backgroundColor: 'skyblue',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    width: 100,
    height: 200,
  },
});
export default AboutScreen;
```

- 일반적인 구성 : flex 를 많이 활용한다.

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  viewStyle2: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
export default AboutScreen;
```

## Text

- numberOfLines : 글의 행수
- ellipsizeMode : 말줄임 표현 (기본 tail)
- ellipsizeMode 는 numberOfLines 이 1인 경우 잘 작동함.
- ellipsizeMode 는 numberOfLines 이 2이상의 경우 tail.

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.textstyle} numberOfLines={1} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quaerat
          quisquam incidunt reiciendis culpa similique exercitationem aliquam.
          Quia, eligendi nam, eaque voluptatem, consectetur excepturi ea eos rem
          asperiores laudantium in.
        </Text>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  textstyle: {
    fontSize: 20,
    color: '#1e1e1e',
    fontWeight: 'bold',
  },
});
export default AboutScreen;
```

- onPress

```tsx
<Text
  style={styles.textstyle}
  numberOfLines={1}
  ellipsizeMode="tail"
  onPress={() => Alert.alert('클릭')}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quaerat
  quisquam incidunt reiciendis culpa similique exercitationem aliquam. Quia,
  eligendi nam, eaque voluptatem, consectetur excepturi ea eos rem asperiores
  laudantium in.
</Text>
```

- selectable

```tsx
<Text
  style={styles.textstyle}
  numberOfLines={1}
  ellipsizeMode="tail"
  // onPress={() => Alert.alert('클릭')}
  selectable>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quaerat
  quisquam incidunt reiciendis culpa similique exercitationem aliquam. Quia,
  eligendi nam, eaque voluptatem, consectetur excepturi ea eos rem asperiores
  laudantium in.
</Text>
```

- Text 중첩

```tsx
<Text
  style={styles.textstyle}
  numberOfLines={1}
  ellipsizeMode="tail"
  // onPress={() => Alert.alert('클릭')}
  selectable>
  Lorem ipsum dolor <Text style={{color: 'red'}}>sit amet</Text>
  consectetur adipisicing elit. Nemo, quaerat quisquam incidunt reiciendis culpa
  similique exercitationem aliquam. Quia, eligendi nam, eaque voluptatem, consectetur
  excepturi ea eos rem asperiores laudantium in.
</Text>
```

## TextInput

- 글자 입력창

```tsx
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <TextInput style={styles.inputStyle} />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

- placeholder : 안내문
- value : 입력값
- `onChangeText` : 텍스트 변경시 처리값

```tsx
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholder="이름을 입력하세요"
          value={name}
          onChangeText={setName}
        />
        <Text>{name}</Text>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

- secureTextEntry : 비밀번호 입력시 별표로 표시

```tsx
<TextInput
  style={styles.inputStyle}
  placeholder="비밀번호를 입력하세요."
  secureTextEntry={true}
/>
```

- keyboardType : 키보드 타입

```tsx
<TextInput
  style={styles.inputStyle}
  placeholder="숫자를 입력하라."
  keyboardType="numeric"
/>
```

- multiline : 여러 줄 입력 가능

```tsx
<TextInput
  style={styles.inputStyle}
  placeholder="숫자를 입력하라."
  keyboardType="default"
  multiline={true}
/>
```

- maxLength : 최대 입력 길이

```tsx
<TextInput style={styles.inputStyle} placeholder="10자 제한" maxLength={10} />
```

- autoCapitalize : 자동 대문자 시작

```tsx
<TextInput
  style={styles.inputStyle}
  placeholder="대문자 시작"
  autoCapitalize="words"
/>
```

- returnKeyType / onSubmitEditing : 엔터키 처리

```tsx
<TextInput
  style={styles.inputStyle}
  placeholder="대문자 시작"
  autoCapitalize="words"
  returnKeyType="done"
  onSubmitEditing={() => Alert.alert('성공?')}
/>
```

## Button

- 기본 버튼

```tsx
<Button title="클릭" onPress={() => Alert.alert('클릭')} />
```

- title : 버튼 글자
- onPress : 이벤트 실행
- color : 버튼 색상 (ios 에서는 글자 색상)
- disabled : 버튼 활성/비활성 여부

```tsx
<Button
  title="클릭"
  onPress={() => Alert.alert('클릭')}
  color="#1e1e1e"
  disabled={true}
/>
```

- Button 은 `style` Props 가 존재하지 않아서 css 적용 불가
- CSS 적용을 한 버튼은 다른 컴포넌트로 대체(`TouchableOpacity, Pressable`)

## Image

- local 즉, /assets 폴더에서 이미지 출력하기 : require 사용

```tsx
<Image
  style={{width: 200, height: 200}}
  source={require('../../assets/images/logo.png')}
/>
```

- resizeMode : 이미지 크기 조정
  - cover : 꽉 채우기
  - contain : 비율 유지
  - center : 가운데 정렬
  - repeat : 반복
  - stretch : 늘리기

```tsx
<Image
  style={{width: 200, height: 200}}
  source={{
    uri: 'https://picsum.photos/200/300?random=1',
  }}
  resizeMode="cover"
/>
```

- onError : 이미지 로딩 실패
- onLoadEnd : 이미지 로딩 시작
- onLoadStart : 이미지 로딩 완료

```tsx
<Image
  style={{width: 200, height: 200, borderRadius: 100}}
  source={{
    uri: 'https://picsum.photos/200/300?random=2',
  }}
  resizeMode="cover"
  onError={() => Alert.alert('이미지 로딩 실패')}
  onLoadEnd={() => Alert.alert('이미지 로딩 완료')}
  onLoadStart={() => Alert.alert('이미지 로딩 시작')}
  blurRadius={0}
/>
```

- blurRadius : 블러 반경

```tsx
<Image
  style={{width: 200, height: 200}}
  source={{uri: 'https://picsum.photos/200/300?random=1'}}
  blurRadius={2}
/>
```

## ScrollView

- 내용이 너무 길어서 한 화면에 다 못보는 경우 활용

```tsx
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 100}}>
        <ScrollView>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
          <Text>내용임.</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

- horizontal : 가로 스크롤

```tsx
<ScrollView horizontal>
  <Text>내용임.</Text>
</ScrollView>
```

- scrollEnabled : 스크롤 막기

```tsx
<ScrollView scrollEnabled={false}>
  <Text>내용임.</Text>
</ScrollView>
```

- onScroll / scrollEventThrottle(이벤트 발생 빈도) : 스크롤 이벤트 처리

```tsx
<ScrollView
  onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
  scrollEventThrottle={16}>
  <Text>내용임.</Text>
</ScrollView>
```

- contentContainerStyle : 스크롤 안쪽 스타일시트 설정

```tsx
<ScrollView
  contentContainerStyle={{
    padding: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  }}>
  <Text>내용임.</Text>
</ScrollView>
```

- refreshControl : 새로 고침 기능

```tsx
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RefreshControl} from 'react-native-gesture-handler';

const AboutScreen = (): JSX.Element => {
  const [name, setName] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 100}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                setTimeout(() => setRefreshing(false), 2000);
              }}
            />
          }>
          <Text>아래로 당기면 새로고침 실행</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

- showsVerticalScrollIndicator : 스크롤바 숨기기

```tsx
<ScrollView showsVerticalScrollIndicator={true}>
  <Text>내용임.</Text>
</ScrollView>
```

## 버튼말고 `TouchableOpacity` 사용하기

- Button 은 css 작업이 불가함. (style props가 없어서)
- 다양한 css 용 Button 은 `TouchableOpacity` 사용

```tsx
<TouchableOpacity onPress={() => Alert.alert('버튼 클릭')}>
  <Text>버튼</Text>
</TouchableOpacity>
```

- style, activeOpacity 등 스타일 작업

```tsx
<TouchableOpacity
  onPress={() => Alert.alert('버튼 클릭')}
  style={{backgroundColor: 'skyblue', padding: 10, borderRadius: 10}}
  activeOpacity={0.5}>
  <Text>버튼</Text>
</TouchableOpacity>
```

- onLongPress : 사용자가 길게 눌렀을 때 처리

```tsx
<TouchableOpacity
  onPress={() => Alert.alert('버튼 누르지 마세요.')}
  onLongPress={() => Alert.alert('길게 누르지 마세요.')}>
  <Text>버튼</Text>
</TouchableOpacity>
```

- hitSlop : 터치 영역을 강제로 넓히기

```tsx
<TouchableOpacity
  onPress={() => Alert.alert('버튼 누르지 마세요.')}
  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
  <Text style={{backgroundColor: 'skyblue'}}>버튼</Text>
</TouchableOpacity>
```

- disabled : 버튼 비활성화

```tsx
<TouchableOpacity
  disabled={true}
  onPress={() => Alert.alert('버튼 누르지 마세요.')}>
  <Text style={{backgroundColor: 'skyblue'}}>버튼</Text>
</TouchableOpacity>
```

## FlatList

- ScrollView 와는 다르게 화면에 보이는 목록만 갱신
- ScrollView 는 전체 데이터를 한번에 랜더링함.
- FlatList 는 화면에 보이는 것만 렌더링함.
- FlatList 가 더 성능이 좋다.
- 많은 목록에서 효율적으로 관리가 가능하다.

- data : 보여줄 데이터 `배열`
- renderItem : `함수`로서 목록 아이템 렌더링
- keyExtractor : `함수`로서 목록 아이템 고유 키

```tsx
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const data = [
    {id: 1, title: '사과'},
    {id: 2, title: '딸기'},
    {id: 3, title: '배'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
export default AboutScreen;
```

- horizontal : 가로 스크롤 옵션

```tsx
<FlatList
  horizontal
  data={data}
  renderItem={({item}) => <Text>{item.title}</Text>}
  keyExtractor={item => item.id.toString()}
/>
```

- ListHeaderComponent, ListFooterComponent, ItemSeparatorComponent, ListEmptyComponent
- 해더, 푸터, 구분선, 데이터가 없을 때

```tsx
<FlatList
  data={data}
  renderItem={({item}) => <Text>{item.title}</Text>}
  keyExtractor={item => item.id.toString()}
  ListHeaderComponent={
    <Text style={{fontSize: 20, fontWeight: 'bold'}}>과일 목록</Text>
  }
  ListFooterComponent={
    <Text style={{fontSize: 20, fontWeight: 'bold'}}>목록 구경 다 했음</Text>
  }
  ItemSeparatorComponent={() => (
    <View
      style={{
        height: 1,
        backgroundColor: 'skyblue',
        marginTop: 3,
        marginBottom: 3,
      }}
    />
  )}
  ListEmptyComponent={<Text>데이터가 없습니다.</Text>}
/>
```

- numColumns : 그리드 리스트

```tsx
<FlatList
  numColumns={2}
  data={data}
  renderItem={({item}) => <Text>{item.title}</Text>}
  keyExtractor={item => item.id.toString()}
/>
```

- 새로고침

```tsx
<FlatList
  data={data}
  renderItem={({item}) => <Text>{item.title}</Text>}
  keyExtractor={item => item.id.toString()}
  refreshing={refreshing}
  onRefresh={() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }}
/>
```

## SafeAreaView

- 화면상에 안전한 공간, 즉 상단 노치, 하단 홈바 등을 제외한 영역에 배치
- SafeAreaView 로 배치되지 않으면 상단, 하단 기본 영역이 겹침
- 옵션은 style

## Alert

```tsx
import React from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="버튼"
          onPress={() => {
            Alert.alert('반가워요');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

- 기본형식

```tsx
Alert.alert(
  title: string,  // 알림 제목
  message?: string // 알림 본문 (생략가능)
  buttons?: AlertButton[], // 버튼들의 배열
  options?: AlertOptions  // 추가 설정
)
```

- 일반적인 Alert

```tsx
<Button
  title="버튼"
  onPress={() => {
    Alert.alert('반가워요', '메시지입니다.', [
      {text: '확인', onPress: () => console.log('반가워')},
    ]);
  }}
/>
```

- 일반적인 Alert 확인, 취소 버튼 처리

```tsx
<Button
  title="버튼"
  onPress={() => {
    Alert.alert('반가워요', '메시지입니다.', [
      {
        text: '확인',
        style: 'default',
        onPress: () => console.log('확인이에요'),
      },
      {
        text: '등록',
        style: 'destructive',
        onPress: () => console.log('등록이에요'),
      },
      {
        text: '취소',
        style: 'cancel',
        onPress: () => console.log('취소입니다.'),
      },
    ]);
  }}
/>
```

## Modal

- 팝업창
- visible, transparent, animationType : 팝업보임(useState활용), 배경투명, 모션(slide,fade,none)

```tsx
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="버튼"
          onPress={() => {
            Alert.alert('모달창', '모달창보기 예제입니다.', [
              {
                text: '모달보기',
                style: 'default',
                onPress: () => setIsVisible(true),
              },
            ]);
          }}
        />
      </View>

      <Modal visible={isVisible} transparent={false} animationType="fade">
        <View>
          <Text>안녕하세요.</Text>
          <Button title="창닫기" onPress={() => setIsVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

## StatusBar

- 상단 상태바의 스타일 조정
- backgroundColor, barStyle : 배경색과 아이콘 색상(dark-content, light-content, default)
- iOS 는 제외

```tsx
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'hotpink'} barStyle={'default'} />
      <View>
        <Text>About 내용</Text>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

## Pressable

- 사용자 터치관련한 기능 (관련기능 Button, TouchableOpacity)
- onPress, onPressIn, onPressOut, style : 누를때, 누르기 시작시, 손을 뗄때, 스타일

```tsx
import React from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AboutScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>About 내용</Text>
        <Pressable
          onPress={() => console.log('onPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          style={({pressed}) => ({
            backgroundColor: pressed ? 'red' : 'green',
            padding: 10,
          })}>
          <Text>버튼</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

## ActivityIndicator

- 로딩 컴포넌트
- size, color : 크기는 "large", "small"

```tsx
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AboutScreen = (): JSX.Element => {
  // 로딩 플래그
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // 클린업
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>About 내용</Text>
        {loading ? (
          <>
            <ActivityIndicator size={'large'} color={'hotpink'} />
            <Text>로딩중....</Text>
          </>
        ) : (
          <Text>로딩완료</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});
export default AboutScreen;
```

## Switch

- 토글 기능
- value : 현재 useState 의 값(true/false)
- onValueChange : 토글이 될 때마다 실행됨.
- thumbColor : 버튼에 색상
- trackColor : 배경에 색상

```tsx
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  // 토글에서 관리될 state
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isEnabled ? '#000000' : '#ffffff'},
      ]}>
      <View style={styles.viewContainer}>
        <Text style={[styles.text, {color: isEnabled ? '#ffffff' : '#000000'}]}>
          {isEnabled ? '다크 모드입니다' : '라이트 모드입니다.'}
        </Text>
        <Switch
          value={isEnabled}
          onValueChange={val => setIsEnabled(val)}
          thumbColor={'#ff0000'}
          trackColor={{false: 'hotpink', true: 'yellow'}}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default AboutScreen;
```

## Picker

- 드롭다운 (리스트)
- https://docs.expo.dev/versions/latest/sdk/picker/

```bash
npm i @react-native-picker/picker
```

```bash
npm start
```

```bash
a
```

- selectedValue : 선택값
- onValueChange : 값이 바뀔때 마다 실행
- mode : 스타일 ("dialog", "dropdown")
- enabled : 비활성 여부
- `<Picker.Item label="사과" value={'apple'} />`

```tsx
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  // 초기 선택된 목록관련 state
  const [selected, setSelected] = useState<string>('banana');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>목록에서 선택하시오.</Text>
        <View>
          <Picker
            selectedValue={selected}
            onValueChange={itemValue => setSelected(itemValue)}
            mode="dialog">
            <Picker.Item label="사과" value={'apple'} />
            <Picker.Item label="바나나" value={'banana'} />
            <Picker.Item label="배" value={'bae'} />
            <Picker.Item label="참외" value={'melon'} />
          </Picker>
        </View>
        <Text style={{color: 'red'}}>선택한 과일: {selected}</Text>
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AboutScreen;
```

# 상식

## `i18n` 에 대한 상식

- 국제화를 의미하는 약어
- 앱이나 웹사이트에서 여러 언어를 지원하기 위한 기술/방식
- Internationalization → I + 18글자 + N = i18n
- react-i18next i18next i18next-browser-languagedetector 등
- react-native-localize (기기 언어 감지용)
