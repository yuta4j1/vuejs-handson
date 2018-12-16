<template>
<div>
    <div style="margin-bottom: 50px">
        <headbar />
    </div>
    <div class="container center-block">
        <div id="contents">
            <div class="form-group row">
                <div class="col-sm-8">
                    <div class="form-group">
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="aTaskCache.text" placeholder="タスクを入力してください。"/>
                            <div class="input-group-append">
                                <button type="button" class="btn btn-primary" @click="todoAdd()">{{ buttonLabel.addButton }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">    
                    <button type="button" class="btn btn-info" @click="clear()">{{ buttonLabel.clearButton }}</button>
                </div>
                <div class="col-sm-1">
                </div>
            </div>
            <div class="row">
                <div id="display" class="col-sm-8">
                    <div class="list-group" v-if="isShowList()">
                        <a href="#" class="list-group-item list-group-item-action active">ToDoリスト</a>
                        <a href="#" class="list-group-item list-group-item-action" @click.stop="showModal(task)" v-for="task in tasks">{{ task.text }}</a>
                    </div>
                </div>
            </div>
            <div class="row" style="padding-top: 5%">
                <div class="col-sm-8">
                    <button id="saveButton" type="button" class="btn btn-primary btn-lg btn-block" @onclick="save()">Save</button>
                </div>
            </div>
        </div>
        <!-- モーダル画面 -->
       <detail-modal :tasks='tasks' ref="modal"></detail-modal>

    </div>
</div>
</template>

<script>
import DetailModal from '@/pages/components/modal.vue'
import Header from '@/pages/components/Header.vue'
import { mapGetters } from 'vuex'
import * as moment from 'moment'

export default {
    data: function() {
        return {
            aTaskCache: {
                id: 0,
                text: '',
                remarks: '',
                dateTime: '',
                done: false
            },
            tasks: [],
            buttonLabel: {
                addButton: '追加',
                clearButton: 'クリア'
            }
        }
    },
    methods: {
        initTaskCache: function() {
            // タスクキャッシュの初期化
            this.aTaskCache = {
                id: 0,
                text: '',
                remarks: '',
                datetime: '',
                done: false
            }
        },
        todoAdd: function() {
            this.aTaskCache['id'] = this.tasks.length + 1;
            this.aTaskCache['dateTime'] = moment().format('YYYY-MM-DD HH:mm:SS');
            this.tasks.push(this.aTaskCache);
            this.initTaskCache();
        },
        clear: function() {
            initTaskCache();
            this.tasks = [];
        },
        isShowList: function() {
            return this.tasks.length >= 1;
        },
        showModal: function(task) {
            this.$refs.modal.represent(task);
        },
        save: function() {
            this.$store.dispatch('commitTodos', this.tasks);
        },
    },
    computed: {
        ...mapGetters('task', {
            'storeTasks': 'getTasks'
        })
    },
    mounted: function() {
        console.log('[index.vue mounted]')
        this.tasks.push(storeTasks);
    },
    components: {
        'detail-modal': DetailModal,
        'headbar': Header
    }
}

</script>