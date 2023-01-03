import {createContext} from "react";
const data = {
    title: '学习',
    text: '提供者模式',
    listItem: ['#0', '#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10',
        '#11', '#12', '#13', '#14', '#15', '#16', '#17', '#18', '#19', '#20']
}
export const DataContext = createContext(data)
