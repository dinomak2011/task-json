<template>
  <form @submit.stop.prevent="onSubmit">
  <div>
    <b-container class="d-flex flex-column ps-0 pe-0">
      <b-row>
          <p class="fs-2 fw-bold">Добавление ситуации</p>
      </b-row>

      <b-row class="select-bu">
        <b-form-group label="Функция"
                      label-for="example-input-2"
                      id="example-input-group-2"
                      class="border rounded pb-3 pt-3">
        <b-form-select id="example-input-2"
                       class="form-select"
                       v-model="$v.form.situation.$model"
                        name="example-input-2"
                       :options="situations"
                       :state="validateState('situation')"
                       aria-describedby="input-2-live-feedback" size="lg">
        </b-form-select>
          <p v-if="!$v.form.situation.$model" class="invalid-feedback">Обязательное поле</p>
        </b-form-group>
      </b-row>

      <b-row class="select-bu">
        <b-form-group label="Действия"
                      label-for="example-input-2"
                      id="example-input-group-2"
                      class="border rounded pb-3 pt-3">
          <b-form-select id="example-input-2"
                         multiple
                         class="form-select"
                         v-model="$v.form.funcName.$model"
                         name="example-input-2"
                         :options="funcName"
                         :state="validateState('funcName')"
                         aria-describedby="input-2-live-feedback" size="lg">
          </b-form-select>
          {{$v.form.funcName.$model}}
          <p v-if="!$v.form.funcName.$model" class="invalid-feedback">Обязательное поле</p>
        </b-form-group>
      </b-row>

      <b-row class="select-bu">
        <b-form-group label="Функция"
                      label-for="example-input-2"
                      id="example-input-group-2"
                      class="border rounded pb-3 pt-3">
          <b-form-select id="example-input-2"
                         class="form-select"
                         v-model="$v.form.factors.$model"
                         name="example-input-2"
                         :options="factors"
                         :state="validateState('factors')"
                         aria-describedby="input-2-live-feedback" size="lg">
          </b-form-select>
          <p v-if="!$v.form.factors.$model" class="invalid-feedback">Обязательное поле</p>
        </b-form-group>
      </b-row>

      <b-row class="select-bu">
        <b-form-group label="Действия"
                      label-for="example-input-2"
                      id="example-input-group-2"
                      class="border rounded pb-3 pt-3">
          <b-form-select id="example-input-2"
                         multiple
                         class="form-select"
                         v-model="$v.form.active.$model"
                         name="example-input-2"
                         :options="active"
                         :state="validateState('active')"
                         aria-describedby="input-2-live-feedback" size="lg">
          </b-form-select>
          {{$v.form.active.$model}}
          <p v-if="!$v.form.active.$model" class="invalid-feedback">Обязательное поле</p>
        </b-form-group>
      </b-row>

      <b-row class="select-bu">
        <b-form-group label="Наименование ситуации"
                      label-for="example-input-2"
                      id="example-input-group-2"
                      class="border rounded pb-3 pt-3">
          <b-form-select id="example-input-2"
                         class="form-select"
                         v-model="$v.form.items.$model"
                         name="example-input-2"
                         :options="items"
                         :state="validateState('items')"
                         aria-describedby="input-2-live-feedback" size="lg">
          </b-form-select>
          <p v-if="!$v.form.items.$model" class="invalid-feedback">Обязательное поле</p>
        </b-form-group>
      </b-row>

      <b-row>
        <p class="fs-2 fw-bold">Последствия</p>
      </b-row>

      <b-row class="select-bu">
        <b-form-group label="Наименование ситуации"
                      label-for="example-input-2"
                      id="example-input-group-2"
                      class="border rounded pb-3 pt-3">
          <b-form-select id="example-input-2"
                         class="form-select"
                         v-model="$v.form.situationsName.$model"
                         name="example-input-2"
                         :options="situationsName"
                         :state="validateState('situationsName')"
                         aria-describedby="input-2-live-feedback" size="lg">
          </b-form-select>
          <p v-if="!$v.form.situationsName.$model" class="invalid-feedback">Обязательное поле</p>
        </b-form-group>
      </b-row>




      <b-form-checkbox class="select-bu pb-3"
                       v-model="form.acceptTerms"
                       :state="validateState('acceptTerms')">Наступило на практике
      </b-form-checkbox>



      <b-row class="select-bu">
          <b-form-group label="Имя автора"
                      label-for="example-input-2"
                      id="example-input-group-2"
                      class="border rounded pb-3 pt-3">
          <b-form-select id="example-input-2"
                         class="form-select"
                         v-model="$v.form.author.$model"
                         name="example-input-2"
                         :options="author"
                         :state="validateState('author')"
                         aria-describedby="input-2-live-feedback" size="lg">
          </b-form-select>
            <p v-if="!$v.form.author.$model" class="invalid-feedback">Обязательное поле</p>
        </b-form-group>
      </b-row>

      <b-row class="ps-0 pe-0">
      <b-table class="table-bordered rounded table-borderless"
               head-row-variant="primary"
               :items="items"
               :fields="fields">
        <template #cell(text)="data">
            <b-form-checkbox
                @change="()=>{selectItems(data.item.value)}"
                :state="validateState('selectedItems')"
                :checked="data.item.checked">{{data.item.text}}
            </b-form-checkbox>
        </template>
      </b-table>
      </b-row>

      <b-row class="select-bu">
        <b-col class="ps-0 pe-0 pt-2">
          <button type="button" class="btn btn-lg btn-cr">
            + Добавить
          </button>
        </b-col>
      </b-row>

      <b-row>
        <p class="fs-2 fw-bold">Коррупциогенные факторы</p>
      </b-row>

      <b-row class="select-bu">
        <b-form-group label="Наименование фактора"
                      label-for="example-input-2"
                      id="example-input-group-2"
                      class="border rounded pb-3 pt-3">
          <b-form-select id="example-input-2"
                         class="form-select"
                         v-model="$v.form.factorName.$model"
                         name="example-input-2"
                         :options="factorName"
                         :state="validateState('factorName')"
                         aria-describedby="input-2-live-feedback" size="lg">
          </b-form-select>
          <p v-if="!$v.form.factorName.$model" class="invalid-feedback">Обязательное поле</p>
        </b-form-group>
      </b-row>

      <b-row class="ps-0 pe-0">
      <b-table class="table-bordered ps-0 pe-0 table-borderless"
               head-row-variant="primary"
               :fields="fields"
               :items="factors">
        <template #cell(text) ="data">
            <b-form-checkbox @change="()=>{selectFactor(data.item.value)}"
                             :state="validateState('selectedFactors')"
                             :checked="data.item.checked">{{data.item.text}}
            </b-form-checkbox>
        </template>
        </b-table>
      </b-row>

      <b-row>
        <b-col class="ps-0 pe-0 pt-2">
          <button type="button" class="btn btn-lg btn-cr">
            + Добавить
          </button>
        </b-col>
      </b-row>

      <b-row class="pt-5 select-bu d-flex justify-content-start">
        <div class="ps-0 pe-0">
          <b-button type="submit" variant="primary">Cохранить</b-button>
          <b-button class="ml-2"> Отмена </b-button>
        </div>
      </b-row>

    </b-container>
  </div>
  </form>
</template>

<script>

import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup (){
    return { $v: useVuelidate() }
  },
  data(){
    return{
      selected: null,
      item:'',
      form: {
        situation: null,
        factors: [],
        items: [],
        situationsName: null,
        author: null,
        factorName: null,
        funcName: null,
        active: null,
        acceptTerms: false,
        selectedFactors: [],
        selectedItems: []
      },
      fields: [
        {
          key:'text',
          label:'Значение последствия'
        },
        {
          key:'value',
          label:'Оценка тяжести'
        },
      ],
      situations: [
        { value: 1, text: "Ситуация 1" },
        { value: 2, text: "Ситуация 2" },
        { value: 3, text: "Ситуация 3"}
      ],
      items:[
        {text: 'До 500 000', value:1, checked: false},
        {text: 'От 500 000 до 1 000 000', value:2, checked: false},
        {text: 'От 1 000 000 до 5 000 000', value:3, checked: false},
        {text: 'Свыше 5 000 000', value:4, checked: false},
      ],
      factors:[
        {text: 'Ветеринария', value:1},
        {text: 'Транспорт', value:2},
        {text: 'Социальное обслуживание', value:3},
        {text: 'Строительство', value:4},
      ],
      situationsName: [
        { value: 1, text: "Ситуация 1" },
        { value: 2, text: "Ситуация 2" },
        { value: 3, text: "Ситуация 3"}
      ],
      author: [
        { value: 1, text: "Имя 1" },
        { value: 2, text: "Имя 2" },
        { value: 3, text: "Имя 3"}
      ],
       factorName: [
        { value: 1, text: "Фактора 1", checked: false},
        { value: 2, text: "Фактора 2",checked: false},
        { value: 3, text: "Фактора 3", checked: false}
      ],
      funcName: [
        { value: 1, text: "Функция 1" },
        { value: 2, text: "Функция 2" },
        { value: 3, text: "Функция 3"}
      ],
      active: [
        { value: 1, text: "Действие 1" },
        { value: 2, text: "Действие 2" },
        { value: 3, text: "Действие 3"}
      ],
    }
  },
  validations: {
    form:{
      situation: { required },
      factors: { required },
      items: { required },
      situationsName: { required },
      author: { required } ,
      factorName: { required },
      funcName: { required },
      active: { required },
      acceptTerms: { mustBeTrue(value) {return value}},
      selectedFactors: { required },
      selectedItems: { required },
    },
  },
  computed: {
  },
  methods:{
    selectFactor(id){
      this.$v.form.selectedFactors.$touch()
      if(this.form.selectedFactors.includes(id)){
        this.form.selectedFactors = _.without(this.form.selectedFactors,id)
      }else{
        this.form.selectedFactors.push(id)
      }
      console.log(this.form.selectedFactors.length)
    },
    selectItems(id){
      this.$v.form.selectedItems.$touch()
      if(this.form.selectedItems.includes(id)){
        this.form.selectedItems = _.without(this.form.selectedItems,id)
      }else{
        this.form.selectedItems.push(id)
      }
      console.log(this.form.selectedItems.length)
    },
      onSubmit(){
        this.$v.form.$touch();
        if (this.$v.form.$anyError){
          return
        }
      },
    // resetForm() {
    //   this.form = {
    //     situation: null,
    //     factors: null,
    //     items: null,
    //     situationsName: null,
    //     author: null,
    //     factorName: null,
    //     funcName: null,
    //     active: null,
    //     value: null,
    //     selectedFactors: [],
    //   };
    //   this.factors.forEach(item=> item.checked =false)
    //   this.$v.factors.$touch()
    //   this.$v.form.selectedFactors.$touch()
    //
    //   this.$nextTick(() => {
    //     this.$v.$reset();
    //   });
    // },
      validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
  }
}
</script>

<style scoped>
.forms{

}
*{

}
.btn-sv{
  background-color: #0378fb;
  color: #e8f2fc;
}
.select-bu{
  margin-bottom: 20px;
}
.btn-cr{
  background-color: #e8f2fc;
  color: #0378fb;
}
p{
  padding-left: 0;
  padding-right: 0;
}
b-form-group{}
</style>