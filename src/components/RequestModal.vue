<template lang="pug">
    el-dialog(:title='title', :visible.sync='dialogFormVisible')
        el-form(label-position='left', :model='ruleForm', :rules="rules", status-icon, ref="ruleForm" )
            el-form-item(prop="name")
                el-input(v-model='ruleForm.name', placeholder="Ваше имя", autocomplete="off")
            el-form-item(prop="email")
                el-input(v-model='ruleForm.email', placeholder="E-mail", autocomplete="off")
            el-form-item(prop="phone")
                el-input(v-model='ruleForm.phone', placeholder="Телефон", id="form_phone")
            el-form-item(prop="checkbox")
                el-checkbox(v-model='ruleForm.checkbox', fill="#007f48", autocomplete="off", label='Согласен с обработкой персональных данных')
        span.dialog-footer(slot='footer')
            el-button(type='primary', @click='submitForm()') Отправить
</template>
<script>
import Inputmask from 'inputmask';
import ApiTrello from '../api/ApiTrello.js'
export default {
    name: 'requestmodal',
    props: {
        title: String,
    },
    data() {
        var validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Обязательное поле'));
            } else {
                if (this.ruleForm.name !== '' && this.ruleForm.name.length < 20) {
                    callback();
                } else {
                    callback(new Error('Слишком длинное Имя'))
                }
            }
        };
        var validateEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Обязательное поле'));
            } else {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const isTrue =  re.test(value);
                if (!isTrue) {
                    callback(new Error('Введите в формате. Пример: name@mail.ru'));
                } else {
                    callback();
                }
            }
        };
        var validatePhone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Обязательное поле'));
            } else {
                let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
                const isTrue =  re.test(value);
                if (!isTrue) {
                    callback(new Error('Неправильный телефон'));
                } else {
                    callback();
                }
            }
        };
        var validateCheckBox = (rule, value, callback) => {
            if (value === false) {
                callback(new Error('Пожалуйста согласитесь с пользовательским соглашением'));
            } else {
                callback();
            }
        };
        return {
            dialogFormVisible: true,
            ruleForm: {
                name: '',
                email: '',
                phone: '',
                checkbox: false
            },
            rules: {
                name: [ {validator: validateName, trigger: 'blur' }],
                email: [ {validator: validateEmail, trigger: 'blur' }],
                phone: [ {validator: validatePhone, trigger: 'blur' }],
                checkbox: [ {validator: validateCheckBox, trigger: 'change' }],
            }
        };
    },
    methods: {
        submitForm() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    const idBoard = "5c35c65af44c5f13f13fcc65"
                    const idList = "5c35c68a3a95a04f8e7f0acd"
                    let description = `Форма: ${this.title}\n Имя: ${this.ruleForm.name}\n Телефон: ${this.ruleForm.phone}\n E-mail: ${this.ruleForm.email}`;
                    let data = {
                        "name":`Запрос с сайта ${window.location.href}`,
                        "desc": description,
                        "idBoard": idBoard,
                        "idList": idList,
                    }
                    new Promise((resolve, reject) => {
                        ApiTrello.post('', data)
                            .then(response => {
                                this.dialogFormVisible = false
                                resolve(response)
                            })
                            .catch(error => {
                                console.log(error)
                                reject(error)
                            })
                    })
                } else {
                    return false;
                }
            });
        }
    },
    mounted () {
        setTimeout(() => {
            var im = new Inputmask("+7 (999) 999-99-99");
            im.mask(document.getElementById('form_phone'));
        }, 2000);
    }
};
</script>
<style lang="stylus" scoped>
.el-button--primary 
    background-color #007f48
    border-color #007f48
.is-success
    .el-checkbox__inner
        background-color #007f48
        border-color #007f48
.el-form-item
    text-align: left;

</style>
