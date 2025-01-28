import { useState } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { styles } from './styles';
import { colors } from '@/src/styles/colors';

import { Categories } from '@/src/components/categories';
import { Input } from '@/src/components/input';

import { Button } from '@/src/components/button';
import { Category } from '@/src/components/category';

export default function Add() {
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")


    function handleAdd() {
        if(!category) {
            return Alert.alert("Selecione uma categoria")
        }

        if (!name.trim()) {
            alert("Preencha o campo nome")
            return
        }

        if (!url.trim()) {
            alert("Preencha todos o campo URL")
            return
        }
        
        alert("Adicionado com sucesso")

    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text style={styles.title}>Novo</Text>
            </View>
            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories onChange={setCategory} selected={category}/>
            <View style={styles.form}>
                <Input placeholder="Nome" onChangeText={setName} autoCorrect={false}/>
                <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false}/>
                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}