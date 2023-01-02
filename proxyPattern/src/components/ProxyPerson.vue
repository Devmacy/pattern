<script setup>
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};
// 创建代理对象
const personProxy = createProxyPerson(person)

/**
 * 创建代理对象
 * @param person 对象
 * @returns {*} Proxy
 */
function createProxyPerson(person) {
  return new Proxy(person, {
    get: (obj, prop) => {
      obj[prop] ? alert(`当前属性${prop}的值是${Reflect.get(obj, prop)}\n原对象的值为${JSON.stringify(person)}`) : alert(`该属性不存在`)
    },

    set: (obj, prop, value) => {
      if (prop === "age" && typeof value !== "number") {
        alert(`不能够设置非数字给年龄`);
        return
      }

      if (prop === "name" && value.length < 2) {
        alert(`不能够设置一位的名字`);
        return
      }

      alert(`设置${prop}的值从${obj[prop]} 到 ${value}`)
      Reflect.set(obj, prop, value)
      return true
    }
  });
}

function setProxyProp(prop, value) {
  personProxy[prop] = value;
}

function getProxyProp(prop) {
  return personProxy[prop];
}

</script>

<template>
  <div style="display: flex;flex-direction: column">
    <button @click="setProxyProp('name','冰')">更改代理对象name属性为冰</button>
    <button @click="setProxyProp('name','阿冰')">更改代理对象name属性为阿冰</button>
    <button @click="setProxyProp('age',18)">更改代理对象age属性为18</button>

    <button @click="getProxyProp('name')">获取当前代理对象name属性</button>
    <button @click="getProxyProp('firstName')">获取当前代理对象firstName属性</button>
    <button @click="getProxyProp('age')">获取当前代理对象age属性</button>
  </div>
</template>

<style scoped>
</style>
