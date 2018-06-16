<template>
<div>
  <b-navbar toggleable="md" type="light" variant="white">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>


  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#"><i class="fa fa-lg fa-cube" aria-hidden="true"></i> TERiSM Nuxt</b-navbar-brand>
  </b-navbar>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>

      <router-link tag="b-nav-item" to="/">
        <a class="nav-link">Home</a>
      </router-link>
      <router-link tag="b-nav-item" to="/hello">
        <a class="nav-link">Hello</a>
      </router-link>
      <router-link tag="b-nav-item" to="/zcash">
        <a class="nav-link">Zcash</a>
      </router-link>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <!-- <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form> -->

      <!-- <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown> -->

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>
<!-- navbar-1.vue -->
</template>
