<template>
  <el-container style="min-height: 100vh;">
    <el-header class="header fixed" style="padding: 1.25rem;height: 3.75rem;">
      <div class="header-container">
          <img src="https://i.postimg.cc/6QZgJR3k/aa21211cf0.jpg?v=5.1.4" style="height: 2.25rem;" />
          <div class="name">Lewius</div>
      </div>
      <div class="header-container">
        <el-dropdown>
          <a>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
          </a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-avatar shape="square" :size="'medium'" :src="'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'"></el-avatar>
      </div>
    </el-header>
    <el-container class="container">
      <el-aside class="aside">
        <el-menu class="left-menu" style="position: fixed;height: calc(100vh - 3.75rem);"
          :default-openeds="['1', '3']"
          text-color="#333"
          active-text-color="#409eff">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
          <el-menu-item-group>
            <template slot="title">page router</template>
            <router-link to="/">
              <el-menu-item index="1-1">Index</el-menu-item>
            </router-link>
            <router-link to="/dashboards">
              <el-menu-item index="1-2">Dashboards</el-menu-item>
            </router-link>
            <router-link to="/form">
              <el-menu-item index="1-3">Form</el-menu-item>
            </router-link>
            <router-link to="/transfer">
              <el-menu-item index="1-4">Transfer</el-menu-item>
            </router-link>
            <router-link to="/table">
              <el-menu-item index="1-5">Table</el-menu-item>
            </router-link>
              <router-link to="/upload">
              <el-menu-item index="1-5">Upload</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
      </el-aside>
      <el-main style="background-color: #edf1f7;">
        <div class="main">
          <router-view></router-view>
        </div>
        
      </el-main>
    </el-container>
  </el-container>

</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}

a {
  cursor: pointer;
  text-decoration: none;
}

.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  box-shadow: 0 1px 10px #ccc;
  background-color: #fff;
}
.header-container {
  display: flex;
  align-items: center;
}
.name {
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.container {
  padding-top: 3.75rem;
}

.aside{
  /* width: 16rem; */
}
.left-menu {
    width: 300px;
}

.main {
  /* padding: 1.25rem 1.25rem .75rem; */
  background-color: #fff;
}
</style>
