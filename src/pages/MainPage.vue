<template>
  <div id="app">
    <b-container class="">
      <b-row align-v="center" class="">
        <b-col class="ps-0 pe-0">
          <p class="fs-2 fw-bold">Ситуации</p>
        </b-col>
        <b-col class="ps-0 pe-0 d-flex justify-content-sm-end align-items-center">
          <div>
            <p class="pe-2">Отобразить на дату:</p>
          </div>
          <div class="">
            <b-form-datepicker
                id="datepicker"
                v-model="myDate"
                class="mb-2 border border-primary datepicker-primary"
                locale="ru">
            </b-form-datepicker>
          </div>
        </b-col>
      </b-row>

      <b-row class="pt-5 pb-2">
        Наименование ситуации
      </b-row>

      <b-row class="">
        <b-form-select
            class="border border-primary form-select"
            v-model="selected"
            :options="situations"
            :@change="selectSituation()">
          <option disabled value="">Выберите ситуацию</option>
        </b-form-select>
      </b-row>

      <b-row>
        <b-col class="ps-0 pe-0 pt-5">
          <button type="button" class="btn btn-lg btn-cr" @click="$router.push('/add')">
            + Создать ситуацию
          </button>
        </b-col>
      </b-row>

      <b-row class="pt-5">
        <strong class="fs-2 fw-bold ps-0 pe-0">
          {{this.showedSituation.name}}
        </strong>
      </b-row>

      <b-row class="pt-5">
        <div class="ps-0 pe-0">
          <b-button
              :class="[currentMode ? 'active' : '']"
              @click="toggle"
              variant="primary"
              class="btn btn-lg btn-cr me-2">Последствия
          </b-button>

          <b-button
              :class="[!currentMode ? 'active' : '']"
              @click="toggle"
              variant="primary"
              class="btn btn-lg btn-cr">Факторы
          </b-button>
        </div>
      </b-row>

      <b-row class="pt-5">
        <template v-if="currentMode">
          <b-table class="ps-0 pe-0 table table-bordered"
                   hover
                   head-row-variant="primary"
                   responsive
                   :items="showedSituation.consequencesIndicators"
                   :fields="fields">
            <template #cell(№)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(factorName)="data">
              {{data.item.factorName}}
            </template>
          </b-table>
        </template>

        <template v-else>
          <b-table class="ps-0 pe-0 table-bordered"
                   hover
                   responsive
                   head-row-variant="primary"
                   :items="showedSituation.factorsIndicators"
                   :fields="fields">
            <template #cell(№)="data">
              {{ data.index + 1 }}
            </template>
          </b-table>
        </template>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import situationsList from '../json/situationsList.json'
import situation13 from '../json/situation-13.json'
import situation14 from '../json/situation-14.json'
import situation8 from '../json/situation-8.json'

export default {
  data(){
    return{
      sortedUniq: [],
      situations: situationsList.items,
      selected: '',
      selectedSituation: '',
      showedSituation:'',
      situation13: situation13,
      situation14: situation14,
      situation8: situation8,
      myDate: new Date().toISOString(),
      currentMode: true,
      fields:[
        '№',
        {
          key: '',
          label: '№',
        },
        {
          key: 'factorName',
          label: 'Наименование',
        },
        {
          key: 'indicatorName',
          label: 'Значение',
        },
        {
          key: 'indicatorWeight',
          label: 'Оценка тяжести',
        },
      ],
    }
  },
  methods: {
    selectSituation(){
      this.situations.forEach(element =>
          {
            if(element.value === this.selected)
            {
              switch (this.selected)
              {
                case 8: this.showedSituation = situation8
                  break;
                case 13: this.showedSituation = situation13
                  break;
                case 14: this.showedSituation = situation14
                  break;
              }
            }
          }
      )
    },
    toggle(){
      this.currentMode = !this.currentMode
    },
  },
  computed:{

  },
}
</script>

<style scoped>
.btn-cr{
  background-color: #e8f2fc;
  color: #0378fb;
}
</style>