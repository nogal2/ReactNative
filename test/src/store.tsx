const [appName, setAppName] = useState('My First App')
  const [random, setRandom] = useState<number[]>([36,999])

  const onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;  // Math.floor는 소수점 이하 버림
    setRandom((prev) => [...prev, randomNum])
  }

  const onNumDelete = (position:number) => {
    const newArray = random.filter((num, index) => {
      return position != index
    })
    setRandom(newArray)
  }

{/* <Header name={appName} />
      <Text
        style={styles.mainText}
        onPress={() => Alert.alert('text touch event')}
      >Hello world
      </Text>
      <Generator add={onAddRandomNum} />
      <ScrollView
        style={{width:'100%'}}
        //onMomentumScrollBegin={() => Alert.alert('begin')}
        //onMomentumScrollEnd={() => Alert.alert('end')}
        //onScroll={()=> Alert.alert('scrolling')}
        //onContentSizeChange={(width, height) => Alert.alert(height.toString())}
        bounces={true}
      >
        <NumList 
          num={random}
          delete={onNumDelete} />
      </ScrollView> */}

       {/* <TextInput
                value={myTextInput}
                style={styles.input}
                onChangeText={(text) => setMyTextInput(text)}
                multiline={true}
                maxLength={100}
                autoCapitalize={'none'}
                editable={true}
            />
      <Button 
        title="Add Text Input"
        onPress={onAddTextInput}
      />

      <ScrollView style={{width:'100%'}}>
        {
          alphabet.map((item, idx) => (
            <Text 
              style={styles.mainText}
              key={idx}>
                {item}
              </Text>
          ))
        }
      </ScrollView> */}