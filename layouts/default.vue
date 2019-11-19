<template>
  <v-app light>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      height="auto"
      color="secondery"
      :fixed="true"
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          to="/myPage/message"
          color="accent"
          flat
        >
          <v-icon size="36px">forum</v-icon>
        </v-btn>
        <v-btn
          to="/"
          color="accent"
          flat
        >
          <v-icon size="36px">home</v-icon>
        </v-btn>
        <v-btn
          to="/myPage/send"
          color="accent"
          flat
        >
          <v-icon size="36px">mail</v-icon>
        </v-btn>
        <v-flex
          primary
          lighten-2
          text-xs-center
          gray--text
          xs12
        > 
          cheerfor &copy; Gaiax Co,Ltd
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
}
</script>
