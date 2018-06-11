<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field 
                prepend-icon="person" 
                name="email" 
                label="Email" 
                type="email"                 
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field 
                prepend-icon="lock" 
                name="password" 
                label="Password" 
                type="password" 
                :counter="passwordCounter"
                v-model="password" 
                :rules="passwordRules"                                
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export default {
  data () {
    return {
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => emailRegexp.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordCounter: 6,
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= this.passwordCounter) || 'Password must be more than ' + this.passwordCounter + ' characters'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
      }
    }
  }
}
</script>

