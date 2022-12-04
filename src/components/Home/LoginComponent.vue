<script setup>
import $ from 'jquery';
import 'remixicon/fonts/remixicon.css';

import UIForm from '../UI/UIFormComponent.vue';
import UIInput from '../UI/UIInputComponent.vue';
import UIButton from '../UI/UIButtonComponent.vue';

</script>

<template>
    <UIForm :text="formName" :id="formId + '-form'" @submit="onSubmit">
        <li v-for="field in formFields" :key="field.id" class="inline">
            <UIInput :text="field.text" :type="field.type" :id="((field.id) + '-' + formId)" />
        </li>
        <UIButton text="Login" type="normal" submit />
    </UIForm>
</template>

<script>
const formFields = [
    {
        'text': 'Email',
        'name': 'email',
        'type': 'text',
        'id': 'email',
    },
    {
        'text': 'Password',
        'name': 'password',
        'type': 'password',
        'id': 'password',
    },
];

// 
/**
 * ? when submitting, getElements() will turn the fields into an accessible array, as such
 * this.fields['fieldId'] = {
 *  input: input field id
 *  error: error span id
 * }
 * 
 * to easily access with this.fields.email.input.val() // for example
 */
import User from '../../models/User';

export default {
    data() {
        {
            return {
                formName: '',
                formId: 'login',
                fields: {},
            }
        }
    },

    created() {
        this.formName = 'Login';
        this.formElement = $('#' + this.formId);
    },

    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },

    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.getElements();
            this.loading = true;

            // if (false) {
            //     this.loading = false;
            //     return;
            // }

            const NewAccount = new User('', this.fields['email'].input.val(), this.fields['password'].input.val());
            if (NewAccount.email && NewAccount.password) {
                this.$store.dispatch('auth/login', NewAccount).then(
                    () => {
                        this.$router.push('/combat');
                    },
                    error => {
                        this.loading = false;
                        this.message =
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString();
                    }
                );
            }

        },
        getElements() {
            formFields.forEach((field) => {
                this.fields[field.id] =
                {
                    input: $('#' + field.id + '-' + this.formId + ' > input'), // this.fields['email'].input.val()
                    error: $('#' + field.id + '-' + this.formId + ' > span') // this.fields['email'].error.show()
                }
            })
        },
    }
}
</script>
<style scoped>

</style>
