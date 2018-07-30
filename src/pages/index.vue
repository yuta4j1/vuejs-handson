<template>
    <div class="container center-block">
        <h3>Hello World!!!</h3>
        <div id="contents">
            <div class="form-group row">
                <div class="col-sm-8">
                    <div class="form-group">
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="aTodo.text" placeholder="タスクを入力してください。"/>
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
                        <a href="#" class="list-group-item list-group-item-action" @click.stop="showModal(todo)" v-for="todo in todos">{{ todo.text }}</a>
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
       <detail-modal :datas='todos' ref="modal"></detail-modal>

    </div>
</template>

<script>
import DetailModal from './components/modal.vue'

export default {
    data: function() {
        return {
            aTodo: {
                text: '',
                description: '',
                done: false
            },
            todos: [],
            buttonLabel: {
                addButton: '追加',
                clearButton: 'クリア'
            }
        }
    },
    methods: {
        todoAdd: function() {
            this.todos.push(this.aTodo);
            this.aTodo = {text: '', done: false};
        },
        clear: function() {
            this.todos = [];
        },
        isShowList: function() {
            return this.todos.length !== 0 ? true : false;
        },
        showModal: function(todo) {
            this.$refs.modal.represent(todo);
        },
        todos: function() {
            this.$store.dispatch('commitTodos', this.todos);
        }
    },
    components: {
        'detail-modal': DetailModal
    }
}

</script>