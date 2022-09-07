import React, {useState} from "react";
import {
    FlatList,
    ListRenderItem,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View
} from "react-native";

import MemoMySvgComponent from "./svg/MySvg";

type TaskType = {
    key: string
    title: string
    isDone: boolean
}
// функция-генератор uuid
const uuid = ()=> {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export const Main = () => {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {
            key: uuid(),
            title: "Сделать уроки",
            isDone: true
        },
        {
            key: uuid(),
            title: "Почитать книгу",
            isDone: false
        },
        {
            key: uuid(),
            title: "Прибрать в комнате",
            isDone: false
        },
        {
            key: uuid(),
            title: "Сделать коллекцию",
            isDone: false
        },
        {
            key: uuid(),
            title: "Накормить кошку",
            isDone: false
        },
        ])
    const [inputValue, setInputValue] = useState("")

    const render: ListRenderItem<TaskType> = ({item}) => {
        return <TouchableWithoutFeedback onLongPress={() => removeTask(item.key)} onPress={()=>updateTask(item.key)}>
            <View style={[styles.item, {borderColor: item.isDone ? "green": "red", opacity:item.isDone ? 0.7: 1}]}>
                    <Text style={[styles.title, {textDecorationLine: item.isDone ? "line-through":"none"}]}>{item.title}</Text>
                    <Text>{item.isDone ? "✅😊" : "🤔"}</Text>
                <MemoMySvgComponent/>
            </View>

        </TouchableWithoutFeedback>
    }

    const addTask = () => {
        const newTask: TaskType = {
            key: uuid(),
            title: inputValue.toUpperCase(),
            isDone: false
        }
        setTasks([...tasks, newTask])
        setInputValue("")
    }

    const removeTask = (key: string) => {
        setTasks(tasks.filter(i => i.key !== key))
    }

    const updateTask = (key:string)=>{
        setTasks(tasks.map(i=> i.key=== key? {...i, isDone: !i.isDone}: i))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>{`${"Список задач".toUpperCase()}`}</Text>
            <View style={styles.header}>
                <TextInput value={inputValue} onChangeText={setInputValue}
                           style={styles.input} placeholder="введите текст"/>
                <TouchableOpacity onPress={addTask}>
                    <Text style={styles.titleHeaderAdd}>ADD</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.itemContainer}
                data={tasks}
                renderItem={render}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 10,
    },
    titleHeader: {
        textAlign: "center",
        fontSize: 24,
        fontStyle: "italic",
        color: "#000",
        marginBottom:10,
    },
    titleHeaderAdd:{
        width: 80,
        height: 40,
        fontSize:20,
        textAlign: "center",
        textAlignVertical:"center",
        color: "#000",
        border:"solid",
        borderWidth:1,
        borderColor:"#000",
        borderRadius: 5,
    },
    itemContainer:{
        marginTop:15,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        border: "solid",
        borderWidth: 1,
        // backgroundColor: "rgba(41,237,237,0.88)",
        backgroundColor: "rgba(248,213,213,0.88)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        borderRadius: 5,

    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        letterSpacing: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    input: {
        width: 230,
        height: 40,
        backgroundColor: "#fff",
        color: "#000",
        border: "solid",
        borderWidth: 1,
        borderColor: "#000",
        padding: 3,
        borderRadius: 5,
    }
});

// const id = `f${(+new Date).toString(16)}`
//случайный id по времени
// Result: f161807f6409
// const id = `f${(~~(Math.random()*1e8)).toString(16)}`
// Result: f5d47a64